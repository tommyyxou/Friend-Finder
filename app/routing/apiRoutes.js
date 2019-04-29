let express = require('express'); 
let router = express.Router();
let friendsArray = require("../data/friends");

/* GET API. */
router.get('/api/friends', function(req, res) {
    return res.json(friendsArray);
});

router.post("/api/friends", function(req, res) {
    let newFriend = req.body;

    score = parseInt(newFriend.Q1) +  
            parseInt(newFriend.Q2) +  
            parseInt(newFriend.Q3) +  
            parseInt(newFriend.Q4) +  
            parseInt(newFriend.Q5) +  
            parseInt(newFriend.Q6) +  
            parseInt(newFriend.Q7) +  
            parseInt(newFriend.Q8) +  
            parseInt(newFriend.Q9) +  
            parseInt(newFriend.Q10);
            
    let matchName = "";
    let matchImage = "";
    let scoreDifference = 1000;
    
    for (let i = 0; i < friendsArray.length; i++) {

        let compareScore =  parseInt(friendsArray[i].Q1) +  
                            parseInt(friendsArray[i].Q2) +  
                            parseInt(friendsArray[i].Q3) +  
                            parseInt(friendsArray[i].Q4) +  
                            parseInt(friendsArray[i].Q5) +  
                            parseInt(friendsArray[i].Q6) +  
                            parseInt(friendsArray[i].Q7) +  
                            parseInt(friendsArray[i].Q8) +  
                            parseInt(friendsArray[i].Q9) +  
                            parseInt(friendsArray[i].Q10);

        difference = Math.abs(score - compareScore);

        if (difference < scoreDifference) {
            scoreDifference = difference;
            matchName = friendsArray[i].name;
            matchImage = friendsArray[i].photo_url;
        }
    
    }
    friendsArray.push(newFriend);
    res.json({matchName: matchName, matchImage: matchImage});
});

module.exports = router;