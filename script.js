
(function(){
    
function Question(question,answer,correct){
    this.question = question;
    this.answer =answer;
    this.correct =correct;

}

Question.prototype.displayQuestion = function(){
    console.log(this.question);

    for(var i = 0;i < this.answer.length; i++){
        console.log(i + ': ' + this.answer[i]);
    }
}

Question.prototype.checkAnswer = function (ans){
    if(ans === this.correct){
        console.log('Correct answer!');
        count++;
        console.log('Curent score ' + count)
        console.log('----------------------');
            
    } else {
        console.log("Wrong answer TryAgain :)");
        console.log('Current score ' + count);
        console.log('----------------------');
        
    }

}

var q1 = new Question('is JavaScript is the coolest programming language in the world?', ['Yes','No'] , 0 );

var q2 = new Question('What is the name of the course\'s teacher?' , ['John','Micheal','Jonas'] , 2);

var q3 = new Question('what does best describe coding?', ['Hard','Boring','Fun','Tedious'] , 2);

var questions = [q1,q2,q3];

var count = 0;

function nextQues(){
    var n = Math.floor(Math.random()*questions.length);
    questions[n].displayQuestion();
    var answers = prompt('Please enter the correct answer number');
    
    if(answers !== 'exit'){
        questions[n].checkAnswer(parseInt(answers));
        nextQues();
    }
};
nextQues();

})();