$(function(){
    $(".nav ul li").click(function (e) {	
        
        $('.nav ul li ').removeClass("active");	
        $(e.target).addClass('active');
        let index = $('.nav ul li').index(e.target);
        $('.content>div').eq(index).show().siblings().hide()

	})
	

	
})
