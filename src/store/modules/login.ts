import { observable, action } from 'mobx';

class LoginMob {
    //定义一个具有可观察性的状态
    @observable username: string = 'chenqiang';
    //action动作改变值
    @action setUserName(username: string) {
        this.username = username;
    }
}

export default new LoginMob();
