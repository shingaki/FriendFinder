var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });


    // Take the user's input and find a compatible friend
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {

        friends.push(req.body);
        res.json(true);

        console.log(friends);

        console.log(friends[4].name);
        console.log(friends[4].answer1);


        // Get the number of records in the array
        // includes the user
        var numberOfFriends = friends.length;
        console.log('number of Friends ' + numberOfFriends);

        // Get the index of the user
        var j = (friends.length - 1);
        console.log('new friend index ' + j);

        var newFriendAnswer1;
        var newFriendAnswer2;
        var newFriendAnswer3;
        var newFriendAnswer4;
        var newFriendAnswer5;
        var newFriendAnswer6;
        var newFriendAnswer7;
        var newFriendAnswer8;
        var newFriendAnswer9;
        var newFriendAnswer10;


        console.log(friends[4].name);
        console.log(friends[4].answer1);

        // new friends
        newFriendAnswer1 = parseInt(friends[j].answer1);
        newFriendAnswer2 = parseInt(friends[j].answer2);
        newFriendAnswer3 = parseInt(friends[j].answer3);
        newFriendAnswer4 = parseInt(friends[j].answer4);
        newFriendAnswer5 = parseInt(friends[j].answer5);
        newFriendAnswer6 = parseInt(friends[j].answer6);
        newFriendAnswer7 = parseInt(friends[j].answer7);
        newFriendAnswer8 = parseInt(friends[j].answer8);
        newFriendAnswer9 = parseInt(friends[j].answer9);
        newFriendAnswer10 = parseInt(friends[j].answer10);

        // Define the variables
        var totalDifference = 0;
        var tempTotalDifference = 0;
        var mostCompatibleIndex = 0;

        // Find the most compatible friend

        for (x = 0; (numberOfFriends - 1) > x; x++) {
            // compare the 10 answers

            // initialize the variables to hold the difference between the answers from
            // the user and each friend
            var answer1Diff = 0;
            var answer2Diff = 0;
            var answer3Diff = 0;
            var answer4Diff = 0;
            var answer5Diff = 0;
            var answer6Diff = 0;
            var answer7Diff = 0;
            var answer8Diff = 0;
            var answer9Diff = 0;
            var answer10Diff = 0;

            // friends numbers

            friendsAnswer1 = parseInt(friends[x].answer1);
            friendsAnswer2 = parseInt(friends[x].answer2);
            friendsAnswer3 = parseInt(friends[x].answer3);
            friendsAnswer4 = parseInt(friends[x].answer4);
            friendsAnswer5 = parseInt(friends[x].answer5);
            friendsAnswer6 = parseInt(friends[x].answer6);
            friendsAnswer7 = parseInt(friends[x].answer7);
            friendsAnswer8 = parseInt(friends[x].answer8);
            friendsAnswer9 = parseInt(friends[x].answer9);
            friendsAnswer10 = parseInt(friends[x].answer10);

            // user numbers as is

            answer1Diff = newFriendAnswer1 - friendsAnswer1;
            answer2Diff = newFriendAnswer2 - friendsAnswer2;
            answer3Diff = newFriendAnswer3 - friendsAnswer3;
            answer4Diff = newFriendAnswer4 - friendsAnswer4;
            answer5Diff = newFriendAnswer5 - friendsAnswer5;
            answer6Diff = newFriendAnswer6 - friendsAnswer6;
            answer7Diff = newFriendAnswer7 - friendsAnswer7;
            answer8Diff = newFriendAnswer8 - friendsAnswer8;
            answer9Diff = newFriendAnswer9 - friendsAnswer9;
            answer10Diff = newFriendAnswer10 - friendsAnswer10;

            // change negative numbers to absolute numbers


            Math.abs(answer1Diff);


            tempTotalDifference = (Math.abs(answer1Diff) + Math.abs(answer2Diff) + Math.abs(answer3Diff) + Math.abs(answer4Diff) + Math.abs(answer5Diff) +
                Math.abs(answer6Diff) + Math.abs(answer7Diff) + Math.abs(answer8Diff) + Math.abs(answer9Diff) + Math.abs(answer10Diff));


            if (totalDifference == 0 || (tempTotalDifference < totalDifference)) {
                totalDifference = tempTotalDifference;
                mostCompatibleIndex = x;
            }

        }


        // put modal here


    });


};
