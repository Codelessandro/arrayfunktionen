var hash = require('object-hash');
var fs = require('fs')

const meinelsg   = ["reduce", "filter", "every", "forEach", "map", "find", "some"]


fs.readFile("result_hash.json", "utf8", function(error,data){
  if (hash(meinelsg) == data) {
    console.log("all right!")
  } else {
    console.log("still wrong, keep trying!")
  }
})