//服务层
app.service('specificationService',function($http){
	    	
	//读取列表数据绑定到表单中
	this.findAll=function(){
		return $http.get('../specification/findAll.do');		
	}
	//分页 
	this.findPage=function(pageNum,pageSize){
		return $http.get('../specification/findPage.do?pageNum='+pageNum+'&pageSize='+pageSize);
	}
	//查询实体
	this.findOne=function(id){
		return $http.get('../specification/findOne.do?id='+id);
	}
	//增加 
	this.add=function(entity){
		return  $http.post('../specification/add.do',entity );
	}
	//修改 
	this.update=function(entity){
		return  $http.post('../specification/update.do',entity );
	}
	//删除
	this.dele=function(ids){
		return $http.get('../specification/delete.do?ids='+ids);
	}
	//搜索
	this.search=function(pageNum,pageSize,searchEntity){
		return $http.post('../specification/search.do?pageNum='+pageNum+"&pageSize="+pageSize, searchEntity);
	}

	this.selectSpecificationList=function () {
		return $http.get('../specification/selectSpecificationList.do')
    }
});
