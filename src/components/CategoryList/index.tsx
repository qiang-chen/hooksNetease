import React from 'react';
import ImgLazyLoad from 'components/ImgLazyLoad/index';
import './index.scss';

interface IgoodsList {
    goodsList: any[];
    name: string;
}

export default (props: IgoodsList) => {
    return (
        <div className='goodsList'>
            <div className='goodsList-title'>{props.name}</div>
            <div className='goodsList-content'>
                {props.goodsList.map(item => {
                    console.log(item);
                    return (
                        <div className='goodsList-item'>
                            <ImgLazyLoad
                                offSetTop={59}
                                realUrl={item['list_pic_url']}
                            ></ImgLazyLoad>
                            <div className='item-bottom'>
                                <span>{item.name}</span>
                                <span>￥{item.retail_price}</span>
                            </div>
                        </div>
                    );
                })}
                <div className='goodsList-item'>
                    <span>更多家居好物</span>
                </div>
            </div>
        </div>
    );
};
