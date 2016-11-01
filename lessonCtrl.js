angular.module('directivePractice').controller('lessonCtrl', function($scope) {
  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
  $scope.test = 'Two-way data binding!';
  $scope.announceDay = function(lesson, day) {
    alert(lesson + ' is active on ' + day + '.');
  };
  $scope.removeLesson = function(lesson){
    for(var i = 0; i < $scope.lessons.length; i++){
        console.log('removing');
        if(lesson === $scope.lessons[i]){
            $scope.lessons.splice(i, 1);
        }
    }
  }
})
