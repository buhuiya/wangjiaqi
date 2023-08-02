import Main from "@/layout/Main.vue";

export default {
    path: "/videoStream",
    component: Main,
    redirect: "/videoStream/videoStreamList",
    name: "videoStreamManage",
    meta: {
        title: "视频流管理",
        icon: "video",
    },
    children: [
        {
            path: "/videoStream/videoStreamList",
            name: "videoStreamList",
            component: () => import("@/views/stream/VideoStreamManage.vue"),
            meta: {
                title: "视频流列表",
                icon: "list",
            },
        },
        
    ],
};
