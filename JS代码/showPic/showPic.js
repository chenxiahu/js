// JavaScript Document
(function(){
	if(!window.yc){
		window.yc={};
	}

})();
function preparePlaceHolder(){
	 if(!yc.isCompatible())return false;
	 if(!yc.$('imagegallery'))return false;
	  var placeholder=document.createElement('img');
	  placeholder.setAttribute('src','images/placeholder.png');
	  placeholder.setAttribute('id','placeholder');
	  placeholder.setAttribute('alt',"图片浏览");
	  
	  var description=document.createElement('P');
	  description.setAttribute('id','description');
	  var desctext=document.createTextNode("请选择一张图片");
	  description.appendChild(desctext);
	  
	  var gallery=document.getElementById('imagegallery');
	  yc.insertAfter(placeholder,gallery);
	  yc.insertAfter(description,placeholder);
	}

function showPic(whichPic){
	if(!(yc.$('placeholder'))){return false;}
	var source=whichPic.getAttribute('href');//图片地址
	 var placeholder=yc.$("placeholder");
	 if(placeholder.nodeName!="IMG"){return false;}
	 placeholder.setAttribute("src",source);//在placeholder中显示图片
	 //如果description不存在，则不显示
	 if(yc.$("description")){
		 var text=whichPic.getAttribute('title')?whichPic.getAttribute('title'):"";
	     var description=yc.$('description');
		 if(description.firstChild.nodeType==3)
		 {
	      description.firstChild.nodeValue=text;
		 }
		
		 }
	  return true;
	}
	window['yc']['showPic']=showPic;
	
	function preparePic(){
		 if(!yc.isCompatible()){return false;}
		 //在页面上指定了容器ul的id，这样就可以通过js中js一次性给所有的a元素加入事件
		 if(!yc.$("imagegallery")){return false;}
		 var gallery=yc.$("imagegallery");
		 var links=gallery.getElementsByTagName('a');
		 for(var i=0;i<links.length;i++){
			 links[i].onclick=function(){
				 return showPic(this)?false:true;
				 //只有这个onclick绑定的事件返回的是false，才不会运行a标签
				 }
			 }
		}
	yc.addLoadEvent(preparePic);
	yc.addLoadEvent(preparePlaceHolder);
	//这个函数用于做浏览器测试和检验，这样js代码不再依赖于那些没有保证的假设。可以保证js代码能平稳退化
	/*function preparePic(){
		 if(!yc.isCompatible()){return false;}
		 //在页面上指定了容器ul的id，这样就可以通过js中js一次性给所有的a元素加入事件
		 if(!yc.$("imagegallery")){return false;}
		 var gallery=yc.$("imagegallery");
		 var links=gallery.getElementsByTagName('a');
		 for(var i=0;i<links.length;i++){
			 links[i].onclick=function(){
				 return showPic(this)?false:true;
				 //只有这个onclick绑定的事件返回的是false，才不会运行a标签
				 }
			 }
		}
	yc.addLoadEvent(preparePic);

	
//取得一个元素计算样式
function getStyle(element,property){
	if(!(element=$(element))){return false;}
	//检测元素style属性中的值
	var value=element.style[camelize(property)];
	if(!value){
		 if(document.defaultView&&document.defaultView.getComputedStyle){
			 //DOM方法
			 var css=document.defaultView.getComputedStyle(element,null);
			 value=css?css.getPropertyValue(property):null;
			 }
			 else if(element.currentStyle){
				 value=element.currentStyle[camelize(property)];
				 }
		}
	 return value=='auto'?'':value;
	}
	window['yc']['getStyle']=getStyle;
	window['yc']['getStyleById']=getStyle;
	*/
	function addLoadEvent(func){
				//将现有的window。load事件处理函数的值存入变量oldLoad
				var oldOnLoad=window.onload;
				//如果在这个处理函数上还没有绑定任何函数，就像平时那样把函数添加个给他
				if(typeof window.onload!='function'){
					window.onload=func;
					}else{ 
					//如果在这个处理函数上已经绑定了一些函数，则将新函数追加到现有指令的尾部
					window.onload=function(){
						oldOnLoad();
						func();
					}
				}
			}
			window['yc']['addLoadEvent']=addLoadEvent;
		
 