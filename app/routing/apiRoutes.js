// const friends = require("./app/data/friends.js");
const friends = require("../data/friends.js");

module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(friends);
    })

    app.post("/api/friends", (req, res) => {
        var myValues = [
            req.body.score1,
            req.body.score2,
            req.body.score3,
            req.body.score4,
            req.body.score5,
            req.body.score6,
            req.body.score7,
            req.body.score8,
            req.body.score9,
            req.body.score10,
        ]

        // this loop will go 3 times
        var chosenFriend = {
            diff: 100,
            index: 0
        }
        for (let i = 0; i < friends.length; i++) {
            var diff = 0
            var index 
              for (let j = 0; j < friends[i].scores.length; j++) {
                diff += Math.abs(friends[i].scores[j] - myValues[j])
                index = i
              }
            console.log(diff);
              if (diff < chosenFriend.diff){
                  chosenFriend.diff = diff
                  chosenFriend.index = index
              }
        }

        console.log(chosenFriend);


        

        
        res.send(friends[chosenFriend.index]);
    });
};



