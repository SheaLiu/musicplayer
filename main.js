window.onload=function (){
    musicData=["再见 牛仔","Work","Dat $tick","BANK ROLL","Bitch","Papillon"];
    singerData=["安全着陆","rihanna","Rich Chigga","Diplo,Rich Chigga,Rich The Kid","Honey Cocaine","王嘉尔"];

    var play1=document.getElementById("play1"),
    play2=document.getElementById("play2"),
    play3=document.getElementById("play3"),
    play4=document.getElementById("play4"),
    play5=document.getElementById("play5"),
    play6=document.getElementById("play6");
  
    
    

    var playData=[play1,play2,play3,play4,play5,play6];
    var flag;
    var index;
    var inx=0;
    var timer,timer1,timer2,timer3;
    var show_l=document.getElementById('show_l');
    var disc=document.getElementById("music_disc");    
    var image=show_l.getElementsByTagName("img")[0];
    var p_2=document.getElementById('p_2');
    var p_1=document.getElementById('p_1');    
    var play=document.getElementById("play");
    var b_li=document.getElementById("btns");
    var b_img1=b_li.getElementsByTagName('img')[0];
    var b_img2=b_li.getElementsByTagName('img')[1];
    var s_name=document.getElementById('s_name');
    var m_name=document.getElementById('m_name');
    var left=document.getElementById('left');
    var right=document.getElementById('right');
    /*
    var modes=document.getElementById('modes');
    var mode1=document.getElementById("mode1");
    var mode2=document.getElementById("mode2");
    var mode3=document.getElementById('mode3');
    var modeData=[mode1,mode2,mode3];
   */
    
for(var i=0;i<playData.length;i++){
    index=i;       


//点击事件
//点击disc控制音乐的播放暂停
disc.onclick=function (){
    start();
    judgee();
}
//点击播放按钮进行播放暂停
play.onclick=function () {
    start();
    judgee();
}
left.onclick=function(){
    reduce();
    
    s_name.innerHTML=singerData[index];
    m_name.innerHTML=musicData[index];
    
    play.innerHTML="暂停  -";
    b_img2.style.display="block";
    b_img1.style.display="none";
}
right.onclick=function(){
    add();
    s_name.innerHTML=singerData[index];
    m_name.innerHTML=musicData[index];
    
    play.innerHTML="暂停  -";
    b_img2.style.display="block";
    b_img1.style.display="none";
}




/*modes.onclick=function(){
    modeData[inx].style.display="none";
    inx++;
    if(inx>modeData.length-1){
        inx=0;
    }
    modeData[inx].style.display="block";
}






function suiji(){
       clearInterval(timer2);
            var ran=Math.floor(Math.random()*6);
            timer2=setInterval(function (e) {
                if(playData[index].ended){
                    reducejindutiao();
                    playData[ran].play();
                    s_name.innerHTML=singerData[ran];
                    m_name.innerHTML=musicData[ran];
                }
                
            },1000);              
    }
    suiji();
    
mode2.onclick=function(){
    playData[index].setAttribute("loop","loop");
}*/

function shunxu(e){
    clearInterval(timer3);
            timer3=setInterval(function (e) {
                if(playData[index].ended){
                    add();
                    s_name.innerHTML=singerData[index];
                    m_name.innerHTML=musicData[index];
                }
                
            },1000);              
}
shunxu();




p_1.onmousedown=function adjust(e){
    var bar=e.target;
    var x=e.offsetX;
    var lenth=playData[index].duration;
    p_2.style.width=x+"px";
    playData[index].currentTime=""+parseInt(x*lenth/300)+"";
    playData[index].play();
    clearInterval(timer);
    rotate();
    play.innerHTML="暂停  -";
    b_img2.style.display="block";
    b_img1.style.display="none";
    jindutiao(); 
}


}

function add(){
    deletee();
    reducejindutiao();
    pauseall();
    index++;
    if(index>playData.length-1){
        index=0;
    } 
    start();
}
function reduce(){
    deletee();
    reducejindutiao();
    pauseall();
    index--;
    if(index==-1){
        index=playData.length-1;
    }
    start();
}

//开始播放以及停止
function  start(){
    if(flag){
        imagePause();
        playData[index].pause();
    }else{
        rotate();
        playData[index].play();
        reducejindutiao();
        jindutiao();   
}
}


//切换歌曲以后清空进度条
function reducejindutiao(){
    clearInterval(timer1);
    p_2.style.width="0";
}

//音乐停止
function pauseall(){
    for (var i=0;i<playData.length;i++) {
        if(playData[index]){
            playData[index].pause();
        }
    }
}
//需要清空所有定时器
function deletee(){
    imagePause();
    clearInterval(timer);
}

//判断播放按钮
function judgee(){
    if(play.innerHTML==="播放 +") {
        play.innerHTML="暂停  -";
        b_img2.style.display="block";
        b_img1.style.display="none";
    }else{
        play.innerHTML="播放 +";
        b_img1.style.display="block";
        b_img2.style.display="none";
    }
}

//图片自动旋转
function rotate(){
    var deg=0;
     flag=1;
    timer=setInterval(function(){
        image.style.transform="rotate("+deg+"deg)";
        deg+=5;
        if(deg>360){
            deg=0;
        }
    },30);
}
//音乐暂停时图片停止旋转，清除定时器
function imagePause(){
    clearInterval(timer);
    flag=0;
}

//进度条
function jindutiao(){
    var lenth=playData[index].duration;
    timer1=setInterval(function(){
        cur=playData[index].currentTime;//获取当前的播放时间
        p_2.style.width=""+parseFloat(cur/lenth)*300+"px";
    },50);
}


disc.addEventListener("touchstart",function(event){
    start();
    judgee();
},false);
play.addEventListener("touchstart",function(event){
    start();
    judgee();
},false);
left.addEventListener("touchstart",function(event){
    
    reduce();
    
    s_name.innerHTML=singerData[index];
    m_name.innerHTML=musicData[index];
    
    play.innerHTML="暂停  -";
    b_img2.style.display="block";
    b_img1.style.display="none";
},false);
left.addEventListener("touchstart",function(event){
    
    add();
s_name.innerHTML=singerData[index];
m_name.innerHTML=musicData[index];

play.innerHTML="暂停  -";
b_img2.style.display="block";
b_img1.style.display="none";
},false);
}