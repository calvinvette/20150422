/**
 * QuestionEditor Controller - categories, questions
 */
// import Question = require("Question");
// import QuestionService = require("QuestionService");
angular.module("tApp").controller("QuestionEditor", function ($scope, QuestionService, $rootScope) {
  $scope.categories = QuestionService.getCategoryList();
  $scope.questions = QuestionService.getQuestions();
  $rootScope.$on("QuestionDeletedEvent", function (data) {
    $scope.questions = QuestionService.getQuestions();
  });
  //$rootScope.$on("QuestionAddedEvent", function(data) {
  //  $scope.questions = QuestionService.getQuestions();
  //});
  $scope.currentlyEditingQuestion = new Question();
  $scope.isEditing = function (question) {
    if (question.questionId == $scope.currentlyEditingQuestion.questionId) {
      return true;
    }
    if (question.equals($scope.currentlyEditingQuestion)) {
      return true;
    }
    return false;
  };
  $scope.setEditing = function (question, indexPosition) {
    question.indexPosition = indexPosition;
    angular.extend($scope.currentlyEditingQuestion, question);
  };
  //$scope.keyHandler = function (evt, question) {
  //    switch (evt.keyCode) {
  //        case 13:
  //            angular.extend(question, $scope.currentlyEditingQuestion);
  //            $scope.currentlyEditingQuestion = new Question();
  //            if (question.questionId <= 0) {
  //                $rootScope.$broadcast("QuestionAddRequestEvent", question);
  //            }
  //            else {
  //                $rootScope.$broadcast("QuestionUpdatedEvent", question);
  //            }
  //            break;
  //        case 27:
  //            $scope.currentlyEditingQuestion = new Question();
  //            break;
  //        default:
  //    }
  //};
  $scope.save = function (question) {
    angular.extend(question, $scope.currentlyEditingQuestion);
    $scope.currentlyEditingQuestion = new Question();
    if (question.questionId <= 0) {
      $rootScope.$broadcast("QuestionAddRequestEvent", question);
    }
    else {
      $rootScope.$broadcast("QuestionUpdatedEvent", question);
    }
  }

  $scope.revert = function () {
    $scope.currentlyEditingQuestion = new Question();
  }

  $scope.delete = function (question) {
    $rootScope.$broadcast("QuestionDeleteRequestEvent", question);
  };
  $scope.addQuestion = function () {
    $scope.currentlyEditingQuestion = new Question();
    $scope.questions.push($scope.currentlyEditingQuestion);
  };
});
//# sourceMappingURL=QuestionEditor.controller.js.map
