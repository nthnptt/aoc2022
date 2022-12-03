import { findPrioritiesRuckstacksScore, findThreeElvesRuckstacksScore } from './index';

describe('Day 03', () => {
    describe('Part 1', () => {
        describe('find priorities line score', () => {
            it('should works', () => {
                expect(findPrioritiesRuckstacksScore('vJrwpWtwJgWrhcsFMMfFFhFp')).toEqual(16);
                expect(findPrioritiesRuckstacksScore('jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL')).toEqual(38);
                expect(findPrioritiesRuckstacksScore('PmmdzqPrVvPwwTWBwg')).toEqual(42);
            })
        })
    })
    describe('Part 2', () => {
        describe('find priorities 3 elves line score', () => {
            it('should works', () => {
                expect(findThreeElvesRuckstacksScore(['vJrwpWtwJgWrhcsFMMfFFhFp', 'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL', 'PmmdzqPrVvPwwTWBwg'])).toEqual(18);
                expect(findThreeElvesRuckstacksScore(['wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn', 'ttgJtRGJQctTZtZT', 'CrZsJsPPZsGzwwsLwLmpwMDw'])).toEqual(52);
            })
        })
    })
})
