import request from 'utils/request';
class Https {
    /**
     * 登陆接口
     * parmas:{mobile:用户名,password:密码}
     */
    public postLogin = (parmas: object): Promise<any> =>
        request.post('/auth/loginByMobile', parmas);
    /**
     * 获取首页数据
     */
    public getHomeList = (): Promise<any> => request.get('/');
}

export default new Https();
