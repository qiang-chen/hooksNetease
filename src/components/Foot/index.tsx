/*
 * @Author: chenqiang
 * @Date: 2019-10-04 19:37:01
 * @Last Modified by: chenqiang
 * @Last Modified time: 2019-10-04 20:00:42
 * 底部组件的封装
 */
import React, { useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import 'assets/font/iconfont.css';
import './index.scss';
export default (props: any) => {
    const [footer, setFooter] = useState([
        {
            title: '首页',
            path: '/main/home',
            name: 'iconfont icon-home'
        },
        {
            title: '专题',
            path: '/main/topic',
            name: 'iconfont icon-zhuanti'
        },
        {
            title: '分类',
            path: '/main/catelog',
            name: 'iconfont icon-classify'
        },
        {
            title: '购物车',
            path: '/main/cart',
            name: 'iconfont icon-gouwuche'
        },
        {
            title: '我的',
            path: '/main/mine',
            name: 'iconfont icon-mine'
        }
    ]);
    return (
        <div className='footer'>
            {footer.map((item, index) => {
                return (
                    <Fragment key={index}>
                        <NavLink to={item.path} className='foot-item'>
                            <i className={item.name}></i>
                            <span>{item.title}</span>
                        </NavLink>
                    </Fragment>
                );
            })}
        </div>
    );
};
