
// 2017-03-11 Saturday 10:52

// <1> 获取元素的某个CSS样式规则
function getCssRule(node, rule){
	var c_value = '';
	if(window.getComputedStyle){
		c_value = window.getComputedStyle(node, false)[rule]
	} else if(node.currentStyle){	// ie8以下
		c_value = node.currentStyle[rule];
	}
	
	return c_value;
}


// 14:55
// <2> 各种浏览器的内核是什么_百度经验
/*
一、Trident内核代表产品Internet Explorer，又称其为IE内核。Trident（又称为MSHTM...
二、Gecko内核代表作品Mozilla FirefoxGecko是一套开放源代码的、以C++编写的网页排...
三、WebKit内核代表作品Safari、Chromewebkit 是一个开源项目，包含了来自KDE项目和...
四、Presto内核代表作品OperaPresto是由Opera Software开发的浏览器排版引擎，供Ope...
https://www.baidu.com/link?url=ylY7ERZEP9O0ti3S-BcJAelYn2eEMc_zmsPoToIpHe3NWJA1zjuMpe-Hnmjj0q8AdnC4-83WVnmVh3IYSbhrrkjICtpRELZHVdiCyCN9BMW&wd=&eqid=d2b595bd00005fdb0000000358c397df
*/



