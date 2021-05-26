import SimplrRouter from '@simplr-wc/router';
import routes from './routes.js';

import "./components/top-bar";
import "./components/footer";
import root from './utils/rootpath.js';

const routerOptions = {
    routes: routes,
    rootPath: root()
};

const router = new SimplrRouter(routerOptions);
router.init();
