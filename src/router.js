import SimplrRouter from '@simplr-wc/router';
import routes from './routes.js';

import "./components/top-bar";

const routerOptions = {
    routes: routes,
    rootPath: "/simplr-website-v2"
};

const router = new SimplrRouter(routerOptions);
router.init();
