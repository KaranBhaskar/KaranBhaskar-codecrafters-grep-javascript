function main() {
  // Get the 3rd element in the command line // node app/main.js "Karan" "Bhaskar"
  const pattern = process.argv[3];
  //Built-in node js, importer of modules, trim removes spaces before and after
  const inputLine = require("fs").readFileSync(0, "utf-8").trim();
  
  console.log(pattern, inputLine)
  if (pattern.length >= 1) {
    function matchPattern(inputLine, pattern) {
      if(pattern.includes("\\d")){
        console.log("HI")
        const d = Array.from({length: 10}, (_, i)=> (i).toString());
        const contain = d.some((ele)=> inputLine.includes(ele));
        return contain
      }else{
        return inputLine.includes(pattern);
      }
    }}else {
      throw new Error(`Unhandled pattern ${pattern}`);
    }

  if (process.argv[2] !== "-E") {
    console.log("Expected first argument to be '-E'");
    process.exit(1);
  }

  // You can use print statements as follows for debugging, they'll be visible when running tests.
  console.error("Logs from your program will appear here");

  // Uncomment this block to pass the first stage
  if (matchPattern(inputLine, pattern)) {
      process.exit(0);
    } else {
        process.exit(1);
      }
}

main();
