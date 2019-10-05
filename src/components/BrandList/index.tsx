/*
 * @Author: chenqiang
 * @Date: 2019-10-04 19:28:03
 * @Last Modified by: chenqiang
 * @Last Modified time: 2019-10-04 19:32:17
 * 列表页组件的封装
 */
import React from 'react';
import ImgLazyLoad from 'components/ImgLazyLoad/index';
import './index.scss';
interface IBprops {
    brandList: any[];
}

function BrandList(props: IBprops) {
    return (
        <div className='brandList'>
            <div className='brandList-title'>品牌制造商直供</div>
            <div className='brandList-content'>
                {props.brandList.map(item => {
                    return (
                        <div className='item' key={item.id}>
                            <div className='absolt'>
                                <span>{item.name}</span>
                                <span>{item.floor_price}元起</span>
                            </div>
                            <ImgLazyLoad
                                offSetTop={65}
                                realUrl={item['pic_url']}
                            ></ImgLazyLoad>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default BrandList;
