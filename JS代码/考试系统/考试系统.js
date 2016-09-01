// JavaScript Document
function SqlHelper(dbname,size){
	 this.dbname=dbname;
	 this.size=size;
	 this.init();
	}
SqlHelper.prototype={
	  init:function(){
		   if(!this.db){
			    if(window.openDatabase){
					this.db=openDatabase(this.dbname,1.0,"database",this.size*1024*1024);
					}
				 else{
					  return false;
					 }
			   }
		  },
		 exesql:function(sql,replace){
			  if(replace){
				   this.db.transaction(function(tx){
					   tx.executeSql(sql,replace);
					   });
				  }else{
					   this.db.transaction(function(tx){
						   tx.executeSql(sql,[]);
						   });
					  }
			 },
	  createTable:function(tableName,fields){
		   var sql='create table if not exists'+tableName+'(';
		   for( i in fields){
			   if(fields.hasOwnProperty){
				   sql+=i+' '+fields[i]+',';
				   }
			   }
			sql=sql.substr(0,sql.length-1);
			sql+=")";
			this.exesql(sql);
		  },
	select:function(tableName,selectFields,WhereStr,wherParams,callback){
		 var sql='select'+selectFields+'from'+tableName;
		 if(typeof(whereStr)!='undefined'&&typeof(wherParams)!='undefined'&&whereStr!=""){
			 sql+='where'+whereStr;
			 }
		 this.db.transaction(function(tx){
			 tx.executeSql(sql,wherParams,function(tx,results){
				 if(results.rows.length<1){
					 if(typeof(callback)=='function'){
						 callback(false)
						 }
					 }else{
						 if(typeof(callback)=='function'){
							 callback(results.rows)
							 }
						 }
				 },function(tx,error){
					 return false;
					 })
			 });
		 
		}
		 
		 
		  
	}