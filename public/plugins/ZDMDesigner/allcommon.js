var gPlot;
var objectID ;
var isFollow=false;

function CommonToolTip(pos)
{
	
         if(pos.x<firstlc || pos.x >endlc || pos.y<gPlot.getAxes().yaxis.min || pos.y>gPlot.getAxes().yaxis.max)
         {
         	 $('#tooltip').css('display','none');
         	 return;
         }         
	   $('#tooltip').css('display','block');
	   
	var htmlStr = "";
 	var mTop,mLeft=0;
 	
 	 htmlStr ="��̣�"+ pos.x.toFixed(2)+"<br/>�߳�: " + pos.y.toFixed(2);
 	 var eh,th;
 	 eh = DMX_getlcElev(pos.x);
 	 th = DMX_getTrackH(pos.x);
 	 htmlStr +="<br/>����ߣ�"+ eh.toFixed(2)+"<br/>�����: " + th.toFixed(2)+"<br/>����: " + (th-eh).toFixed(2);
	   var  o = gPlot.pointOffset({x: pos.x, y: pos.y})
	   mTop =  o.top  + 5;
	   mLeft=  o.left + 15;
	  
	  $("#tooltip").html(htmlStr)
					.css({ top: mTop, left: mLeft })
					.fadeIn(200);
}


//------------
// Exit
function Exit()
{
    
}
//--------------
// Init
function Init() {
 
}