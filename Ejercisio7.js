let word= ['o','ñ','e','l','i','u','q','a','y','a','u','g'];
for(let i=0; i < world.lenght / 2; i++) {
    let aux = world [i];
    world[i] = world[world.lenght-i-1];
    world[world.lenght - i -1]=aux;
}
console.log(world);