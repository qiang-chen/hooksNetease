import React from 'react';
const RouteConfig = [
    {
        path: '/main',
        component: React.lazy(() => import('views/main/index')),
        children: [
            {
                path: '/main/home',
                component: React.lazy(() => import('views/main/home/index'))
            },
            {
                path: '/main/categorys/:id',
                component: React.lazy(() =>
                    import('views/main/categorys/index')
                )
            }
        ]
    },
    {
        path: '/login',
        component: React.lazy(() => import('views/login/index'))
    },
    {
        path: '/',
        redirect: '/login'
    }
];

export default RouteConfig;
