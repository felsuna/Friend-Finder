const friends = require("../data/friends.js");

module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(friends);
    })

    app.post("/api/friends", (req, res) => {
        var myValues = [
            parseInt(req.body.score1),
            parseInt(req.body.score2),
            parseInt(req.body.score3),
            parseInt(req.body.score4),
            parseInt(req.body.score5),
            parseInt(req.body.score6),
            parseInt(req.body.score7),
            parseInt(req.body.score8),
            parseInt(req.body.score9),
            parseInt(req.body.score10)
        ];

        // Loop through friends and calulates best match\       
        var chosenFriend = {
            diff: 100,
            index: 0
        };
        for (let i = 0; i < friends.length; i++) {
            var diff = 0
            var index 
              for (let j = 0; j < friends[i].scores.length; j++) {
                diff += Math.abs(friends[i].scores[j] - myValues[j])
                index = i
              };
            console.log(diff);
              if (diff < chosenFriend.diff){
                  chosenFriend.diff = diff
                  chosenFriend.index = index
              };
        };

        console.log(chosenFriend);    
        friends.push({
            name: req.body.name,
            photo: req.body.photo,
            scores: myValues
        });
        res.send(friends[chosenFriend.index]);
    });
};



