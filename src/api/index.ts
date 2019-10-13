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
    /**
     *点击导航跳到category页 根据id获取数据
     */
    public getCategorys = (id: string): Promise<any> =>
        request.get('/goods/category', {
            params: {
                id
            }
        });
}

export default new Https();
