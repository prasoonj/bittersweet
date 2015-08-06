var bittersweet = angular.module('bittersweet', ['ui.calendar']);

bittersweet.controller('mainController', ['$scope', function($scope){
	/* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'month', // basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        dayClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize
      }
    };
    $scope.textResources = textResources;

	//Initializing scope variables
	//TODO: Think of a better way to do this.
	$scope.showDayEmoButtons = true;
    $scope.test = "test";

    /**
    * Collects the day emotion and creates a tag-cloud of suggestions 
    * based on the emotion.
    **/
    $scope.bittersweetClick = function(dayEmo){
    	if (dayEmo === "sweet") {
    		$scope.textResources.main.headline = "Great! Pick out the things that made you happy today (at most 5)";
    		$scope.tagsColor = "green";
    	}else if (dayEmo === "bitter") {
    		$scope.textResources.main.headline = "Sucks init? Pick out the culprits - choose the top 5";
    		$scope.tagsColor = "red";
    	};
    	if (typeof(dayEmo) != 'undefined') {
    		$scope.showDayEmoButtons = false;
    	};
    	$scope.culpritTagCloud = getTagCloud(dayEmo);
    };
}]);


/**
* Function for populating the culprits' tag cloud.
* TODO: Improve this using some magic.
*
* TODO: Add glyphicons to commonly used emotions' div.
**/
function getTagCloud(dayEmo){
	return startTagCloud;
};


/** Global resources. 
* TODO: Move them to a resource file.
**/
var textResources = {
    	main:{
    		headline: "How was your day?",
    		projectName: "BitterSweet"
    	},
    	topNav:{
    		home: "Home",
    		about: "About",
    		contact: "ReachOut"
    	}
	};

var startTagCloud = ['work', 'love', 'traffic', 'family', 'revolution', 'friends', 'trending-stuff', 'top-rated-stuff-from-profile'];