import React from 'react';
import RouteView from 'router/RoutevView';
import Foot from 'components/Foot/index';
function Main(props: any) {
    return (
        <div className='mainPage'>
            <div className='main'>
                <RouteView children={props.children}></RouteView>
            </div>
            <div className='foot'>
                <Foot></Foot>
            </div>
        </div>
    );
}

export default Main;
