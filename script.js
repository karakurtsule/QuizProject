function Question(text,choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.checkAnswer = function(answer){
    return this.answer == answer;
}

function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;

}


Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}

Quiz.prototype.isFinish = function(){
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer){
    var question = this.getQuestion();
    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex = 1;
}


//start quiz

var soru1 = new Question('Türkiye\'nin baskenti hangi sehirdir?',['İstanbul','Ankara','İzmir','Bursa'],'Ankara');
var soru2 = new Question('Dolmabahçe Sarayı hangi sehirdedir?',['İstanbul','Ankara','İzmir','Bursa'],'Ankara');
var soru3 = new Question('Türkiye\'de nüfusu en kalabalık il hangi sehirdir?',['İstanbul','Ankara','İzmir','Bursa'],'Ankara');

var questions = [soru1,soru2,soru3];

var quiz = new Quiz(questions);


