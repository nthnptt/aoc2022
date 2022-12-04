import { readInput } from '../utils/file';

const DATAFILE = 'datas/04/data.txt';

export function pairFullyContainOther([minA, maxA]: number[], [minB, maxB]: number[]): boolean {
    const BinA = minA<=minB && minB<=maxA && minA<=maxB && maxB<=maxA;
    const AinB = minB<=minA && minA<=maxB && minB<=maxA && maxA<=maxB;
    return BinA || AinB;
};

export function pairContainPartOfOther([minA, maxA]: number[], [minB, maxB]: number[]): boolean {
    const BinA = (minA<=minB && minB<=maxA) || (minA<=maxB && maxB<=maxA);
    const AinB = (minB<=minA && minA<=maxB) || (minB<=maxA && maxA<=maxB);
    return BinA || AinB;
};

export function assigmentIsOverlap(assigment: string): boolean {
    const [minA, maxA, minB, maxB] = assigment.match(/\d+/g) ?? [];
    if(!minA || !maxA || !minB || !maxB) {
        throw new Error('fail to parse assigment : ' + assigment);
    }
    return pairFullyContainOther([+minA, +maxA], [+minB, +maxB]);
};

export function assigmentIsOverlapPart2(assigment: string): boolean {
    const [minA, maxA, minB, maxB] = assigment.match(/\d+/g) ?? [];
    if(!minA || !maxA || !minB || !maxB) {
        throw new Error('fail to parse assigment : ' + assigment);
    }
    return pairContainPartOfOther([+minA, +maxA], [+minB, +maxB]);
};

export function part1(): number {
    return readInput(DATAFILE)
        .filter((assigment) => assigmentIsOverlap(assigment))
        .length;
};

export function part2(): number {
    return readInput(DATAFILE)
        .filter((assigment) => assigmentIsOverlapPart2(assigment))
        .length;
};
