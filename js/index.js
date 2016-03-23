window.onload=function(){
	
	var banz=document.getElementsByClassName("banner_img");
	var imgs=banz[0].getElementsByTagName("img");
	var bq=document.getElementsByClassName("beiqie");
	var qhz=document.getElementsByClassName("qieh");
	var qhy=document.getElementsByClassName("qieh2");
	var qhdz=document.getElementsByClassName("qieha");
	var qhd=qhdz[0].getElementsByTagName("span");
	var num=0;
	var farg=true;
	for (var i = 0; i < bq.length; i++) {
			// animate(qhd[i],{background:"#dfdfdf"},400)
			// animate(imgs[i],{opacity:0},500)
			qhd[i].style.background="#dfdfdf";
			imgs[i].style["opacity"]=0;
			
		};
		colorAnimate(qhd[num],"background","#e40077",400)
		animate(imgs[num],{opacity:1},500)
		 banz[0].onmouseover=function(){
			clearInterval(t);
			animate(qhz[0],{opacity:0.8},100)
			animate(qhy[0],{opacity:0.8},100)
			

			// qhz[0].style.zIndex=999;
			// qhy[0].style.zIndex=999;
			
		}
		banz[0].onmouseout=function(){
			t=setInterval(zdq,2000);
			animate(qhz[0],{opacity:0},100)
			animate(qhy[0],{opacity:0},100)
			// qhz[0].style.zIndex=0;
			// qhy[0].style.zIndex=0;
		}
	for (var i = 0; i < bq.length; i++) {
		
		qhd[i].index=i;
		
		qhd[i].onclick=function(){
			num=this.index;
			for (var i = 0; i < bq.length; i++) {
			// animate(qhd[i],{background:"#dfdfdf"},400)
			// animate(imgs[i],{opacity:0},500)
			qhd[i].style.background="#dfdfdf";
			imgs[i].style["opacity"]=0;
			
		};
		imgs[num].style["opacity"]=0.5;
		colorAnimate(qhd[num],"background","#e40077",400)
		animate(imgs[num],{opacity:1},500)
	
		}

	};
	qhz[0].onclick=function(){
		num--;
		if (num<0) {num=7};
		if (!farg) {return};
		farg=false;
		for (var i = 0; i < bq.length; i++) {
			// animate(qhd[i],{background:"#dfdfdf"},400)
			// animate(imgs[i],{opacity:0},500)
			qhd[i].style.background="#dfdfdf";
			imgs[i].style["opacity"]=0;
			
		};
		imgs[num].style["opacity"]=0.5;
		colorAnimate(qhd[num],"background","#e40077",400)
		animate(imgs[num],{opacity:1},500,function(){farg=true})
	}
	qhy[0].onclick=function(){
		num++;
		if (num>7) {num=0};
		if (!farg) {return};
		farg=false;
		for (var i = 0; i < bq.length; i++) {
			// animate(qhd[i],{background:"#dfdfdf"},400)
			// animate(imgs[i],{opacity:0},500)
			qhd[i].style.background="#dfdfdf";
			imgs[i].style["opacity"]=0;
			
		};
		imgs[num].style["opacity"]=0.5;
		colorAnimate(qhd[num],"background","#e40077",400)
		animate(imgs[num],{opacity:1},500,function(){farg=true})
	}
	var zdq=function(){
		num++;
		if (!farg) {return};
		farg=false;
		if (num>7) {num=0};
		for (var i = 0; i < bq.length; i++) {
			// animate(qhd[i],{background:"#dfdfdf"},400)
			// animate(imgs[i],{opacity:0},500)
			qhd[i].style.background="#dfdfdf";
			imgs[i].style["opacity"]=0;
			
		};
		imgs[num].style["opacity"]=0.5;
		colorAnimate(qhd[num],"background","#e40077",400)
		animate(imgs[num],{opacity:1},500,function(){farg=true})
		
	}
	var t=setInterval(zdq,2000);

    // 在某个范围内分类截取元素false，或元素和文本true
	function fljq(fw,tf){
		tf=tf?tf:false;
		fw=fw?fw:document.getElementsByTagName("body")[0];
		var newchilds=fw.childNodes;
		var newarr=[];
		for (var i = 0; i < newchilds.length; i++) {
			if (newchilds[i].nodeType==1) {
			newarr[newarr.length]=newchilds[i];	
			}else if(tf&&panduan(newchilds[i].nodeValue)&&newchilds[i].nodeType==3){
				newarr[newarr.length]=newchilds[i];
			}
			
		};
		return newarr;
	}
	// 判断是否为空
	function panduan(str){
		// var a=str.length;
		for (var i = 0; i < str.length; i++) {
			if (!(/^\s+$/.test(str))) {
			return true;
		}
		};
		return false;
	}


	// 获得第一个节点
	function getfirstn(fwe){
		return fljq(fwe,false)[0];
	}
	// 获得最后一个节点
	function getlastn(fwe){
		var a=fljq(fwe,false).length-1;
		return fljq(fwe,false)[a];
	}
	// 节点轮播
	var dk=document.getElementsByClassName("huadongdk")[0];	
	var dz=document.getElementsByClassName("huadongw")[0];
	var jdzqb=document.getElementsByClassName("jdzq")[0];
	var jdyqb=document.getElementsByClassName("jdyq")[0];
    
	function jdyq(){
		var first=getfirstn(dk);
		animate(dk,{left:-295},function(){
			dk.appendChild(first);
			dk.style.left=0;
		})
	}
	function jdzq(){
		var first=getfirstn(dk);
		var last=getlastn(dk);
		dk.style.left="-295px";
		dk.insertBefore(last,first)
		animate(dk,{left:0})
	}
	var jdt=setInterval(jdyq,1000);
	dz.onmouseover=function(){
    	clearInterval(jdt);
    	jdzqb.style["opacity"]=1;
    	jdyqb.style["opacity"]=1;
    }
    dz.onmouseout=function(){
    	 jdt=setInterval(jdyq,1000)
    	 jdzqb.style["opacity"]=0;
    	jdyqb.style["opacity"]=0;
    }
    jdyqb.onclick=function(){
    	jdyq();

    }
    jdzqb.onclick=function(){
    	jdzq();
    }

}