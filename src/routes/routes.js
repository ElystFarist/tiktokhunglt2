import Home from '../page/Home';
import Following from '../page/Following';

//public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
];
//private routes
const privateRoutes = [];
export { publicRoutes, privateRoutes };
