//----------------Interfaces-------------------


// 1. Basic
interface Transaction{
    payerAccountNumber: number;
    payeeAccountNumber: number;
}

interface BankAccount{
    accountNumber: number;
    accountHolder: string;
    balance: number;
    isActive: boolean;
    transactions: Transaction[]
}

const transaction1: Transaction = {
    payerAccountNumber: 123,
    payeeAccountNumber: 456
}

const transaction2: Transaction = {
    payerAccountNumber: 123,
    payeeAccountNumber: 789
}

const bankAccount: BankAccount = {
    accountNumber: 123,
    accountHolder: "Nabin Rai",
    balance: 12000000,
    isActive: true,
    transactions: [transaction1,transaction2]
}


// console.log(bankAccount)


// object with method
interface Auth{
    username: string;
    password: string;
    login(username: string,password: string): boolean;
}

const auth:Auth = {
    username: "Nikhil",
    password: "secrect",
    login(username: string,password: string){
        return true;
    }
    
}


// 2. Extend interface

interface Book{
    name: string;
    price: number;
}

interface Ebook extends Book{
    // name: string;
    // price: number;
    fileSize: number;
    format: string;
}

interface AudioBook extends Ebook{
    // name: string;
    // price: number;
    // fileSize: number;
    // format: string;
    duration: number;
}

const book: AudioBook = {
    name: "Atomic Habit",
    price: 200,
    fileSize: 10,
    format: "mp3",
    duration: 20
}

// console.log(book)

// 3. --------------Merge third party library interface with own interface------------------------

// suppose School is interface comming from third party library

interface School{
    name: string;
    gradeFrom: number;
    gradeTo: number;
}

interface School{
    streams: string[]
}

const school: School = {
    name: "Herald International school",
    gradeFrom: 1,
    gradeTo: 12,
    streams: ["Science","Management","Bussiness"]
}

console.log(school)
