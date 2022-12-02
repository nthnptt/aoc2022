import { readInput } from '../utils/file';

const DATAFILE_PATH = 'datas/02/data.txt';

export type Shape = "scissor" | "paper" | "rock";
export type ElvesHelpOption = 'win' | 'loose' | 'draft';

interface ShapeFightResult {
    loose: Shape;
    win: Shape;
}


const shapeFightMatrix: {[key in Shape]: ShapeFightResult}= {
    "scissor": {loose: "rock", win: "paper"},
    "paper": {loose: "scissor", win: "rock"},
    "rock": {loose: "paper", win: "scissor"},
}

const shapeValue: {[key in Shape]: number} = {
    "rock": 1,
    "paper": 2,
    "scissor": 3,
}

const gameResultScore: {[key in ElvesHelpOption]: number} = {
    "loose": 0,
    "draft": 3,
    "win": 6,
}

export function computeHalfScore(playerChoice: Shape, opponentChoice: Shape): number {
    if(playerChoice === opponentChoice) {
        return 3;
    }
    return shapeFightMatrix[playerChoice].win === opponentChoice ? 6 : 0;
}

export function computeHalfScoreWithHelp(opponentChoice: Shape, help: ElvesHelpOption): number {
    const halfResultScore = gameResultScore[help];
    switch(help) {
        case("loose"):
            return shapeValue[shapeFightMatrix[opponentChoice].win] + halfResultScore
        case("draft"):
            return shapeValue[opponentChoice] + halfResultScore
        case("win"):
            return shapeValue[shapeFightMatrix[opponentChoice].loose] + halfResultScore
    }
    return 0;
}

export function shapeScore(shape: Shape): number {
    return shapeValue[shape];
}

export function parseHalf(half: string): [opponentChoice: Shape, playerChoice: Shape] {
    const decryptedHalf = half
        .replace('A', 'rock')
        .replace('B', 'paper')
        .replace('C', 'scissor')
        .replace('X', 'rock')
        .replace('Y', 'paper')
        .replace('Z', 'scissor')
    const [opponentChoice, playerChoice] = decryptedHalf.split(' ');
    return [opponentChoice as Shape, playerChoice as Shape];
}

export function parseHalfWithHelp(half: string): [opponentChoice: Shape, help: ElvesHelpOption] {
    const decryptedHalf = half
        .replace('A', 'rock')
        .replace('B', 'paper')
        .replace('C', 'scissor')
        .replace('X', 'loose')
        .replace('Y', 'draft')
        .replace('Z', 'win')
    const [opponentChoice, help] = decryptedHalf.split(' ');
    return [opponentChoice as Shape, help as ElvesHelpOption];
}


export function computeGameScore(halfs: string[]): number {
    return halfs
        .map(parseHalf)
        .map(([opponent, player]) => {
            return computeHalfScore(player, opponent) + shapeScore(player)
        })
        .reduce<number>((score, halfScore) => score + halfScore, 0);
}

export function computeGameScoreWithHelp(halfs: string[]): number {
    return halfs
        .map(parseHalfWithHelp)
        .map(([opponent, help]) => {
            return computeHalfScoreWithHelp(opponent, help)
        })
        .reduce<number>((score, halfScore) => score + halfScore, 0);
}

export async function part1(): Promise<void> {
    const inputs = await readInput(DATAFILE_PATH);
    const score = computeGameScore(inputs);
    console.log(`Part 1 : ${score}`);
}

export async function part2(): Promise<void> {
    const inputs = await readInput(DATAFILE_PATH);
    const score = computeGameScoreWithHelp(inputs);
    console.log(`Part 2 : ${score}`);
}
