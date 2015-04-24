/**
 * QuestionService - categories, questions
 */
// Use DT Angular (pre-defined TS types for Angular)
// var angular = angular || {};
//import Question = require("Question");
angular.module("tApp").service("QuestionService", function ($rootScope) {
    var questionId = 0;
    var categories = ["World History", "Pop Music", "Geography", "Technology", "Movies"];
    var questions = [
        new Question("Question1", "Answer1", categories[0], 100, "none", ++questionId),
        new Question("Question2", "Answer2", categories[0], 200, "none", ++questionId),
        new Question("Question3", "Answer3", categories[0], 300, "none", ++questionId),
        new Question("Question4", "Answer4", categories[0], 400, "none", ++questionId),
        new Question("Question5", "Answer5", categories[0], 500, "none", ++questionId),
        new Question("Question6", "Answer6", categories[1], 100, "none", ++questionId),
        new Question("Question7", "Answer7", categories[2], 200, "none", ++questionId),
        new Question("Question8", "Answer8", categories[3], 300, "none", ++questionId),
        new Question("Question9", "Answer9", categories[4], 400, "none", ++questionId),
        new Question("Question10", "Answer10", categories[4], 500, "none", ++questionId)
    ];
    $rootScope.$on("QuestionUpdatedEvent", function (evt, question) {
        var originalQuestion = _.find(questions, function (q) {
            return q.questionId == question.questionId;
        });
        angular.extend(originalQuestion, question);
        window.localStorage.setItem("questions", JSON.stringify(questions));
    });
    this.addQuestion = function (question) {
        questions.push(question);
        window.localStorage.setItem("questions", JSON.stringify(questions));
    };
    this.addCategory = function (category) {
        categories.push(category);
        window.localStorage.setItem("categories", JSON.stringify(category));
    };
    this.getCategoryList = function () {
        return categories;
    };
    this.getQuestions = function () {
        return questions;
    };
    var wlsQuestions = window.localStorage.getItem("questions");
    if (wlsQuestions) {
        questions = JSON.parse(wlsQuestions);
    }
    var wlsCategories = window.localStorage.getItem("categories");
    if (wlsCategories) {
        categories = JSON.parse(wlsCategories);
    }
});
//# sourceMappingURL=QuestionService.js.map