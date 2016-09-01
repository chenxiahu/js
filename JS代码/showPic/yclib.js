// JavaScript Document
(function(){
	if(!window.yc){
		 window.yc={};
		}
	if(!window.zs){
		 window.zs={};
		}
	 if(!window.ls){
		 window.ls={};
		 };
	})();
function $(){
	var elements=new Array();
	for(var i=0;i<arguments.length;i++){
		var element=arguments[i];
		if(typeof element=='string'){
			element=document.getElementById(element);
			}
		if(arguments.length==1){
			return element;
			}
		  elements.push(element);
	}
		return elements;
	}
window['yc']['$']=$;
 function supplant(str,o){
      return str.replace(/{([a-z]*)}/g,function(a,b){
		  var r=o[b];
		  return r;
		  });
	 };
 window['yc']['supplant']=supplant;
 Object.prototype.toJsonString=function(){
	 var jsonstr=[];
	  for(var i in this){
		   if(this.hasOwnProperty(i)){
			   jsonstr.push("\""+i+"\""+":\""+this[i]+"\"");
			   }
		  }
		var r=jsonstr.join(",\n");
		r="{"+r+"}";
		return r;
	 }
	window['yc']['toJsonString']=toJsonString;
	//数组，需要再仔细研究
/*Array.prototype.toJonString=function(){
	   var json=[];
	   for(var i=0;i<this.length;i++){
		   json[i]=(this(i)!=null)?this[i].toJonString():'null';
		   }
		 return '['+json.join(',')+']';
	}	
 
*/ function isCompatible(other){
	 if(other===false||!Array.prototype.push||!Object.hasOwnProperty||!document.createElement||!document.getElementsByTagName){
		 return false;
		 }
		 return true;
	 };
window['yc']['isCompatible']=isCompatible;
function addEvent(node,type,listener){
	if(!isCompatible){
		return false;
		}
	 if(!(node=$(node))){
		 return false;
		 }
	 if(node.addEventListener){
		 node.addEventListener(type,listener,false);
		 return true;
		 }
	 else if(node.attachEvent){
		  node['e'+type+listener]=listener;
		  node[type+listener]=function(){
			  node['e'+type+listener](window.event);
			  }
		 node.attachEvent('on'+type,node[type+listener]);
		 return true;
		 }
	};
	window['yc']['addEvent']=addEvent;
	function removeEvent(node,type,listener){
		 if(!(node=$(node))){
			  return false;
			 }
		 if(node.removeEventListener){
			  node.removeEventListener(type,listener,false);
			  return true;
			 }
		else if(node.detachEvent){
			node.detachEvent('on'+type,node[type+listener]);
			node[type+listener]=null;
   			return true;
			}
			return false;
			
		};
	window['yc']['removeEvent']=removeEvent;
	
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
			
  function setStyleById(element,styles){
	 if(!(element=$(element))){
		 return false;
		 }
     for(property in styles){
		 if(!styles.hasOwnProperty(property)){
			 continue;
			 }
			if(element.style.setProperty){
				element.style.setProperty(uncamelize(property,'-'),styles[property],null);
				}
				else{
					element.style[camelize(property)]=styles[property];
					}
		 }
		 return true;
	}
window['yc']['setStyle']=setStyleById;
window['yc']['setStyleById']=setStyleById;
		
	//className：要找的类名  tag:要查找的标签
	function getElementsByClassName(className,tag,parent){
		parent=parent||document;
		if(!(parent=$(parent))){
			return false;
			}
		var allTags=(tag=="*"&&parent.all)?parent.all:parent.getElementsByTagName(tag);
		var matchingElements=new Array();
		//创建一个正则表达式，来判断className是否正确
		var regex=new RegExp('(^|\\s)'+className+'(\\s|$)');
		var element;
		for(var i=0;i<allTags.length;i++){
			element=allTags[i];
			if(regex.test(element.className)){
				 matchingElements.push(element);
				}
			}
		return matchingElements;
		};
	window['yc']['getElementsByClassName']=getElementsByClassName;
	function toggleDisplay(node,value){
		if(!(node=$(node))){
			 return false;
			}
		 if(node.style.display!='none'){
			 node.style.display='none';
			 }
			 else{
				   node.style.display=value||'';
				 }
			return true;
		};
	window['yc']['toggleDisplay']=toggleDisplay;	
	function insertAfter(node,referenceNode){
		if(!(node=$(node))){
			return false;
			}
		 if(!(referenceNode=$(referenceNode))){
			  return false;
			 }
		 var parent=referenceNode.parentNode;
		 if(parent.lastChild==referenceNode){
			  return false;
			 }
			 else{
				  parent.insertBefore(node,referenceNode.nextSibling);
				 }
		};
    window['yc']['insertAfter']=insertAfter;
	function removeChildren(parent){
		if(!(parent=$(parent))){
			return false;
			}
		while(parent.firstChild){
			parent.removeChild(parent.firstChild);
			}
		return parent;
		};
	window['yc']['removeChildren']=removeChildren;
  function prependChild(parent,newChild){
	  if(!(parent=$(parent))){
		  return false;
		  }
		if(!(newChild=$(newChild))){
			return false;
			}
		if(parent.firstChild){
			//查看parent节点下是否有子节点
			//如果有一个子节点，说在这个子节点前添加
			parent.insertBefore(newChild,parent.firstChild);
			}
			else{
				 parent.appendChild(newChild);
				}
			return parent;
	  };
	 window['yc']['prependChild']=prependChild;
