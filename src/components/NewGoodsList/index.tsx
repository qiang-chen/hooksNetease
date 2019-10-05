import React from 'react';
import ImgLazyLoad from 'components/ImgLazyLoad/index';
import './index.scss';
interface InewGoodsList {
    newGoodsList: any[];
}

export default (props: InewGoodsList) => {
    return (
        <div className='newGoodsList'>
            <div className='newGoodsList-title'>新品首发</div>
            <div className='newGoodsList-content'>
                {props.newGoodsList.map(item => {
                    return (
                        <div className='item' key={item.id}>
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
            </div>
        </div>
    );
};
