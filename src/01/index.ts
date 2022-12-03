import { readInput } from '../utils/file';

const DATA_FILE = 'datas/01/data.txt';

function getElvesCalories(calories: string[]): number[] {
    return calories.reduce<number []>((acc, calorie) => {
        if(calorie === '') {
            acc.push(0);
            return acc;
        }
        const tail = acc.at(-1) ?? 0;
        const actualElve = tail + (+calorie);
        return [...acc.slice(0, acc.length-1), actualElve];
    }, [])
}

export  function part1():  number {
    const calories =  readInput(DATA_FILE);
    const elves = getElvesCalories(calories);
    const maxCaloriesValue = elves.sort((n1, n2) => n2 - n1);
    return maxCaloriesValue[0];
}

export  function part2():  number {
    const calories =  readInput(DATA_FILE);
    const elves = getElvesCalories(calories);
    const topThird = elves.sort((n1, n2) => n2 - n1).slice(0, 3);
    const topThirdCaloriesSum = topThird.reduce((sum, calorie) => sum + calorie, 0);
    return topThirdCaloriesSum;
}
