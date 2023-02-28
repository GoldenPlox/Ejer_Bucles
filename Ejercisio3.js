console.log("Start")
let nums = [7, 4, 0, 9, 7, 6, 3, 8];
let contador = 0;

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      console.log(`${nums[i]}${nums[j]}`);
      contador++;
    }
  }
}

