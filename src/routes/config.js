/*
 * @Author: 前端劝退师-李逍遥
 * @Date: 2020-08-18 10:43:25
 * @LastEditors: 前端劝退师-李逍遥
 * @LastEditTime: 2020-08-18 14:46:21
 * @FilePath: \react-admin\src\routes\config.js
 */
export default {
    menus: [
        // 菜单相关路由
        { key: '/app/dashboard/index', title: '首页', icon: 'mobile', component: 'Dashboard' },
       
        {
            key: '/app/animation',
            title: '基础管理',
            icon: 'rocket',
            subs: [
                {
                    key: '/app/animation/basicAnimations',
                    title: '基础动画',
                    component: 'BasicAnimations',
                    //auth: 'auth/testPage',//权限
                    //query: '?param1=1&param2=2',       //形式传参
                },
                
            ],
        },
    ],
    others: [], // 非菜单相关路由
};
