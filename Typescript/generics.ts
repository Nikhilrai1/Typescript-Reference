// ---------- Generics ----------------

//----------------------1----------------------------
function logger<T>(arg: T): T{
    return arg
}


// hover the logger call function to see generics type
// console.log(logger(["1","2"]))
// console.log(logger([1,2]))
// console.log(logger("hi"))
// console.log(logger(100))

//----------------------2------------------------------

interface HasAge{
    age: number;
}
function getOlder<T extends HasAge>(people: T[]): T{
    return people.sort((a,b) => b.age - a.age)[0];
}


const people: HasAge[] = [
    {age: 10},
    {age: 15},
    {age: 20},
    {age: 25}
]

// console.log(getOlder(people).age)

interface Player{
    name: string;
    age: number;
}

const players: Player[] = [
    {
        name: "Neymar",
        age: 30
    },
    {
        name: "Ronaldo",
        age: 32
    },
    {
        name: "Messi",
        age: 33
    },
]

// console.log(getOlder(players).name)

//-------------------- API FETCH ---------------------------

interface IPost{
    id: number;
    title: string;
    desc: string;
}

interface IUser{
    id: number;
    name: string;
    age: number;
}

// const fetchPosts = async (path: string): Promise<IPost[]> => {
//     const response = await fetch(`https://example.com${path}`);
//     return response.json()
// }

// const fetchUsers = async (path: string): Promise<IUser[]> => {
//     const response = await fetch(`https://example.com${path}`);
//     return response.json()
// }



// (async() => {
//     const posts = await fetchPosts("/posts");
//     const users = await fetchUsers('/users');
//     console.log(posts[0].desc) // experiment here for auto completion
//     console.log(users[0].age) // experiment here for auto completion
// })()


// -------------------- without repeatition -----------------------
// const fetchData = async <ResultType>(path: string): Promise<ResultType[]> => {
//     const response = await fetch(`https://example.com${path}`);
//     return response.json()
// }


// (async() => {
//     const posts = await fetchData<IPost[]>("/posts");
//     const users = await fetchData<IUser[]>('/users');
// })()


// type User = {
//     name: string;
//   }
  
//   async function fetchApi<ResultType>(path: string): Promise<ResultType> {
//     const response = await fetch(`https://example.com/api${path}`);
//     return response.json();
//   }
  

//   (async() => {
//       const data = await fetchApi<IUser[]>('/users');
// })()
  


