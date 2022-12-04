import { pairFullyContainOther, assigmentIsOverlap, assigmentIsOverlapPart2, pairContainPartOfOther } from './index';

describe('Day 04', () => {
    describe('Part 1 :', () => {
        describe('pair fully contain in other', () => {
            it('should be true when second pair is in second', () => {
                expect(pairFullyContainOther([1, 6], [2, 5])).toBeTruthy()
                expect(pairFullyContainOther([4, 10], [6, 8])).toBeTruthy()
                expect(pairFullyContainOther([4, 10], [4, 10])).toBeTruthy()
                expect(pairFullyContainOther([4, 10], [4, 4])).toBeTruthy()
            })
            it('should be true when second pair is in second', () => {
                expect(pairFullyContainOther([2, 3], [1, 5])).toBeTruthy()
                expect(pairFullyContainOther([1, 1], [1, 7])).toBeTruthy()
            })
            it('shoube be false when second pair is not in second', () => {
                expect(pairFullyContainOther([4, 10], [1, 3])).not.toBeTruthy()
                expect(pairFullyContainOther([4, 10], [6, 13])).not.toBeTruthy()
            })
        })

        describe('is assigment overlap', () => {
            it('should return true', () => {
                expect(assigmentIsOverlap('2-8,3-7')).toBeTruthy()
                expect(assigmentIsOverlap('6-6,4-6')).toBeTruthy()
            })
            it('should return false', () => {
                expect(assigmentIsOverlap('2-4,6-8')).not.toBeTruthy()
                expect(assigmentIsOverlap('2-3,4-5')).not.toBeTruthy()
                expect(assigmentIsOverlap('5-7,7-9')).not.toBeTruthy()
                expect(assigmentIsOverlap('2-6,4-8')).not.toBeTruthy()
            })
        })
    })
    describe('Part 2 :', () => {
        describe('pair contain part of other', () => {
            it('should be true when second pair is in second', () => {
                expect(pairContainPartOfOther([5, 7], [7, 9])).toBeTruthy();
                expect(pairContainPartOfOther([2, 8], [3, 7])).toBeTruthy();
                expect(pairContainPartOfOther([6, 6], [4, 6])).toBeTruthy();
                expect(pairContainPartOfOther([2, 6], [4, 8])).toBeTruthy();
            })
            it('should be false when second pair is not in second', () => {
                expect(pairContainPartOfOther([2, 4], [6, 8])).not.toBeTruthy();
                expect(pairContainPartOfOther([2, 3], [4, 5])).not.toBeTruthy();
            })
        })

        describe('is assigment overlap', () => {
            it('should return true', () => {
                expect(assigmentIsOverlapPart2('2-8,3-7')).toBeTruthy()
                expect(assigmentIsOverlapPart2('6-6,4-6')).toBeTruthy()
                expect(assigmentIsOverlapPart2('5-7,7-9')).toBeTruthy()
                expect(assigmentIsOverlapPart2('2-6,4-8')).toBeTruthy()
            })
            it('should return false', () => {
                expect(assigmentIsOverlapPart2('2-4,6-8')).not.toBeTruthy()
                expect(assigmentIsOverlapPart2('2-3,4-5')).not.toBeTruthy()
            })
        })
    })
})
