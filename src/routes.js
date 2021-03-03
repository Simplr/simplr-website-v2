const routes = [
    {
        path: '/',
        component: 'simplr-frontpage',
        import: () => import('./simplr-frontpage.js'),
    },
    {
        path: '/foo',
        component: 'simplr-frontpage',
        import: () => import('./simplr-frontpage.js'),
    },
];
export default routes;
