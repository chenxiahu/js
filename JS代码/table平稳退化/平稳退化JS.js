// JavaScript Document
(function(){
	if(!window.yc){
		window.yc={};
	}

})();

function stripeTables(){
	if(!yc.isCompatible())return false;
	var tables=document.getElementsByTagName("table");
	var odd,rows;
	for(var i=0;i<tables.length;i++){
		odd=false;
		rows=tables[i].getElementsByTagName("tr");
		for(var j=0;j<rows.length;j++){
			if(odd==true){
				yc.addClassName(rows[j],"odd")
				odd=false;
				
				}else{
					odd=true;
					}
			}
		}
	
	}
	yc.addLoadEvent(stripeTables);
	
	function highlightRows(){
	if(!yc.isCompatible())return false;
	var rows=document.getElementsByTagName("tr");
	for(var i=0;i<rows.length;i++){
		rows[i].onmouseover=function(){
			/*this.style.fontWeight="bold";
			this.style.color="#f00";*/
			yc.removeClassName(this,'mouseout');
			yc.addClassName(this,"mouseover");
			
			}
			rows[i].onmouseout=function(){
				/*this.style.fontWeight="normal";
				this.style.color="#000";*/
				yc.removeClassName(this,'mouseover');
				yc.addClassName(this,"mouseout");
				}
		}
	}
	yc.addLoadEvent(highlightRows);