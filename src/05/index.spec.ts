import { CrateStack, deserializeCrates, deserializeMovements } from './index';

describe('Day 05 :', () => {
    describe('Deserialize data', () => {
        it('should deserialize crates', () => {
            const expected = [['Z', 'N'], ['M', 'C', 'D'], ['P'], ['R']]
            const entry = [
                '    [D]        ',
                '[N] [C]        ',
                '[Z] [M] [P] [R]',
                ' 1   2   3   4 '
            ]
            expect(deserializeCrates(entry).stacks).toEqual(expected);
        })
        it('should deserialize movements', () => {
            const entry = ['move 1 from 2 to 1'];
            expect(deserializeMovements(entry)).toEqual([{move: 1, from: 2, to: 1}])
            const entry2 = ['move 30 from 22 to 11'];
            expect(deserializeMovements(entry2)).toEqual([{move: 30, from: 22, to: 11}])
        })

    })
    describe('Part 1', () => {
        describe('get crates top of stacks', () => {
            it('shoud works', () => {
                const stack = new CrateStack([['A', 'B', 'C'], [], ['E', 'F'], ['G']]);
                expect(stack.getTop()).toEqual('CFG');
            })
        })
        describe('move crates item by item', () => {
            it('should work when stack not empty', () => {
                const stack = new CrateStack([['A', 'B', 'C'], [], ['E', 'F'], ['G']]);
                stack.moveCratesItemByItem({move: 2, from: 1, to: 2})
                expect(stack.stacks).toEqual([['A'], ['C', 'B'], ['E', 'F'], ['G']]);
            })
            it('should work when stack is empty', () => {
                const stack = new CrateStack([['A', 'B'], ['C'], ['E', 'F'], ['G']]);
                stack.moveCratesItemByItem({move: 2, from: 1, to: 2})
                expect(stack.stacks).toEqual([[], ['C', 'B', 'A'], ['E', 'F'], ['G']]);
            })
        })
    })
    describe('Part 2', () => {
        describe('move crates by stack', () => {
            it('should work when stack not empty', () => {
                const stack = new CrateStack([['A', 'B', 'C'], [], ['E', 'F'], ['G']]);
                stack.moveCratesByStack({move: 2, from: 1, to: 2})
                expect(stack.stacks).toEqual([['A'], ['B', 'C'], ['E', 'F'], ['G']]);
            })
            it('should work when stack is empty', () => {
                const stack = new CrateStack([['A', 'B'], ['C'], ['E', 'F'], ['G']]);
                stack.moveCratesByStack({move: 2, from: 1, to: 2})
                expect(stack.stacks).toEqual([[], ['C', 'A', 'B'], ['E', 'F'], ['G']]);
            })
        })

    })
})
