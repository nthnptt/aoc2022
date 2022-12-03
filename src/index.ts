import * as day1 from './01';
import * as day2 from './02';
import * as day3 from './03';

function divider(): void {
    console.log('------------')
}

async function main() {
    divider()
    console.log('Day 01')
    await day1.part1();
    await day1.part2();
    divider()
    console.log('Day 02')
    await day2.part1();
    await day2.part2();
    divider()
    console.log('Day 03')
    console.log('Part 1 : ' + await day3.part1());
    console.log('Part 2 : ' + await day3.part2());
    divider()
}

main();
