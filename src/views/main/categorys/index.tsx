/*
 * @Author: chenqiang
 * @Date: 2019-10-09 19:55:53
 * @Last Modified by: chenqiang
 * @Last Modified time: 2019-10-09 20:40:15
 * 此页面是点击nav导航条跳入的页面
 */
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
interface Cprops extends RouteComponentProps {
    category: any;
    categoryList: any;
}
@inject('category')
@observer
class Categorys extends Component<Cprops> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        let { id } = this.props.match.params as any;
        this.props.category.getCategoryList(id);
    }
    render() {
        console.log(this.props.categoryList);
        return <div>this</div>;
    }
}

export default Categorys;
