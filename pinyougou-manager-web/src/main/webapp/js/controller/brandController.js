app.controller('brandController', function ($scope,$controller, brandService) {

   $controller('baseController',{$scope:$scope});//继承

    $scope.findAll = function () {
        brandService.findAll().success(
            function (response) {
                $scope.list = response;
            }
        )
    };

    //删除方法
    $scope.dele = function () {
        brandService.dele().success(
            function (response) {
                if (response.success){
                    $scope.reloadList();
                }else {
                    alert(response.message);
                }
            }
        )
    };

    $scope.searchEntity={};
    //查询方法
    $scope.search = function (pageNum, pageSize) {
        brandService.search(pageNum,pageSize,$scope.searchEntity).success(
            function (response) {
                $scope.paginationConf.totalItems=response.total;
                $scope.list=response.rows;
            }
        )
    };

    $scope.findOne=function (id) {
        brandService.findOne(id).success(
            function (response) {
                $scope.entity=response;
            }
        )
    };

    $scope.findPage = function (pageNum, pageSize) {

        brandService.findPage(pageNum, pageSize).success(
            function (response) {
                $scope.list = response.rows;
                $scope.paginationConf.totalItems = response.total;//更新总记录数
            }
        );
    };

    $scope.save = function () {
        var object = null;
        if ($scope.entity.id!=null){
            object=brandService.update($scope.entity)
        }else {
            object=brandService.add($scope.entity)
        }
        object.success(
            function (response) {
                if (response.success){
                    $scope.reloadList();
                }else {
                    alert(response.message);
                }
            }
        )
    };


});