function camelize(s){
	 return s.replace(/-(\w)/g,function(strMatch,p1){
		 return p1.toUpperCase();
		 });
		 
	}
window['yc']['camelize']=camelize;

function uncamelize(s,sep){
	sep=sep||'-';
	return s.replace(/([a-z])([A-Z])/g,function(match,p1,p2){
		return p1+sep+p2.toLowerCase();
		});
	}
window['yc']['uncamelize']=uncamelize;

function setStyleByTagName(tagname,styles,parent){
	 parent=$(parent)||document;
	 var elements=parent.getElementsByTagName(tagname);
	 for(var e=0;e<elements.length;e++){
		 setStyleById(elements[e],styles);
		 }
		 
	}
	window['yc']['setStylesByTagName']=setStyleByTagName;
	
function setStylesByClassName(parent,tag,className,styles){
	 if(!(parent=$(parent))){
		 return false;
		 }
		var elements=getElementsByClassName(className,tag,parent);
		for(var e=0;e<elements.length;e++){
			setStyleById(elements[e],styles);
			}
			return true;
	}
window['yc']['setStylesByClassName']=setStylesByClassName;

function getClassNames(element){
	if(!(element=$(element))){return false;}
	  return element.className.replace(/\s+/,' ').split(' ');
	}
	
window['yc']['getClassNames']=getClassNames;

function hasClassName(element,className){
	 if(!(element=$(element))){
		 return false;
		 }
		var classes=getClassNames(element);
		for(var i=0;i<classes.length;i++){
			if(classes[i]===className){
				return true;
				}
			}
		return false;
	}
window['yc']['hasClassName']=hasClassName;

function addClassName(element,className){
	if(!(element=$(element))){return false;}
	var space=element.className?' ':'';
	element.className+=space+className;
	return true;
	}
window['yc']['addClassName']=addClassName;
 
 //从元素中删除
 function removeClassName(element,className){
		if(!(element=$(element))){return false;}
		//先获取所有的类
		var classes=getClassNames(element);
		//循环遍历数组删除匹配的项、因为从数组中删除项会是数组变短，所以要反向删除
		var length=classes.length;
		var a=0;
		for(var i=length-1;i>=0;i--){
			if(classes[i]===className){
				delete(classes[i]);
				a++;
				}
			}
			element.className=classes.join('');
			//判断删除是否成功
			return (a>0?true:false);
		}
	window['yc']['removeClassName']=removeClassName;
	
	 function getStyleSheets(url,media){
	 var sheets=[];
	 for(var i=0;i<document.styleSheets.length;i++){
		   if(url&&document.styleSheets[i].href.indexof(url)==-1){
			   continue;
			   }
			 if(media){
				 //规范media字符串
				  media=media.replace(/,\s/,',');
				  var sheetMedia;
				  if(document.styleSheets[i].mediaText){
					  //DOM方法
					  sheetMedia=document.styleSheets[i].media.mediaText.replace(/,\s*/,',');
					  //safari会添加额外idea引号和空格
					  sheetMedia=sheetMedia.replace(/,\s*$/,'');
					  }
					  else{
						   sheetMedia=document.styleSheets[i].media.replace(/,\s*/,',');
						  }
				  if(media!=sheetMedia){
					  continue;
					  }
				 }
				 sheets.push(document.styleSheets[i]);
		 }
		 return sheets;
	 }
	window['yc']['getStyleSheets']=getStyleSheets;
	
	function addStyleSheet(url,media){
		 media=media||'screen';
		 var link=document.createElement('link');
		 link.setAttribute('rel','stylesheet');
		 link.setAttribute('type','text/css');
		 link.setAttribute('href',url);
		 link.setAttribute('media',media);
		 document.getElementByTagName('head')[0].appendChild(link);
		}
	window['yc']['addStyleSheet']=addStyleSheet;
	
	
	
 function getStyleSheets(url,media){
	 var sheets=[];
	 for(var i=0;i<document.styleSheets.length;i++){
		 if(!document.styleSheets[i].href){
			 continue;
			 }
		   if(url&&document.styleSheets[i].href.indexOf(url)==-1){
			   continue;
			   }
			 if(media){
				 //规范media字符串
				  media=media.replace(/,\s/,',');
				  var sheetMedia;
				  if(document.styleSheets[i].mediaText){
					  //DOM方法
					  sheetMedia=document.styleSheets[i].media.mediaText.replace(/,\s*/,',');
					  //safari会添加额外idea引号和空格
					  sheetMedia=sheetMedia.replace(/,\s*$/,'');
					  }
					  else{
						   sheetMedia=document.styleSheets[i].media.replace(/,\s*/,',');
						  }
				  if(media!=sheetMedia){
					  continue;
					  }
				 }
				 sheets.push(document.styleSheets[i]);
		 }
		 return sheets;
	 }
	window['yc']['getStyleSheets']=getStyleSheets;
	
	function addStyleSheet(url,media){
		 media=media||'screen';
		 var link=document.createElement('link');
		 link.setAttribute('rel','stylesheet');
		 link.setAttribute('type','text/css');
		 link.setAttribute('href',url);
		 link.setAttribute('media',media);
		 document.getElementsByTagName('head')[0].appendChild(link);
		}
	window['yc']['addStyleSheet']=addStyleSheet;
	
	function removeStyleSheet(url,media){
		var styles=getStyleSheets(url,media);
		for(var i=0;i<styles.length;i++){
			//styles[i]表示样式表->.ownerNode表示这个样式表所需的节点<link>
			var node=styles[i].ownerNode||styles[i].owingElement;
			//禁用样式表
			styles[i].disabled=true;
			node.parentNode.removeChild(node);
			}
		}
	window['yc']['removeStyleSheet']=removeStyleSheet;
	
