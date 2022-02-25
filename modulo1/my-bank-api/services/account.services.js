import { promises as fs } from 'fs';

const {readFile, writeFile} = fs
const accountJsonFileName = 'accounts.json'

export async function createAccountService(accountReceived){
    const data = JSON.parse(await readFile(accountJsonFileName));

    accountReceived = {
        id: data.nextId++,
        name: accountReceived.name,
        balance: accountReceived.balance
    }
         
    data.accounts.push(accountReceived);    
    await writeFile(accountJsonFileName, JSON.stringify(data, null, 2));

    return accountReceived
}

export async function getAccountServices(id){
    if (id !== undefined) {
        const {accounts} = JSON.parse(await readFile(accountJsonFileName));
        const singleData = accounts.filter((item) => item.id === parseInt(id));

        return singleData;
    } else {
        const {accounts} = JSON.parse(await readFile(accountJsonFileName));
        return accounts;
    }
}

export async function deleteAccountService(id){
    const data = JSON.parse(await readFile(accountJsonFileName));
    data.accounts = data.accounts.filter(item => item.id !== parseInt(id));

    await writeFile(accountJsonFileName, JSON.stringify(data, null, 2));
}

export async function upDateAccountService(){
    const data = JSON.parse(await readFile(accountJsonFileName));
    const index = data.accounts.findIndex(item => item.id === account.id)

    if (index === -1) {
        throw new Error('Not Find')
    }

    data.accounts[index].name = account.name;
    data.accounts[index].balance = account.balance;

    await writeFile(accountJsonFileName, JSON.stringify(data, null, 2));
}

export async function upDateBalanceService(){
    const data = JSON.parse(await readFile(accountJsonFileName));
    const index = data.accounts.findIndex(item => item.id === account.id)

    if (index === -1) {
        throw new Error('Not Find')
    }

    data.accounts[index].balance = account.balance;
    await writeFile(accountJsonFileName, JSON.stringify(data, null, 2));
}