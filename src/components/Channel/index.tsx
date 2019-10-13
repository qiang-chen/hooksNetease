/*
 * @Author: chenqiang
 * @Date: 2019-10-04 18:37:19
 * @Last Modified by: chenqiang
 * @Last Modified time: 2019-10-09 20:36:38
 * nav导航条的封装
 */
import React from 'react';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import ImgLazyLoad from 'components/ImgLazyLoad/index';
import './index.scss';

interface Iprops extends RouteComponentProps {
    channel: any[];
}
function Channel(props: Iprops) {
    function navItem(item: any) {
        props.history.push('/main/categorys/' + item.id);
    }
    return (
        <div className='nav'>
            {props.channel.map(item => {
                return (
                    <div
                        className='item'
                        key={item.id}
                        onClick={navItem.bind(this, item)}
                    >
                        <NavLink to='/main/home'>
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

//妈的巨坑  纯函数不支持装饰器语法 害得我hookmobx不能一起使用 bingo

export default withRouter(Channel);
