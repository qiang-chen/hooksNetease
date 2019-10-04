/*
 * @Author: chenqiang
 * @Date: 2019-10-04 18:37:19
 * @Last Modified by: chenqiang
 * @Last Modified time: 2019-10-04 19:27:56
 * nav导航条的封装
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import ImgLazyLoad from 'components/ImgLazyLoad/index';
import './index.scss';
interface Iprops {
    channel: any[];
}
function Channel(props: Iprops) {
    return (
        <div className='nav'>
            {props.channel.map(item => {
                return (
                    <div className='item' key={item.id}>
                        <NavLink to='/'>
                            <ImgLazyLoad
                                offsetTop={44}
                                realUrl={item.icon_url}
                            ></ImgLazyLoad>
                            <span>{item.name}</span>
                        </NavLink>
                    </div>
                );
            })}
        </div>
    );
}

export default Channel;
