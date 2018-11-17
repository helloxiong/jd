window.addEventListener('load',function(){
    var swiper = new Swiper('.category-left .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
    });
    //初始化右侧分类swiper内容滚动
    var swiper = new Swiper('.category-right .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        mousewheel: true,
    });

    // 获取所有li标签
    var liList=document.querySelectorAll('.category-left ul li');
    for(var i=0;i<liList.length;i++){
        liList[i].index=i;
        liList[i].addEventListener('click',function(){
            // 获取li的索引
            var index=this.index;
            // 获取点击的li的高度
            var liHeight = this.offsetHeight;
            // 计算要移动的距离
            var translateY = -index*liHeight;
            // 8. 计算最小位移的值  父元素category-left的高度  - 子元素ul的高度
            var minTranslateY = document.querySelector('.category-left').offsetHeight - this.parentNode.offsetHeight;
            if(translateY < minTranslateY){
                translateY = minTranslateY;
            }
            document.querySelector('.swiper-wrapper').style.transform='translate3d(0px, '+translateY+'px, 0px)';
            document.querySelector('.swiper-wrapper').style.transition='all 0.3s '
            
              // 12. 把所有li的active删掉
            for (var i = 0; i < liList.length; i++) {
                liList[i].classList.remove('active');
            }
            // 13. 给当前点击li添加
            this.classList.add('active');
            
        })
    }
})