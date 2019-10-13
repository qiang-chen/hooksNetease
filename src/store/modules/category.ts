import { observable, action } from 'mobx';
import api from 'api/index';
interface Cstate {
    brotherCategory?: any[];
    currentCategory?: any[];
    parentCategory?: any[];
}
let opj = {};
class Category {
    //定义一个具有可观察性的状态
    @observable categoryList: any = {};
    //action动作改变值
    @action async getCategoryList(id: string) {
        let result = await api.getCategorys(id);
        console.log(result.data, '对对对');
        //this.categoryList = result.data;
        console.log(this.categoryList, '仓库打印');
    }
}

export default Category;
