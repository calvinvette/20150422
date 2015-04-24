/**
 * QuestionEditor Controller - categories, questions
 */

// import Question = require("Question");
// import QuestionService = require("QuestionService");

angular.module("tApp").controller("QuestionEditor", function($scope, QuestionService) {
  $scope.categories = QuestionService.getCategoryList();
  $scope.questions = QuestionService.getQuestions();
console.log("QuestionEditor Loaded");

});
