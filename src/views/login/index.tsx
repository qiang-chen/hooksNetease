/*
 * @Author: chenqiang
 * @Date: 2019-10-03 12:20:00
 * @Last Modified by: chenqiang
 * @Last Modified time: 2019-10-03 14:37:37
 * 登录模块的代码
 */
import React from 'react';
import './index.scss';
//引入受控组件的hook封装
import InputValue from 'components/InputValue/index';
//引入网络请求文件
import api from 'api/index';
import { Toast } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

/**
 * 点击登录按钮触发的函数
 */
interface Params {
    mobile: string;
    password: string;
}
async function postLogin(params: Params, history: any) {
    if (!params.mobile.trim() || !params.password.trim()) {
        Toast.fail('请输入完整的手机号或者密码', 2);
        return;
    }
    let data = await api.postLogin(params);
    if (data.errno === 0) {
        Toast.success('登陆成功', 1, () => {
            history.replace('/main/home');
        });
    } else if (data.errno === 1000) {
        Toast.fail(data.errmsg, 1);
    }
}

function LoginComponents(props: any) {
    const userText = InputValue('15323807318');
    const possText = InputValue('123456');
    let { history } = props;
    return (
        <div className='login'>
            <div className='loginTitle'>
                <img
                    src='http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png'
                    alt='logintitle'
                />
            </div>
            <div className='form'>
                <input className='user' {...userText} type='text' />
                <input className='possword' {...possText} type='password' />
            </div>
            <div className='btn'>
                <span
                    onClick={postLogin.bind(
                        this,
                        {
                            mobile: userText.value,
                            password: possText.value
                        },
                        history
                    )}
                >
                    登录
                </span>
            </div>
        </div>
    );
}

withRouter(LoginComponents);

export default LoginComponents;
