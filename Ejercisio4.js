console.log("Start")
const nums = [2, 3, 6, 5, 0];
const x = 7;

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] == x) {
      console.log(`Índices: ${i}, ${j}`);
    }
  }
}