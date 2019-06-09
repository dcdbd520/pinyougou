//品牌服务层
app.service('brandService',function ($http) {
    this.findAll = function () {
        return $http.get('../brand/findAll.do')
    };

    this.findPage=function (pageNum, pageSize) {
        return $http.get('../brand/findPage.do?pageNum=' + pageNum + '&pageSize=' + pageSize)
    };

    this.findOne=function (id) {
        return $http.get('../brand/findOne.do?id='+id)
    };

    this.add=function (entity) {
        return $http.post('../brand/add.do',entity)
    };

    this.update = function (entity) {
        return $http.post('../brand/update.do',entity)
    };

    this.dele=function (selectIds) {
        return $http.get('../brand/delete.do?ids='+selectIds)
    };

    this.search=function (pageNum,pageSize,searchEntity) {
        return $http.post('../brand/search.do?pageNum='+pageNum+'&pageSize='+pageSize,searchEntity)
    };
    
    this.selectOptionList=function () {
        return $http.get('../brand/selectOptionList.do')
    }
});