// JavaScript Document
function myReady(fn){
	if(document.addEventListener){
		document.addEventListener("DOMContentLoaded",fn,false)
		}
		else{
			 IEContentLoaded(fn);
			}
	}
	function IEContentLoaded(fn){
		 var done=false;
		 var init=function(){
			  if(!done){
				  done=true;
				  fn();
				  }
			 }
		}
		(function(){
			try{
				document.documentElement.doScroll('left');
				}
				catch(e){
					alert(e);
					setTimeout(arguement.callee,10);
					return;
					}
			init();
			}
			)();
			document.onreadystatechange=function(){
				if(document.onreadystatechange='complete'){
					init();
					}
				}