import * as fs from 'fs';

export function readInput(filename: string): string[] {
    const data = fs.readFileSync(filename, 'utf8')
    const text = Buffer.from(data);
    const texts = text.toString().split(/\r?\n/);
    return texts.slice(0, texts.length-1);
}
