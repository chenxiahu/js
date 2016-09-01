// JavaScript Document
Cookies={
	 set:function(key,value,minsToExpire){
		 var expires="";
		 if(minsToExpire){
			 var date=new Date();//客户端时间
			 date.setTime(date.getTime()+(minsToExpire*60*1000));
			 expires="; expires="+date.toGMTString();//expires=Sat,14 Mar 2009 17:45:33 GMT
			 //Cookie存的时候，键和值都是要编码。
			 //key:"a b" encodeURLComponent=>"a%20b"
		 }
			 document.cookie=encodeURIComponent(key)+"="+encodeURIComponent(value)+expires+";path=/";
			 return value;
			 
		 },
		get:function(key){
			 var nameCompare=key+"=";
			 var cookieArr=document.cookie.split(';');
			 for(var i=0;i<cookieArr.length;i++){
				 var a=cookieArr[i].split("=");
				 var currentKey=decodeURIComponent(a[0]);
				 if(key==currentKey||" "+key==currentKey){
					 return decodeURIComponent(a[1]);
					 }
				 }
		       return null;
			},
	 isAvailable:function(){
		  return (this.set('cookieTest','1')==this.get('cookieTest'));
		 },
	 del:function(key){
	    this.set(key,"",-1);
	 }
	 
	}