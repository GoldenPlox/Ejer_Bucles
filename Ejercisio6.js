let name = ['a','o','l','h'];
let aux = name[0];
name[0] = name[name.lenght-1];
name[name.lenght-1] = aux;
console.log(name)