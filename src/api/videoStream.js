import request from "@/utils/request";

/**
 * 获取所有数据流信息
 * @returns {*} 所有数据流信息
 */
export const getAllStreams = () => {
    return request({
        url: "/admin/getAllVideoStreams",
        method: "GET",
    });
};
/**
 * 根据ID获取数据流
 * @param id 数据流ID
 * @returns {*} 数据流信息
 */
export const getVideoStreamById = (id) => {
    return request({
        url: "/admin/getVideoStreamById",
        method: "POST",
        id,
    });
};
