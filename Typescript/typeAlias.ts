// -------------Type Alias---------------------

type ID = number | string; // union type --> ID can be both number and string

type Student = {
    id: ID,
    fullname: string,
    age: number,
    grade: number,
    moto?: string // ? denote the optional property of Student // for optional
}

const student1:Student = {
    id: "123",
    fullname: "Nikhil Rai",
    age: 20,
    grade: 13,
    moto: "Learn Hard"
}

const student2:Student = {
    id: 456,
    fullname: "Sabin Rai",
    age: 21,
    grade: 14,
}


function studentDetails(student:Student):void{
    console.log(`my name is ${student.fullname}(${student.id}). I am ${student.age} years old. I am in grade ${student.grade}. ${student.moto ? ("My moto is " + student.moto): ""}`)
}

studentDetails(student1)
studentDetails(student2)


