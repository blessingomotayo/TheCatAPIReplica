import catapiHtml from './catapi.html';

let catapiComponent = {
  template: catapiHtml,
  controllerAs: 'myCtrl',
  controller: function($scope, catapiService) {
    $scope.firstName = "Blessing";
    $scope.lastName = "Omotayo";
    $scope.loveit = "Love it";
    $scope.hateit = "Hate it";
    $scope.red = {
        "background-color": "#cc0000",
        "text-shadow": "0.2px 0.2px",
        "border": "1px solid #b30000"
    }
    $scope.green = {
        "background-color": "#4eb151",
        "text-shadow": "0.2px 0.2px",
        "border": "1px solid #46a049"
    }
    $scope.orange = {
        "background-color": "#dd4814",
        "text-shadow": "0.2px 0.2px",
        "border": "1px solid #cc3300"
    }
  }
}

export default catapiComponent;