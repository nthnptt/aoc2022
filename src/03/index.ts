import { readInput } from '../utils/file';


const DATAFILE = 'datas/03/data.txt';
const ALPHABET_LETTRE = 26;
const A_UPPERCASE_CHARCODE = 'A'.charCodeAt(0);
const A_LOWERCASE_CHARCODE = 'a'.charCodeAt(0);

function getItemScore(item: string): number {
    const isUppercase = item === item.toUpperCase();
    const itemCharCode = item.charCodeAt(0);
    return isUppercase 
        ? ALPHABET_LETTRE + itemCharCode - A_UPPERCASE_CHARCODE + 1 
        : itemCharCode - A_LOWERCASE_CHARCODE + 1;
}

function findItemInCommon(...[first, ...others]: string[]): string {
    const othersLength = others.length
    for (const item of first.split('')) {
        const otherWithItem = others.filter((other: string) => other.includes(item));
        if(otherWithItem.length === othersLength) {
            return item;
        }
    }
    return '';
}

function findItemInTwoRuckstackCompartments(ruckstack: string): string {
    const compartmentItemCount = ruckstack.length/2;
    const compartmentsOne = ruckstack.slice(0, compartmentItemCount);
    const compartmentsTwo = ruckstack.slice(compartmentItemCount, ruckstack.length);
    return findItemInCommon(compartmentsOne, compartmentsTwo);

}

export function findPrioritiesRuckstacksScore(ruckstack: string): number {
    const itemInTwoCompartments = findItemInTwoRuckstackCompartments(ruckstack);
    return getItemScore(itemInTwoCompartments);
}

export function findThreeElvesRuckstacksScore(ruckstacks: string[]): number {
    const commonItem = findItemInCommon(...ruckstacks);
    return getItemScore(commonItem);

}

export async function part1(): Promise<number> {
    const ruckstacks = await readInput(DATAFILE);
    return ruckstacks.reduce<number>((sum, ruckstack) => sum + findPrioritiesRuckstacksScore(ruckstack), 0);
}

export async function part2(): Promise<number> {
    const ruckstacksGroupedByThree = (await readInput(DATAFILE)).reduce<string[][]>((acc, ruckstack) => {
        if(acc[acc.length - 1].length === 3) {
            acc.push([ruckstack]);
            return acc;
        }
        acc[acc.length-1].push(ruckstack);
        return acc;


    }, [[]]);
    return ruckstacksGroupedByThree.reduce<number>((sum, ruckstacks) => sum + findThreeElvesRuckstacksScore(ruckstacks), 0);
}
