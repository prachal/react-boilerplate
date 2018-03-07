import axios from "axios";
import * as Cookie from "js-cookie";

axios.interceptors.request.use((config) => {    
    var header = Cookie.get("Authorization");
    if (header == undefined) {
        return config;
    }

    config.headers["Authorization"] = `Bearer ${header}`;
    return config;
}, (error) => {
    return Promise.reject(error);
});

export function get<T>(path: string): Promise<T> {
    var url = createUrl(path);
    return axios.get<T>(url).then((result) => {
        return result.data;
    });
}

export function post<T>(path: string, data: {}): Promise<T> {
    var url = createUrl(path);
    return axios.post<T>(url, data).then((data) => {
        return data.data;
    });
}

function createUrl(path: string): string {
    return `/api/${path}`;
}