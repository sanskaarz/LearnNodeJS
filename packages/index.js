let figlet = require("figlet");


figlet("Hello Ji , I am Sanskar Gupta", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});