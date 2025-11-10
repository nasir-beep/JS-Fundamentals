const arg = process.argv[2]; const num = parseInt(arg, 10);  if (!isNaN(num)) { console.log("Mynumber: " + num);} else { console.log("Not a number");}
