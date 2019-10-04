import React, { Suspense } from 'react';
import 'assets/css/App.css';
import RouteConfig from './router/RouteConfig';
import RouteView from './router/RoutevView';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import store from './store/index';
function App() {
    return (
        <BrowserRouter>
            <Provider {...store}>
                <Suspense fallback={<div>load...</div>}>
                    <RouteView children={RouteConfig}></RouteView>
                </Suspense>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
