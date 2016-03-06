
/*  FUNCTIONS FOR INDIGOAPPS SITE   */


function changeTextArea( str ) {
    var textarea = document.getElementById('story')
    
    textarea.value = str;
}
function changeTitle( str ) {
    var header = document.getElementById('infotitle')

    header.value = str;
}

function changeSH1(img) {
    var image=document.getElementById('SH1')
	image.src = img;
}


function createMap() {
   var c=document.getElementById("Timeline");
   var ctx=c.getContext("2d");
   ctx.fillStyle="#FF0000";
   ctx.fillRect(Timeline.width/4,0,Timeline.width/2,Timeline.height/3);
   ctx.fillStyle="#FFF000";
   ctx.fillRect(0,Timeline.height/3*2,Timeline.width/3,Timeline.height);
   ctx.fillStyle="#FFFF00";
   ctx.fillRect(Timeline.width/3*2,Timeline.height/3*2,Timeline.width/3,Timeline.height);
   ctx.font="30px Harrington";
   ctx.fillText("Hello Y'all",Timeline.width/2-50,Timeline.height/3);


}

function changeBox(str) {
	var c=document.getElementById('story');
	c.innerHTML=str;
	
}

function showList(str)  {
    document.getElementById('story').innerHTML=str;
    listBox.innerHTML="Help";
    listBox.style.height:300px;

}