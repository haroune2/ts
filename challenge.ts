// challenge.ts

// Déclarer une interface User avec des propriétés typées
interface User {
    name: string;
    age: number;
  }
  
  // Déclarer des types pour le paramètre et le retour de la fonction prettyPrintWilder
  type UsersArray = User[];
  type PrettyPrintCallback = (user: User) => void;
  
  const prettyPrintWilder = (users: UsersArray) => {
    users.map((user: User) => {
      console.log(`${user.name} is ${user.age} years old`);
    });
  };
  
  // Typer wilders
  const wilders: UsersArray = [];
  
  const user1: User = { name: "Pierre", age: 23 };
  // Adapter user2 pour qu'il n'affiche plus d'erreur
  const user2: User = { name: "Paul", age: 32 };
  const user3: User = { name: "Jacques", age: 25 };
  
  wilders.push(user1);
  wilders.push(user2);
  wilders.push(user3);
  
  prettyPrintWilder(wilders);
  