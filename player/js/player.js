
    //播放暂停
	var onOff = true;
	var timer;
	var totalTime;
	$('.play')[0].onclick = function(){
		if(onOff){
            $('#audio').play();
			onOff = false;
			timer = setInterval(progressTime,1000);
			totalTime = $('#audio').duration;
		}else{
            $('#audio').pause();
			onOff = true;
			clearInterval(timer);
		}
        
	}

	//歌词导入  初始化
	str = "";
	function init(){
		var songName = songData[0].songName;
		var singer = "歌手：" + songData[0].singer;
		$('.s-name')[0].innerHTML = songName;
		$('.s-singer')[0].innerHTML = singer;
		//console.log(songName);
        var g = songData[0].songLyrics.split('[');
		g.forEach(function(current){
		    var h = current.split(']');
			var lyrics = h[1];
			var l = h[0].split('.');
			var q = l[0].split(':');
			var lyricsTime = q[0]*60 + parseInt(q[1]);
			//console.log(h[1]);
            if(lyrics){
				str += '<p id="s'+lyricsTime+'">' + lyrics + '</p>'    //将歌词放到<p>中，并歌词同步
			}
			$('.s-lyrics')[0].innerHTML = str;
			
		});

	}
	init();//引用函数，保存变量

     
	//歌曲进度条
   function progressTime(){
       var n = $('#audio').currentTime / $('#audio').duration;
       $('.icon-playhead')[0].style.marginLeft = ~~(n * $('.drag-playhead')[0].offsetWidth) + 'px';
	   $('.progress-move')[0].style.width = n * $('.drag-playhead')[0].offsetWidth + 'px';

	   //console.log(n);
   }
   progressTime();

   //拖拽进度条
   $('.icon-playhead')[0].onmousedown = function(e){//鼠标按下事件
       document.onmousemove = function(e){//鼠标移动事件
           var x = e.clientX;        //鼠标的X坐标点
		   var a = x - $('.pro')[0].offsetLeft - $('.icon-playhead')[0].offsetParent.offsetLeft - $('.icon-playhead')[0].offsetWidth / 2;
		   $('.icon-playhead')[0].style.marginLeft = a + 'px';
		   $('.progress-move')[0].style.width = a + 'px';
		   var b = parseInt(getComputedStyle($('.icon-playhead')[0]).marginLeft) / $('.drag-playhead')[0].offsetWidth;
		   $('#audio').currentTime = b * $('#audio').duration;
		    
		   //console.log(t);

		   progressTime();//歌曲与拖拽进度同步
		   
	   }
	   //移除鼠标按下和移动事件
	   document.onmouseup = function(){
           this.onmousedown = null;
		   this.onmousemove = null;
	   }
   }

   //歌词同步
   var index = 0;
   $('#audio').addEventListener('timeupdate',function(){
	       //console.log(this.currentTime);
		   var cur = parseInt(this.currentTime);
		   if(document.getElementById('s' + cur)){
			   document.getElementById('s' + index).style.cssText = 'color: #999;';
			   index = cur;
			   document.getElementById('s' + cur).style.cssText = 'color: red;';
		   }
   },false);

   

    //封装获取元素的方法
    function $(selector){
        return selector.substring(0,1) == '.'?
		document.getElementsByClassName(selector.substring(1)):
		document.getElementById(selector.substring(1));
	}
