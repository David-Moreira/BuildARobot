import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../builder/RobotBuilder.vue';
import PartInfo from '../parts/Partinfo.vue';
import Checkout from '../cart/checkout.vue';
import Cart from '../cart/cart.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotBases from '../parts/RobotBases.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';


Vue.use(Router);

export default new Router({
    name: "Router",
    mode: "history",
    routes: [
        {path: '*', name: 'Default', component: HomePage},
            {path: '/', name: 'Home', component: HomePage},
            {path: '/builder', name: 'Builder', component: RobotBuilder},
            {path: '/checkout', name: 'Checkout', component: Checkout},
            {path: '/cart', name: 'Cart', component: Cart},
            {path: '/parts/browse', name: 'BrowseParts', component: BrowseParts, 
        children: [
            {path: 'heads', name: 'BrowseHeads', component: RobotHeads},
            {path: 'arms', name: 'BrowseArms', component: RobotArms},
            {path: 'torsos', name: 'BrowseTorsos', component: RobotTorsos},
            {path: 'bases', name: 'BrowseBases', component: RobotBases}

        ]},
            {path: '/parts/:partType/:id', name: 'PartInfo', component: PartInfo, beforeEnter(to,from,next){
                const isValidId = Number.isInteger(Number(to.params.id));
                if (!isValidId)
                    alert("Invalid ID!");
                next(isValidId);


            }}



    ]    

});