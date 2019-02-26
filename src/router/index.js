import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../builder/RobotBuilder.vue';
import PartInfo from '../parts/Partinfo.vue';

Vue.use(Router);

export default new Router({
    name: "Router",
    mode: "history",
    routes: [
        {path: '*', name: 'Default', component: HomePage},
            {path: '/', name: 'Home', component: HomePage},
            {path: '/builder', name: 'Builder', component: RobotBuilder},
            {path: '/parts/:partType/:id', name: 'PartInfo', component: PartInfo, beforeEnter(to,from,next){
                const isValidId = Number.isInteger(Number(to.params.id));
                if (!isValidId)
                    alert("Invalid ID!");
                next(isValidId);


            }}



    ]    

});