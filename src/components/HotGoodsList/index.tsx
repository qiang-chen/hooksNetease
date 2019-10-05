import React from 'react';
import ImgLazyLoad from 'components/ImgLazyLoad/index';
import './index.scss';
interface IHotGoodsList {
    hotGoodsList: any[];
}

export default (props: IHotGoodsList) => {
    return (
        <div className='hotGoodsList'>
            <div className='hotGoodsList-title'>人气推荐</div>
            <div className='hotGoodsList-content'>
                {props.hotGoodsList.map(item => {
                    return (
                        <div className='item' key={item.id}>
                            <ImgLazyLoad
                                offSetTop={59}
                                realUrl={item['list_pic_url']}
                            ></ImgLazyLoad>
                            <div className='item-bottom'>
                                <span>{item.name}</span>
                                <span>{item.goods_brief}</span>
                                <span>￥{item.retail_price}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
