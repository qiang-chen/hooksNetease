/*
 * @Author: chenqiang
 * @Date: 2019-10-04 19:28:03
 * @Last Modified by: chenqiang
 * @Last Modified time: 2019-10-04 19:32:17
 * 列表页组件的封装
 */
import React from 'react';
import ImgLazyLoad from 'components/ImgLazyLoad/index';
interface IBprops {
    brandList: any[];
}

function BrandList(props: IBprops) {
    return (
        <div className='brandList'>
            {props.brandList.map(item => {
                console.log(item);
                return (
                    <div className='item' key={item.id}>
                        <ImgLazyLoad
                            offSetTop={65}
                            realUrl={item['pic_url']}
                        ></ImgLazyLoad>
                    </div>
                );
            })}
        </div>
    );
}

export default BrandList;
