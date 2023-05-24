// -----------------Interface vs type alias-------------------------

// 1. Type Alias for primative type
type Name = string;
type Role = string; // can be admin, client, or user
type AccountNumber = number;

// 2. Interface for object

// ****** can be merged and extends two interface but not two type alias ******
interface Game{
    name: string;
    gameType: string;
}
interface Game{
    noOfCharacters: number
}