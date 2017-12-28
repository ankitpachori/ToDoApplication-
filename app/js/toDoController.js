
var app = angular.module('myApp', []);
app.controller('todoCtrl', function($scope) {
  $scope.inactive= true;
  $scope.todoList = [{todoTitle:'Study',todoDescription:'Complete 2 chapter',todoTag:'not completed', done:false}];
  $scope.toDoApptags=['not completed'];
  $scope.todoAdd = function() {
    $scope.todoList.push({todoTitle:$scope.todoTitle,todoDescription:$scope.todoDescription,todoTag:$scope.todoTag, done:false});
    $scope.todoInput = "";
    $scope.todoTitle = "";
    $scope.todoDescription = "";
    $scope.todoTag = "";
    localStorage.setItem( 'tasks', angular.toJson( $scope.todoList ) );

  };
  console.log("after add function toDoApptags",$scope.toDoApptags);

  $scope.remove = function() {
    var oldList = $scope.todoList;
    $scope.todoList = [];
    angular.forEach(oldList, function(x) {
      if (!x.done) $scope.todoList.push(x);
    });
    localStorage.setItem( 'tasks', angular.toJson( $scope.todoList ) );
  };

  /* Initial list */
  $scope.tasks = [
    {
      title: 'Study',
      description: 'Do the study',
      tag: 'Not Completed',
    }
  ];
  /* Save application data */
  $scope.save = function () {

    localStorage.setItem( 'tasks', angular.toJson( $scope.todoList ) );
  }


  /* Load application data */

  $scope.load=function(){
    console.log("i am going to load");

    var tasks = angular.fromJson( localStorage.getItem( 'tasks' ) );
    console.log("task",tasks);
    if ( tasks ) {
      $scope.todoList=angular.copy(tasks);

    }
  }
  $scope.load();
});
