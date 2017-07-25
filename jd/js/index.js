/**
 * Created by 天空之镜 on 2017-07-13.
 */
$(function () {
    //最顶部图片，鼠标点击关闭图标时，顶部图片隐藏
    $('.close').on("click",function () {
        $(".top_nav").hide()
    })
    //nav导航条右侧鼠标移入，图片显示
    $('.code').on('mouseover',function () {
        $('.nav_container_logo_right2').removeClass('logo1')
    })
    $('.code').on('mouseout',function () {
        $('.nav_container_logo_right2').addClass('logo1')
    })
    //轮播图
    $('.carousel').carousel()
    //left_slider_img鼠标移入图片从左往右加载
    $(".left_slider").on('mouseover',function () {
        $(".left_slider_img").animate({
            width:'1000px'
        },1000)
    })
    //left_slider_img鼠标移出图片从右往左收缩
    $(".left_slider").on('mouseout',function () {
        $(".left_slider_img").animate({
            width:'0px'
        },1000)
    })
    //fs_container_right_tab选项卡内容的切换
         var spans=document.getElementsByClassName("fs_container_right_tab_p")[0].getElementsByTagName("span");
        // console.log(spans)
    var contents=document.getElementsByClassName('fs_container_right_tab_content');
    // console.log(contents)
    for(let i=0;i<spans.length;i++){
        spans[i].onmouseover=function () {
            for(var j=0;j<spans.length;j++){
                contents[j].classList.remove('content_now')
            }
            contents[i].className+=" "+"content_now"
        }
    }
    //鼠标移入红色线的动画效果
    $(".notice_one").mouseover(function () {
        $(".red_row").animate({
            left:"20px"
        },500)
    })
    $(".notice_two").mouseover(function () {
        $(".red_row").animate({
            left:"65px"
        },500)
    })
    //seckill鼠标移入ul左右箭头显示出来
    $('.seckill_content_box').on('mouseover',function () {
        $('.seckill_next').show()
        $('.seckill_pre').show()
    })
    //seckill鼠标移出ul左右箭头隐藏
    $('.seckill_content_box').on('mouseout',function () {
        $('.seckill_next').hide()
        $('.seckill_pre').hide()
    })
    //seckill鼠标移入图片
    $('.seckill_content_box_left_wrapper_content img').on('mouseover',function () {
        $(this).animate({
            top:"-5px"
        },500)
    })
    //seckill鼠标移出图片
    $('.seckill_content_box_left_wrapper_content img').on('mouseout',function () {
        $(this).animate({
            top:"5px"
        },500)
    })
    //seckill点击next
    $('.seckill_next').on('click',function () {
        $('.seckill_content_box_left_wrapper_content ul').animate({
            left:"-1000px"
        },1000)
    })
    //seckill点击pre
    $('.seckill_pre').on('click',function () {
        $('.seckill_content_box_left_wrapper_content ul').animate({
            left:"0px"
        },1000)
    })

    //fbtz_content_detail_content_p选项卡内容的切换
    var redRow=document.getElementsByClassName("red_row")[0];
    var as=document.getElementsByClassName("fbtz_content_detail_content_p")[0].getElementsByTagName("a");
    // console.log(as)
    var acontents=document.getElementsByClassName('fbtz_content_detail_content_p_tab');
    // console.log(acontents)
    for(let i=0;i<as.length;i++){
        as[i].onmouseover=function () {
            for(let j=0;j<as.length;j++){
                acontents[j].classList.remove('active')
            }
            acontents[i].className+=" "+"active"
        }
    }
// fbtz_content_detail_content下的img鼠标移入图片左右移动
    $(".fbtz_content_detail_content ul li a img").mouseover(function () {
        $(this).animate({
            left:"-10px"
        },500)
    })
    $(".fbtz_content_detail_content ul li a img").mouseout(function () {
        $(this).animate({
            left:"0px"
        },500)
    })
    //coupon鼠标移入图片左右移动
    $(".coupon_content>div>img").mouseover(function () {
        $(this).animate({
            left:"-10px"
        },500)
    })
    $(".coupon_content>div>img").mouseout(function () {
        $(this).animate({
            left:"0px"
        },500)
    })
    //J_f_lift鼠标移入图片左右移动
     $(".J_f_lift_img>img").mouseover(function () {
        $(this).animate({
            left:"-10px"
        },500)
    })
    $(".J_f_lift_img>img").mouseout(function () {
        $(this).animate({
            left:"0px"
        },500)
    })
    $(".J_f_lift_right_img>img").mouseover(function () {
        $(this).animate({
            left:"-10px"
        },500)
    })
    $(".J_f_lift_right_img>img").mouseout(function () {
        $(this).animate({
            left:"0px"
        },500)
    })
    //
    $(".pt_more>a").mouseover(function () {
        $(this).find("img").animate({
            left:"-10px"
        },500)
    })
    $(".pt_more>a").mouseout(function () {
        $(this).find("img").animate({
            left:"0px"
        },500)
    })
    //
    $(".J_chn_col_ul li img").mouseover(function () {
        $(this).animate({
            right:"0px"
        },500)
    })
    $(".J_chn_col_ul li img").mouseout(function () {
        $(this).animate({
            right:"10px"
        },500)
    })
    $('.pt_ft').mouseover(function () {
        $(this).find(".pt_ft_content_left,.pt_ft_content_right").show()
    })
    $('.pt_ft').mouseout(function () {
        $(this).find(".pt_ft_content_left,.pt_ft_content_right").hide()
    })
    $(".pt_ft_content_left").on("click",(function () {
        $(this).parent().find(".pt_ft_content").animate({
            left:"-570px"
        },1000)
    }))
    $(".pt_ft_content_right").on("click",(function () {
        $(this).parent().find(".pt_ft_content").animate({
            left:"0px"
        },1000)
    }))

    //
    // $(".menu_right ul>li").mouseover(function () {
    //     $(this).find("span").animate({
    //         width:"60px"
    //     },1000)
    // })
    // $(".menu_right ul>li>p").mouseout(function () {
    //     $(this).children("span").animate({
    //         width:"0px"
    //     },1000)
    // })
    $(".to_top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        },1000)
    })
})





