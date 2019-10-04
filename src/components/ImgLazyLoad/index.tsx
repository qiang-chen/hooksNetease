/*
 * @Author: chenqiang
 * @Date: 2019-10-04 14:51:29
 * @Last Modified by: chenqiang
 * @Last Modified time: 2019-10-04 20:08:47
 * 此组件的作用是封装一个图片懒加载的效果，当图片低于底部多少的时候变成真实图片
 */
import React, { useState, useEffect, useRef, useContext } from 'react';
import './index.scss';
import { Context } from 'components/Context/index';
function ImgLazyLoad(props: any) {
    const [isLoad, setIsLoad] = useState(false); //控制是显示懒加载图片还是显示真实的图片
    const [isLoading, setIsLoading] = useState(false); //控制是不是需要监听页面滚动事件，以及什么时候销毁
    const imgLazyLoad = useRef(null);
    const a: any = useContext(Context);

    //模拟componentDidMount作用用来监听页面的滚动
    useEffect(() => {
        //handler(); //初始状态触发一下这个函数 页面滚动的在触发这个函数
        console.log(a);
        a.addEventListener('scoll', handler, true);

        //在组件卸载的时候也要销毁这个滚动监听事件
        return () => {
            console.log('组件销毁触发删除滚动事件的监听');
            //window.removeEventListener('scroll', handler);
        };
    }, []);
    function handler() {
        console.log('滚动事件');
        //用来加载是不是需要显示真实图片或者懒加载图片
        if (!isLoading) {
            const { offSetTop, realUrl } = props;
            //offSetTop距离顶部有多少距离的
            const visibleBottom =
                window.scrollY +
                document.documentElement.clientHeight -
                offSetTop;
            let a: any = imgLazyLoad.current;
            let imgTop = a.offsetTop; //图片容器距离顶部的距离
            console.log(imgTop, visibleBottom);
            if (imgTop < visibleBottom) {
                //如果小于了 证明此时不需要懒加载的图片了
                let imgObj = new Image();
                imgObj.src = realUrl;
                setIsLoading(true);
                new Promise((resolve, reject) => {
                    //监听图片加载事件
                    imgObj.onload = function() {
                        resolve(imgObj);
                    };
                }).then(imgObj => {
                    setIsLoad(true);
                });
            }
        } else {
            //销毁监听事件避免内存溢出
            window.removeEventListener('scroll', handler);
        }
    }
    const { realUrl, initUrl } = props;
    const imgSrc = isLoad ? realUrl : initUrl;
    return (
        <img
            ref={imgLazyLoad}
            className={isLoad ? 'imgLazyload loadEnd' : 'imgLazyload loading'}
            src={imgSrc}
            alt='imgLazyLoad'
        />
    );
}
ImgLazyLoad.defaultProps = {
    offSetTop: 40,
    initUrl:
        'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg'
};
export default ImgLazyLoad;
