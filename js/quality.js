var quality1=new Array();

quality1[0] ={url:"img/quality/quality1.jpg"}
quality1[1] ={url:"img/quality/quality1.jpg"}
quality1[2] ={url:"img/quality/quality1.jpg"}
quality1[3] ={url:"img/quality/quality1.jpg"}
quality1[4] ={url:"img/quality/quality1.jpg"}
quality1[5] ={url:"img/quality/quality1.jpg"}


var quality2=new Array();

quality2[0] ={url:"img/quality/quality1.jpg"}
quality2[1] ={url:"img/quality/quality1.jpg"}
quality2[2] ={url:"img/quality/quality1.jpg"}
quality2[3] ={url:"img/quality/quality1.jpg"}
quality2[4] ={url:"img/quality/quality1.jpg"}
quality2[5] ={url:"img/quality/quality1.jpg"}




var page=new Array();
page[0]=quality1;
page[1]=quality2;




window.onload=function(){
	var oDiv="";
	var pge=""
	if(window.screen.width>=768){
		for(i in page){
			var oDivChild="";
				for(j in page[i]){
		            oDivChild +='<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 "> '+
									'<img src="'+page[i][j].url+'"/>'+
					            '</div>'
		           }
				oDiv += '<div class="row">'+
						oDivChild+
						'</div>';
				var num=parseInt(i)+1;
				pge+='<li>'+num+'</li>'
		}
	}else{
   		var oDivChild="";
			for(j in page[0]){
	             oDivChild +='<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 "> '+
									'<img src="'+page[0][j].url+'"/>'+
					            '</div>'
	           }
			oDiv += '<div class="row">'+
					oDivChild+
					'</div>';
	}
	
	$("#slideToolbar").html(oDiv);
	$("#page").html(pge);
	$("#page li").eq(0).addClass("sin");
	
	var sliderWidth=0;//父容器宽度
	var num=page.length;//子元素个数
	//标识是否可点击
	var flag=1;
	if(window.screen.width>=768){
			sliderWidth=$("#_f").width();
			sliderHeight=$(".slideToolbar .row").eq(0).height();
			//父容器宽高
			$(".slideToolbar").width(num*2*sliderWidth+"px")
			$(".slideToolbar").height("auto")
			//子容器宽高
			$(".slideToolbar .row").width(sliderWidth+"px")
			$(".slideToolbar .row").height("auto")
	}
	//mobile
	else{
		
	}
	
	
	//上一页prev
	$(".prev").bind("click",function(){
		if(flag>1){
			flag=flag-1;
			$(".slideToolbar").animate({marginLeft:"-"+sliderWidth*(flag-1)+"px"},500,"linear")
			$(".prev,.next").removeClass("last")
			if(flag==1){
				$(this).addClass("last");
			}
			sin();
		}
	
	})
	
	
	//下一页next
	$(".next").bind("click",function(){
		if(flag<num){
			flag=flag+1;
			$(".slideToolbar").animate({marginLeft:"-"+sliderWidth*(flag-1)+"px"},500,"linear")
			$(".prev,.next").removeClass("last")
			if(flag==num){
				$(this).addClass("last");
			}
			sin()
		}
	})
	
	
	//页码事件
	$(".page li").bind("click",function(){	
		flag=$(this).index()+1;
		$(".slideToolbar").animate({marginLeft:"-"+sliderWidth*(flag-1)+"px"},500,"linear")
		$(".prev,.next").removeClass("last")
		if(flag==1){
			$(".prev").addClass("last");
		}
		if(flag==num){
				$(".next").addClass("last");
			}
		sin();
	})
	
	function sin(){
		$(".page li").removeClass("sin");
		$(".page li").eq(flag-1).addClass("sin");
	}

    $("#more").bind("click",function(){
    	if(flag<page.length){
    		var oDivChild="";
			for(j in page[flag]){
	            oDivChild +='<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 "> '+
									'<img src="'+page[flag][j].url+'"/>'+
					            '</div>'
	           }
			oDiv += '<div class="row">'+
					oDivChild+
					'</div>';
		flag=flag+1;
    	$("#slideToolbar").append(oDiv);
    	}
    	else{
    		$("#more").html("已经加载全部")
    	}
    	
    })
}


































