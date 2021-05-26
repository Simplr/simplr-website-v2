const routes = [
    {
        path: '/',
        component: 'simplr-frontpage',
        import: () => import('./simplr-frontpage.js'),
    },
    {
        path: '/development',
        component: 'simplr-development-page',
        import: () => import('./development-page.js'),
    },
    {
        path: '/consulting',
        component: 'simplr-consulting-page',
        import: () => import('./consulting-page.js'),
    },
    {
        path: '/contact',
        component: 'simplr-contact-page',
        import: () => import('./contact-page.js'),
    },
];
export default routes;
