const args = process.argv.slice(2)

for (let i = 0; i < args.length; i++) {
  let time = args[i] * 1000
  if (time > 0 && time !== NaN) {
  setTimeout(() => {
    process.stdout.write('\x07');
    process.stdout.write(`beep at: ${args[i]} seconds`)
    process.stdout.write('\n')
  }, time)
 }
}

