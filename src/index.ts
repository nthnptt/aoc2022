import * as day1 from './01';
import * as day2 from './02';
import * as day3 from './03';
import * as day4 from './04';
import * as day5 from './05';

interface Day {
    part1?: () => any,
    part2?: () => any,
}

function main() {
    const result = [day1, day2, day3, day4, day5].map((day: Day, index: number) => {
        const partOneResult = day.part1 ? day.part1() : 'Not implemented';
        const partTwoResult = day.part2 ? day.part2() : 'Not implemented';
        return [`Day ${index}`, partOneResult, partTwoResult]
    })
    console.table(result);
}

main();
