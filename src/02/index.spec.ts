import { computeHalfScore, computeHalfScoreWithHelp, shapeScore, parseHalf, computeGameScore } from './index';

describe("Day 2", () => {
    describe('Score without help', () => {
        describe("Compute half score", () => {
            it("should compute good score when user play scissor", () => {
                expect(computeHalfScore('scissor', 'rock')).toBe(0);
                expect(computeHalfScore('scissor', 'scissor')).toBe(3);
                expect(computeHalfScore('scissor', 'paper')).toBe(6);
            })
            it("should compute good score when user play rock", () => {
                expect(computeHalfScore('rock', 'rock')).toBe(3);
                expect(computeHalfScore('rock', 'scissor')).toBe(6);
                expect(computeHalfScore('rock', 'paper')).toBe(0);
            })
            it("should compute good score when user play paper", () => {
                expect(computeHalfScore('paper', 'rock')).toBe(6);
                expect(computeHalfScore('paper', 'scissor')).toBe(0);
                expect(computeHalfScore('paper', 'paper')).toBe(3);
            })
        })

        describe("Compute shape score", () => {
            it("should compute rock score", () => {
                expect(shapeScore('rock')).toBe(1);
            })
            it("should compute paper score", () => {
                expect(shapeScore('paper')).toBe(2);
            })
            it("should compute scissor score", () => {
                expect(shapeScore('scissor')).toBe(3);
            })
        })

        describe("Parse half", () => {
            it('should parse half', () => {
                expect(parseHalf('A Y')).toEqual(["rock", "paper"]);
                expect(parseHalf('B Y')).toEqual(["paper", "paper"]);
                expect(parseHalf('C Y')).toEqual(["scissor", "paper"]);
                expect(parseHalf('A X')).toEqual(["rock", "rock"]);
                expect(parseHalf('A Y')).toEqual(["rock", "paper"]);
                expect(parseHalf('A Z')).toEqual(["rock", "scissor"]);
            })
        })

        describe("Compute score", () => {
            it('should compute good score', () => {
                const input = `A Y;B X;C Z`.split(';');
                expect(computeGameScore(input)).toEqual(15);
                const input2 = `
C Y
C Y
B Y
A Z
B Z
A X
A Y
A Y
A X
A Y
                `.trim().split('\n');
                expect(computeGameScore(input2)).toEqual(53);

            })
        })
    })
    describe('Score with help', () => {
        describe('Compute half score', () => {
            it('should works for win help', () => {
                expect(computeHalfScoreWithHelp('scissor', 'win')).toEqual(1 + 6);
                expect(computeHalfScoreWithHelp('paper', 'win')).toEqual(3 + 6);
                expect(computeHalfScoreWithHelp('rock', 'win')).toEqual(2 + 6);
            })
            it('should works for draft help', () => {
                expect(computeHalfScoreWithHelp('scissor', 'draft')).toEqual(3 + 3);
                expect(computeHalfScoreWithHelp('paper', 'draft')).toEqual(2 + 3);
                expect(computeHalfScoreWithHelp('rock', 'draft')).toEqual(1 + 3);
            })
            it('should works for loose help', () => {
                expect(computeHalfScoreWithHelp('scissor', 'loose')).toEqual(2 + 0);
                expect(computeHalfScoreWithHelp('paper', 'loose')).toEqual(1 + 0);
                expect(computeHalfScoreWithHelp('rock', 'loose')).toEqual(3 + 0);
            })
        })
    })
})
