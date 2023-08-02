import Main from "@/layout/Main.vue";
import Weixin from "@/views/security/myWeixin.vue";
import Zhifubao from "@/views/security/myZhifubao.vue";
import Lunyiman from "@/views/security/myLunyiman.vue";
import Lunyiloc from "@/views/security/myLunyiloc.vue";
import Lunyiba from "@/views/security/myLunyiba.vue";
import Lunord from "@/views/security/myLunord.vue";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);


export default {
    path: "/security",
    component: Main,
    // redirect: "/security/weixin",
    name: "security",
    meta: {
        title: "权限管理",
        icon: "security",
    },
    children: [
        {
            path: "/security/user",
            // redirect: "/security",
            name: "securityUser",
            component: Main,
            meta: {
                title: "用户管理",
                icon: "security",
            },
            children: [
                {
                    path: "/security/user/weixin",
                    name: "weixin",
                    component: () =>import('@/views/security/myWeixin.vue'),
                    meta: {
                        title: "微信",
                        icon: "menu",
                    },
                },
                {
                    path: "/security/user/zhifubao",
                    name: "zhifubao ",
                    component: () =>import('@/views/security/myZhifubao.vue'),
                    meta: {
                        title: "支付宝",
                        icon: "swagger",
                    },
                },
            ],
        },
        {
            path: "/security/hardWare",
            component: Main,
            name: "securityHardware",
            meta: {
                title: "硬件管理",
                icon: "security",
            },
            children: [
                {
                    path: "/security/hardWare/lunman",
                    component: Main,
                    name: "securityHardwarelunman",
                    meta: {
                        title: "轮椅管理",
                        icon: "security",
                    },
                    children: [
                        {
                            path: "/security/lunyiman",
                            name: "menus",
                            component: Lunyiman,
                            meta: {
                                title: "轮椅设备管理",
                                icon: "menu",
                            },
                        },
                        {
                            path: "/security/lunyiba",
                            name: "swagger ",
                            component: Lunyiba,
                            meta: {
                                title: "轮椅批次",
                                icon: "swagger",
                            },
                        },
                        {
                            path: "/security/lunyiloc",
                            name: "roles ",
                            component: Lunyiloc,
                            meta: {
                                title: "轮椅锁道管理",
                                icon: "role",
                            },
                        },
                        
                    ]
                }
            ],
        },
        {
            path: "/security/order",
            component: Main,
            name: "securityOrder",
            meta: {
                title: "订单管理",
                icon: "security",
            },
            children: [
                {
                    path: "/security/order/orderone",
                    component: Main,
                    name: "securityOrderone",
                    meta: {
                        title: "轮椅订单",
                        icon: "security",
                    },
                    children: [
                        {
                            path: "/security/lunord",
                            name: "menus",
                            component: Main&&Lunord,
                            meta: {
                                title: "轮椅订单",
                                icon: "menu",
                            },
                        },
                    ]
                }
            ],
        }
    ],
};


