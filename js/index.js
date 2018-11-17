// 导航栏区域
window.addEventListener('load',function(){
    //获取轮播图高度
var slideHeight=document.getElementById('slide').offsetHeight;
// 获取顶部元素
var header=document.querySelector('#header');
//给页面添加一个滚动事件
window.addEventListener('scroll',setOpacity);
setOpacity();
function setOpacity(){
    var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
    // 计算透明度值
    var opacity=scrollTop / slideHeight;
    //判断
    if(opacity <=1){
        header.style.backgroundColor='rgba(222,24,27,'+opacity+')';

    }else{
        header.style.backgroundColor='rgba(222,24,27,1)';
    }
}
} )
// 轮播图
var mySwiper = new Swiper('.swiper-container',{
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项 会自动在轮播图所有图片容器的最前面和最后面多放一张  第一张就是最后一张 最后一张就是第一张
    //初始化自动轮播图 参数也是一个对象 
    autoplay: {
        delay: 3000, //间隔时间 
        stopOnLastSlide: false, //在最后一张是否要停止  如果开启loop模式无效
        disableOnInteraction: false, // 是否要当(交互的时候)滑动的时候禁用自动轮播图
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    //轮播图按钮........................
   
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
})




// 秒杀
//设置未来时间
var futureTime= new Date(2018,10,16,00,00,00).getTime();
console.log(futureTime);
// 获取当前时间
var nowTime= new Date().getTime();
console.log(nowTime);
//计算当前时间距离未来时间还有多少秒
var time=Math.floor((futureTime-nowTime) /1000)
//获取页面显示时分秒的所有span元素
var spans = document.querySelectorAll('.seckill-time span')
// 设置定时器
setInterval(function(){
time--;
// 获取当前时间的小时数
var hour = Math.floor(time / 3600);
// console.log(hour);

// 求分钟
var minute = Math.floor(time / 60 % 60);
// console.log(minute);
//求秒数
var second = time % 60;
// console.log(second);
spans[0].innerHTML = Math.floor(hour / 10);
spans[1].innerHTML = Math.floor(hour % 10);
spans[3].innerHTML = Math.floor(minute / 10);
spans[4].innerHTML = Math.floor(minute % 10);
spans[6].innerHTML = Math.floor(second / 10);
spans[7].innerHTML = Math.floor(second % 10);

},1000)




