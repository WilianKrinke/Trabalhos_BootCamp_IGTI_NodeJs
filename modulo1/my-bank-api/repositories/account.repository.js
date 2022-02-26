import { promises as fs } from 'fs';

const {readFile, writeFile} = fs
const accountJsonFileName = 'accounts.json'


export async function getAllAccountsRepository(){
    const data = JSON.parse(await readFile(accountJsonFileName));
    return data
}


export async function writeAccountRepository(data){
    await writeFile(accountJsonFileName, JSON.stringify(data, null, 2));
}