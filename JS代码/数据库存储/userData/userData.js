// JavaScript Document
UserData={
     storageObject:null,
	 init:function(){
		  if(!this.storageObject){
			   this.storageObject=document.createElement('div');
			   this.storageObject.addBehavior("#default#userData");
			   this.storageObject.style.display='none';
			   document.body.appendChild(this.storageObject);
			  }
		 },
		set:function(key,value){
			  if(!this.storageObject){
				   this.init();
				  }
			  this.storageObject.setAttribute(key,value);
			  this.storageObject.save('a');
			  return value;
			},
	get:function(key){
		 if(!this.storageObject){
			 this.init();
			 }
		 this.storageObject.load('a');
		 return this.storageObject.getAttribute(key);
		},
	del:function(key){
	   if(!this.storageObject){
		   this.init();
		   }	
		this.storageObject.removeAttribute(key);
		this.storageObject.save('a');
	},
   isAvailable:function(){
	  return ('\v'=='v');
	 }
}