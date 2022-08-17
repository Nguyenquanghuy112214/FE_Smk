import axios from "axios";


const request = axios.create({
    baseURL: "https://apisk.bkt.net.vn/",

})

export const getAll = async (path, option = {}) => {
    const respone = await request.get(path, option)
    return respone.data
}

export const post = async (path, option = {}) => {
    const respone = await request.post(path, option)
    return respone.data
}


export default request