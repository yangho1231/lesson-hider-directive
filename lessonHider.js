angular.module('directivePractice')
.directive('lessonHider', function() {
  return {
    templateUrl: 'lessonHider.html',
    restrict: 'E',
    scope: {
      lesson: '=',
      dayAlert: '&',
      remover: '&'
    },
    controller: function($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule();
      $scope.checkbox = false;
    },
    link: function(scope, elem, attr) {
      scope.getSchedule.then(function(response) {
        console.log(response);
        scope.schedule = response.data;

        scope.schedule.forEach(function(i) {
          if(i.lesson === scope.lesson) {
            scope.lessonDay = i.weekday;
            elem.css('text-decoration', 'line-through');
            return;
          }
          else(scope.lessonDay = 'This is not currently on the schedule');
        })
      })
      scope.toggler = function() {
        if(scope.checkbox === true) {
          elem.css({'text-decoration' : 'line-through'});
        }
        else(elem.css({'text-decoration' : 'none'}));
    }
}
}
});
