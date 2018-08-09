var express = require("express");
var path = require("path");
var heroList = require("../data/heroes");
var heroes = heroList.heroes;

module.exports = function(app) {
  app.get("/api/heroes", function(req, res) {
    return res.json(heroes);
  });

  app.post("/api/heroes", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var surveyAnswers = req.body;
    var answerArray = [];
    var comparisons = [];
    var heroValues = [];
    var counter = 0;
    var diff = 0;

    for (let key of Object.keys(surveyAnswers)) {
      let value = surveyAnswers[key];
      // ... do something with mealName
      answerArray.push(value);
    }

    heroes.forEach(function(array) {
      heroValues.push(array.scores);
    });

    for (i = 0; i < heroValues.length; i++) {
      currCompare = heroValues[i];

      for (x = 0; x < currCompare.length; x++) {
        if (counter < 10) {
          counter++;
          diff += Math.abs(currCompare[x] - answerArray[x]);
        } else if (counter >= 10) {
          counter = 0;
          comparisons.push(diff);
          diff = 0;
        }
      }
    }

    small = Math.min(...comparisons);
    hero = comparisons.indexOf(small);

    /* console.log(comparisons);
    console.log(small);
    console.log(hero); */
    console.log(heroes[hero].name);
    console.log(heroes[hero].img);
  });
};
