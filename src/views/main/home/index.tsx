/*
 * @Author: chenqiang
 * @Date: 2019-10-03 14:38:09
 * @Last Modified by: chenqiang
 * @Last Modified time: 2019-10-04 20:11:44
 * hoom主页的开发
 */
import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'antd-mobile';
import api from 'api/index';
import './index.scss';
//图片懒加载
import ImgLazyLoad from 'components/ImgLazyLoad/index';
//nav导航条
import Channel from 'components/Channel/index';

import BrandList from 'components/BrandList/index';
import { Context } from 'components/Context/index';
import BScroll from 'better-scroll';
function Home(props: any) {
    const [homeList, setHomeList] = useState({
        banner: [],
        categoryList: [],
        channel: [],
        hotGoodsList: [],
        newGoodsList: [],
        topicList: [],
        imgHeight: [],
        brandList: []
    });
    const HomeDom = useRef(null);
    const a: any = HomeDom['current'];
    useEffect(() => {
        api.getHomeList().then(res => {
            console.log(res.data);
            setHomeList(res.data);
            console.log(HomeDom.current, 'hoo');
        });
    }, []);
    return (
        <div className='home' ref={HomeDom}>
            <Context.Provider value={a}>
                <Carousel
                    autoplay={true}
                    infinite={true}
                    autoplayInterval={2000}
                >
                    {homeList.banner.map(item => {
                        return (
                            <div className='bannerImg' key={item['id']}>
                                <ImgLazyLoad
                                    offSetTop={0}
                                    realUrl={item['image_url']}
                                ></ImgLazyLoad>
                            </div>
                        );
                    })}
                </Carousel>
                <Channel channel={homeList.channel}></Channel>
                <div className='xian'></div>
                <BrandList brandList={homeList.brandList}></BrandList>
            </Context.Provider>
        </div>
    );
}

export default React.memo(Home);
