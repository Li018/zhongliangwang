//1.导入模块的公用部分
!function($){
	$('.topcontent').load('header.html');
	//第一个参数：地址。
	//第二个参数：选择器。
	$('.footercontent').load('footer.html');
}(jQuery);