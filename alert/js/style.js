//定义带参函数
function alert(param){
    var title = param.title,
		content = param.content,
		yesText = param.yesText || '确定',
		noText = param.noText || '取消';
    

	//定义DOM结构
	var html = '<div class="screen"></div><div class="alert"><div class="alert-title">'+ title +'</div><div class="alert-content">'+ content +'</div>'+
		'<div class="alert-btn"><div class="alert-btn-confirm">'+ yesText +'</div><div class="alert-btn-cancel">'+ noText +'</div></div></div>';

	//添加DOM结构
	$('body').append(html);

	//绑定事件
	$('.alert-btn-confirm,.alert-btn-cancel').click(function(){
	    $('.alert').remove();
		$('.screen').remove();
	});
}