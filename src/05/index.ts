import { readInput } from '../utils/file';

const DATAFILE_PATH = 'datas/05/data.txt';

export interface CrateMovements {
    move: number;
    from: number;
    to: number;
}

export class CrateStack {
    constructor(public stacks: string[][]) {}

    moveCratesItemByItem({move, from, to}: CrateMovements): void {
        for(let k=1; k<=move; k++) {
            const item = this.stacks[from-1].pop();
            if(!item) {
                return;
            }
            this.stacks[to-1].push(item);
        }
    }

    moveCratesByStack({move, from, to}: CrateMovements): void {
        const fromStack = this.stacks[from-1];
        const [toMove, toKeep] = fromStack.length <= move 
            ? [fromStack, []]
            : [fromStack.slice(fromStack.length - move, fromStack.length), fromStack.slice(0, fromStack.length - move)];

        this.stacks[to-1].push(...toMove);
        this.stacks[from-1] = toKeep;
    }

    getTop(): string {
        return this.stacks.map((stack) => stack[stack.length-1]).join('');
    }
}

export function deserializeCrates(lines: string[]): CrateStack {
    const index = lines.pop();
    const stacksNumber = (index?.match(/\d+/g) ?? []).length
    const reversedLines = lines.reverse();
    const data = reversedLines
        .reduce<string[][]>((crates: string[][], line: string) => {
            const crateLine: Array<string | null>= (line.match(/(\[.\]|\s{4})/g) ?? []).map((s: string) => {
                const crate = s.match(/[A-Z]/);
                return crate ? crate[0] : null;
            })
            crateLine.forEach((crate: string | null, index: number) => {
                if(crate) {
                    crates[index].push(crate);
                }
            })
            return crates;
        }, Array.from({length: stacksNumber}, () => []));
    return new CrateStack(data);
}

export function deserializeMovements(lines: string[]): CrateMovements[] {
    return lines.map((line) => {
        const [move, from, to] = (line.match(/\d+/g) ?? [])
        if(!move || !from || !to) {
            throw new Error('failed to parse movement');
        }
        return {move: +move, from: +from, to: +to}
    })
}

export function loadData(): [stackInput: CrateStack, movementInput: CrateMovements[]] {
    const input = readInput(DATAFILE_PATH);
    const inputDelimitationIndex = input.findIndex((el) => el==='');
    const stackInput = input.slice(0, inputDelimitationIndex);
    const movementInput = input.slice(inputDelimitationIndex+1, input.length);

    const stacks = deserializeCrates(stackInput);
    const movements = deserializeMovements(movementInput)

    return [stacks, movements];
}

export function part1(): string {
    const [stacks, movements] = loadData();
    movements.forEach((movement) => {
        stacks.moveCratesItemByItem(movement)
    })
    return stacks.getTop();
}

export function part2(): string {
    const [stacks, movements] = loadData();
    movements.forEach((movement) => {
        stacks.moveCratesByStack(movement)
    })
    return stacks.getTop();
}
