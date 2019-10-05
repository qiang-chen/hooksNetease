import React from 'react';
import ImgLazyLoad from 'components/ImgLazyLoad/index';
import { Carousel, WingBlank } from 'antd-mobile';
import './index.scss';
interface ItopicList {
    topicList: any[];
}

export default (props: ItopicList) => {
    return (
        <div className='topicList'>
            <div className='topicList-title'>专题精选</div>
            <div className='topicList-banner'>
                <WingBlank>
                    <Carousel
                        className='space-carousel'
                        frameOverflow='visible'
                        cellSpacing={10}
                        slideWidth={0.8}
                        autoplay={true}
                        infinite={true}
                        dots={false}
                    >
                        {props.topicList.map(item => {
                            console.log(item);
                            return (
                                <div className='item' key={item.id}>
                                    <ImgLazyLoad
                                        offSetTop={0}
                                        realUrl={item['item_pic_url']}
                                    ></ImgLazyLoad>
                                    <div className='item-bottom'>
                                        <span>{item.title}</span>
                                        <span>{item.subtitle}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </Carousel>
                </WingBlank>
            </div>
        </div>
    );
};
