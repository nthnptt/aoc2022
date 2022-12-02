import * as fs from 'fs';

export async function readInput(filename: string): Promise<string[]> {
    const data = await fs.promises.readFile(filename, 'utf8')
    const text = Buffer.from(data);
    const texts = text.toString().split(/\r?\n/);
    return texts.slice(0, texts.length-1);
}
