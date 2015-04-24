/**
 * QuestionEditor Controller - categories, questions
 */
// import Question = require("Question");
// import QuestionService = require("QuestionService");
angular.module("tApp").controller("QuestionEditor", function ($scope, QuestionService, $rootScope) {
    $scope.categories = QuestionService.getCategoryList();
    $scope.questions = QuestionService.getQuestions();
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
    $scope.keyHandler = function (evt, question) {
        switch (evt.keyCode) {
            case 13:
                angular.extend(question, $scope.currentlyEditingQuestion);
                $scope.currentlyEditingQuestion = new Question();
                $rootScope.$broadcast("QuestionUpdatedEvent", question);
                break;
            case 27:
                $scope.currentlyEditingQuestion = new Question();
                break;
            default:
        }
    };
});
//# sourceMappingURL=QuestionEditor.controller.js.map