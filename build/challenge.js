"use strict";
// challenge.ts
const prettyPrintWilder = (users) => {
    users.map((user) => {
        console.log(`${user.name} is ${user.age} years old`);
    });
};
// Typer wilders
const wilders = [];
const user1 = { name: "Pierre", age: 23 };
// Adapter user2 pour qu'il n'affiche plus d'erreur
const user2 = { name: "Paul", age: 32 };
const user3 = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);
