// JavaScript Document
function prepareSlideShow(){
	if(!yc.isCompatible()){return false;}
	if(!yc.$('linklist')){return false;}
	if(!yc.$('preview')){return false;}
	var preview=yc.$('preview');
	preview.style.position="absolute";
	preview.style.left='0px';
	preview.style.top='0px';
	
	var list=yc.$('linklist');
	var links=list.getElementsByTagName('a');
	
	for(var i=0;i<links.length;i++){
		links[i].index=i+1;
		 (function(index){
			 yc.addEvent(links[index],"mouseover",function(){
				 yc.moveElement("preview",(index+1)*-100,0,10);
				 });
			 })(i);
		}
	}
yc.addLoadEvent(prepareSlideShow);
//动画 定时移动元素 x最终位置 y最终位置 间隔时间
  /*function moveElement(elementId,final_x,final_y,interval){
	  if(!isCompatible()){return false;}
	  if(!(elementId)){return false;}
	  if(elem.movement){
		   clearTimeout(elem.movement);
		  }
	  var elem=$(elementId);
	  var xpos=parseInt(elem.style.left);
	  var ypos=parseInt(elem.style.top);
	  
	  if(xpos==final_x&&ypos==final_y){
		  return false;
		  }
		  var dist=0;
	     if(xpos<final_x){
			 dist=(final_x-xpos)/10;
			 xpos=xpos+dist;
			 }
		if(xpos>final_x){
			dist=(xpos-final_x)/10;
			 xpos=xpos-dist;
			}
		if(ypos<final_y){
			  dist=final_y-ypos;
			  ypos=ypos+dist;
			}
		if(ypos>final_y){
			 dist=ypos-final_y;
			  ypos=ypos-dist;
			}
		elem.style.left=xpos+'px';
		elem.style.top=ypos+'px';
		var repeat="yc.moveElement('"+elementId+","+final_x+","+final_y+","+interval+")";
		elem.movement=setTimeout(repeat,interval);
		setTimeout(repeat,interval);
	  }
	 window['yc']['moveElement']=moveElement;
	  */
	/*
	  方案二 如果要用循环，如何处理
	  给当前的节点增加一个属性，来存当前的索引值，然后事件激活，使用，这个属性取值
	  for(var i=0;i<links[i].length;i++){
		  links[i].index=i+1;
		  yc.addEvent(link[i],"mouseover",function(){
			  yc.moveElement('preview',this.index*(-100),0,10);
			  });
		  }
	
	*/
	/*for(var i=0;i<links.length;i++){
		 yc.addEvent(links[i],'mouseover',function(){
			( function(index){
				  yc.addEvent(links[index],'mouseover',function(){
					  yc.moveElement('preview',(index+1)*(-100),0,10);
					  })
				 })
			 })(i);
		}*/