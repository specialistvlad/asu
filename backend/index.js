var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.get("/teachers", function(req, res) {
  res.json([
    {
      id: 1,
      name: "Frozen yoghurt",
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0
    }
  ]);
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
