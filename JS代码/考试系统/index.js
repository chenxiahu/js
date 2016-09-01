// JavaScript Document
//往数据库中插入数据
var sqlhelper=new SqlHelper('Questions',2);
//创建表
var queFields={"num":"int not primary key","que":"text","opt1":"text","opt2":"text","opt3":"text","opt4":"text","ans":"int"};
sqlhelper.createTable("question",queFields);
//在sqlite中一次插入多条数据的语法：insert into tablename(fields) values(value1,value2,value3)....
sql1="insert into question(num,que,opt1,opt2,opt3,opt4,ans)values(1,'中国的首都','北京','长沙','重庆','上海',1)";
sql2="insert into question(num,que,opt1,opt2,opt3,opt4,ans)values(2,'湖南的省会','北京','长沙','重庆','上海',2)";
sql3="insert into question(num,que,opt1,opt2,opt3,opt4,ans)values(3,'湖南位于中国的','北部','南部','西部','东部',3)";
sql4="insert into question(num,que,opt1,opt2,opt3,opt4,ans)values(4,'下列哪个沿海城市','北京','衡阳','厦门','成都',4)";
sql5="insert into question(num,que,opt1,opt2,opt3,opt4,ans)values(5,'世界四大洋中国面积最小的是','太平洋','大西洋','印度洋','5')";
sqlhelper.exesql(sql1);
sqlhelper.exesql(sql2);
sqlhelper.exesql(sql3);
sqlhelper.exesql(sql4);
sqlhelper.exesql(sql5);

var ansarr=new Array(5);
for(var i=0;i<ansarr.length;i++){
	ansarr[i]=0;
	}
	//创建一个表用来存放选择的每项答案
	var ansFields={"num":"int not null primary key","answer":"text"};
	sqlhelper.createTable("answer",ansFields);
	sqlhelper.exesql("insert into answer(num,answer)values(1,'"+ansarr.join()+"')");