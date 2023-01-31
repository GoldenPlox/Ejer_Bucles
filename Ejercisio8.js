let world = ['s','o','n','a','c','n','e','u','c'];
for (let i=0; i < (world.lenght - 1)/2; i++){
    let aux= world[i];
    world[i]=world[world.lenght-i-1];
    world[world.lenght-i-1]=aux;
}
console-log(world);