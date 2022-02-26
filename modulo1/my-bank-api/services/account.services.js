import { getAccountRepository, writeAccountRepository } from '../repositories/account.repository';

export async function createAccountService(accountReceived){
    const data = getAccountRepository()

    accountReceived = {
        id: data.nextId++,
        name: accountReceived.name,
        balance: accountReceived.balance
    }
         
    data.accounts.push(accountReceived);    
    await writeAccountRepository(data);

    return accountReceived
}

export async function getAccountServices(id){
    if (id !== undefined) {
        const {accounts} = getAccountRepository()
        const singleData = accounts.filter((item) => item.id === parseInt(id));

        return singleData;
    } else {
        const {accounts} = getAccountRepository()
        return accounts;
    }
}

export async function deleteAccountService(id){
    const data = getAccountRepository()
    data.accounts = data.accounts.filter(item => item.id !== parseInt(id));

    await writeAccountRepository(data);
}

export async function upDateAccountService(){
    const data = getAccountRepository()
    const index = data.accounts.findIndex(item => item.id === account.id)

    if (index === -1) {
        throw new Error('Not Find')
    }

    data.accounts[index].name = account.name;
    data.accounts[index].balance = account.balance;

    await writeAccountRepository(data);
}

export async function upDateBalanceService(){
    const data = getAccountRepository()
    const index = data.accounts.findIndex(item => item.id === account.id)

    if (index === -1) {
        throw new Error('Not Find')
    }

    data.accounts[index].balance = account.balance;
    await writeAccountRepository(data);
}