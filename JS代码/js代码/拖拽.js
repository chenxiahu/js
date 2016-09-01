// JavaScript Document
function Drag(id){
	    var tthis=this;
	    this.disX=0;
        this.disY=0;
	     this.oDiv=document.getElementById(id);
	     this.oDiv.onmousedown=function(ev){
			 tthis.Down(ev);
		  };
  		  
};
	Drag.prototype.Down=function(ev){
		var tthis=this;
		var oEvent=ev||event;
		 this.disX=oEvent.clientX-this.oDiv.offsetLeft;
		 this.disY=oEvent.clientY-this.oDiv.offsetTop;
		document.onmousemove=function(ev){
			tthis.Move(ev);
		}
	    document.onmouseup=function(){
			tthis.Up();	
		}
		return false;
		};
		Drag.prototype.Move=function(ev){
			var oEvent=ev||event;
			this.oDiv.style.left=oEvent.clientX-this.disX+'px';
			this.oDiv.style.top=oEvent.clientY-this.disY+'px';
			};
		Drag.prototype.Up=function(){
			document.onmousemove=null;
			document.onmouseup=null;
			};
