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
})




