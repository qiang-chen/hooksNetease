import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
interface IProps {
    children: any;
}

const RouteView = (props: IProps) => {
    return (
        <Switch>
            {props.children.map((item: any, index: number) => {
                if (item.redirect) {
                    return (
                        <Redirect
                            key={index}
                            to={item.redirect}
                            from={item.path}
                        ></Redirect>
                    );
                } else {
                    return (
                        <Route
                            key={index}
                            path={item.path}
                            render={props => {
                                return (
                                    <item.component
                                        {...props}
                                        children={item.children}
                                    ></item.component>
                                );
                            }}
                        ></Route>
                    );
                }
            })}
        </Switch>
    );
};

export default RouteView;
