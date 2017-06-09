'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl',  ['$scope',function($scope) {

  $scope.gridtotal = 10;
   var list =  [
      { productName: "Tea", category: "Beverages" },
      { productName: "Coffee", category: "Beverages" },
      { productName: "Ham", category: "Food" },
      { productName: "Bread", category: "Food" },
      { productName: "Tea", category: "Beverages" },
      { productName: "Coffee", category: "Beverages" },
      { productName: "Ham", category: "Food" },
      { productName: "Bread", category: "Food" },
      { productName: "Tea", category: "Beverages" },
      { productName: "Coffee", category: "Beverages" },
      { productName: "Ham", category: "Food" },
      { productName: "Bread", category: "Food" },
      { productName: "Tea", category: "Beverages" },
      { productName: "Coffee", category: "Beverages" },
      { productName: "Ham", category: "Food" },
      { productName: "Bread", category: "Food" },
      { productName: "Tea", category: "Beverages" },
      { productName: "Coffee", category: "Beverages" },
      { productName: "Ham", category: "Food" },
      { productName: "Bread", category: "Food" }
  ];

    $scope.updateGrid=function(gridtotal){
    console.log(gridtotal);
      var newgrid = []
       $("#grid").data().kendoGrid.dataSource.data([]);
       for(var i=0;i<gridtotal;++i){
         newgrid.push(list[i]);
       }
        $("#grid").data().kendoGrid.dataSource.data().push.apply($("#grid").data().kendoGrid.dataSource.data(), newgrid);

    }
    var dataSource = new kendo.data.DataSource({
        data: list,
        pageSize: 2
    });

    dataSource.read();


    $("#pager").kendoPager({
        autoBind: false,
        dataSource: dataSource
    });

    $("#grid").kendoGrid({
        selectable: "multiple cell",
        allowCopy: true,
        columns: [
            { field: "productName" },
            { field: "category" }
        ],
        dataSource: dataSource
    });
}]);