function addCSSRule(selector,styles,index,url,media){
	var declaration='';
	//根据style参数（样式对象）构建申明字符串
	for(property in styles){
		if(!styles.hasOwnProperty(property)){
			continue;
			}
		declaration+=property+':'+styles[property]+';';
		}
	//根据url和media获取样式表
	var styleSheets=getStyleSheets(url,media);
	var newIndex;
	//循环所有满足条件的样式表，添加样式规则
	for(var i=0;i<styleSheets.length;i++){
		//计算规则添加的索引位置 cssRules->w3c
		if(styleSheets[i].insertRule){
			 newIndex=(index>=0?index:styleSheets[i].cssRule.length);
			 //DOM样式规则添加的方法  insertRule(rule,index);
			 styleSheets[i].insertRule(selector+'{'+declaration+'}',newIndex);
			}
			else if(styleSheets[i].addRule){
				//计算规则田间的索引位置
				newIndex=(index>=0?index:-1);//ie中认为规则列表最后一项用-1代表ie样式规则添加的方法 addRule (selector,style,index);
		        styleSheets[i].addRule(selector,declaration,newIndex);
			}
		}
	}
	window['yc']['addCSSRule']=addCSSRule;
	
	function editCSSRule(selector,styles,url,media){
		//取出所有样式表
		 var styleSheets=getStyleSheets(url,media);
		 //循环每个样式表中的每条规则
		 for(var i=0;i<styleSheets.length;i++){
			 //取得规则列表 DOM2样式表规范方法是styleSheets[i].cssRules ie用的是styleSheets[i].Rules
			 var rules=styleSheets[i].cssRules||styleSheets[i].rules;
			 if(!rules){
				  continue;
				 }
				//ie默认选择器名使用大写故转换为大写形式，如果使用的是区分大小写的id，则可能会导致冲突
			 selector=selector.toUpperCase();
			 for(var j=0;j<rules.length;j++){
				 if(rules[j].selectorText.toUpperCase()==selector){
					 for(property in styles){
						 if(!styles.hasOwnProperty(property)){
							  continue;
							 }
							rules[j].style[camelize(property)]=styles[property];
						 }
					 }
				 }
			 }
		}
		window['yc']['editCSSRule']=editCSSRule;
	
	function moveElement(elementId,final_x,final_y,interval){
	  if(!isCompatible()){return false;}
	  if(!$(elementId)){return false;}
	  var elem=$(elementId);
	  if(elem.movement){
		   clearTimeout(elem.movement);
		  }
	 
	  var xpos=parseInt(elem.style.left);
	  var ypos=parseInt(elem.style.top);
	  
	  if(xpos==final_x&&ypos==final_y){
		  return true;
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
			  dist=(final_y-ypos)/10;
			  ypos=ypos+dist;
			}
		if(ypos>final_y){
			 dist=(ypos-final_y)/10;
			 ypos=ypos-dist;
			}
		elem.style.left=xpos+'px';
		elem.style.top=ypos+'px';
		var repeat="yc.moveElement('"+elementId+","+final_x+","+final_y+","+interval+")";
		elem.movement=setTimeout(repeat,interval);
		
	  }
	 window['yc']['moveElement']=moveElement;
	  