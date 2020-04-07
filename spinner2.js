const chars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let timer = 100;
for (let char of chars) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, timer);
  timer += 200;
}
setTimeout(() => {
  console.log();  
},2000);
