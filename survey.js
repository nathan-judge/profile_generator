const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const userAnswers = {}

rl.question("What's your name? Nicknames are also acceptable ;)", (answer) => {
    userAnswers.name = answer;

    rl.question("Who is one of your fav Muscial Artists", (answer) => {
        userAnswers.artist = answer;


        rl.question("What's your fav song from that artist", (answer) => {
            userAnswers.song = answer;


            rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
                userAnswers.foodMeal = answer;


                rl.question("What's your favourite thing to eat for that meal?", (answer) => {
                    userAnswers.food = answer;


                    rl.question("What is your fav passtime/hobbie?", (answer) => {
                        userAnswers.hoobie = answer;


                        rl.question("Why do you enjoy that passtime/hobbie?", (answer) => {
                            userAnswers.hobbieAns = answer;

                            rl.close();
                            console.log(`${userAnswers.name}'s favourite artist is ${userAnswers.artist}, and fav song from that artist is ${userAnswers.song}. ${userAnswers.name}'s fav meal time is ${userAnswers.foodMeal} and fav meal at that time is ${userAnswers.food}. Also ${userAnswers.name}'s fav passtime is ${userAnswers.hoobie} and heres A little something from ${userAnswers.name} about there passtime: ${userAnswers.hobbieAns}.`)


                        });
                    });
                });
            });
        });
    });
});