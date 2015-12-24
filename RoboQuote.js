function myFunction() {
        var computerChoice = Math.random();
        console.log(computerChoice);

        var advice = "";
        if(computerChoice>=0 && computerChoice<0.1){
            advice = "Just take a nap.";
        }
        else if(computerChoice>=0.1 && computerChoice<0.2){
            advice = "Academic Integrity!";
        }
        else if(computerChoice>=0.2 && computerChoice<0.3){
            advice = "Look both ways before you cross the street.";
        }
        else if(computerChoice>=0.3 && computerChoice<0.4){
            advice = "Sometimes you just gotta move backwards to move forwards.";
        }
        else if(computerChoice>=0.4 && computerChoice<0.5){
            advice = "That's the exponential law of procrastination: as the time decreases, the productivity increases."
        }
        else if (computerChoice>=0.5 && computerChoice<0.6){
            advice = "Correlation does not imply causation. Remember that.";
        }
        else if (computerChoice>=0.6 && computerChoice<0.7){
            advice = "Do these people know the true meaning of hard work. Go sort bolts. It builds character and fine motor skills.";
        }
        else if (computerChoice>=0.7 && computerChoice<0.8){
            advice = "Just get lucky.";
        }
        else if (computerChoice>=0.8 && computerChoice<0.9){
            advice = "Don't worry, you don't need coordination to throw; you just need a good follow-through.";
        }
        else{
            advice = "Basically, you flip a coin, and then you see if you are disappointed with the result or not.";
        }

        console.log(advice);
        document.getElementById("advice").innerHTML = advice;
}
