import axios from "axios";

// const token = global.token[0]
// const valueLang = await AsyncStorage.getItem("language");

const BASE_URL = "https://dummyjson.com"
const apiAxios = axios.create({
    baseURL: BASE_URL, //dev
    headers: {
        common: {
            Accept: "application/json",
            // 'Content-Language': valueLang
        },
        // Authorization: `Bearer ${token}`
    },
});

export function apiCallPost(controller, req) {

    return apiAxios
        .post(controller, req)
        .then(({ data }) => {
            return new Promise((resolve, reject) => {
                resolve(data);
            });
        })
        .catch((err) => {
            if (err.response) {
                return new Promise((resolve, reject) => {
                    reject(err.response.data);
                });
            } else {
                return new Promise((resolve, reject) => {
                    reject({ message: err.message });
                });
            }
        });
}

export function apiCallPatch(controller, req) {
    console.log("rrrrrrrr", req);
    return apiAxios
        .patch(controller, req)
        .then(({ data }) => {
            return new Promise((resolve, reject) => {
                resolve(data);
            });
        })
        .catch((err) => {
            if (err.response) {
                return new Promise((resolve, reject) => {
                    reject(err.response.data);
                });
            } else {
                return new Promise((resolve, reject) => {
                    reject({ message: err.message });
                });
            }
        });
}

export function apiCallGet(controller) {
    return apiAxios
        .get(controller)
        .then(({ data }) => {
            return new Promise((resolve, reject) => {
                resolve(data);
            });
        })
        .catch((err) => {
            if (err.response) {
                return new Promise((resolve, reject) => {
                    reject(err.response.data);
                });
            } else {
                return new Promise((resolve, reject) => {
                    reject({ message: err.message });
                });
            }
        });
}

export function apiCallDelete(controller, req) {
    return apiAxios
        .delete(controller, req)
        .then(({ data }) => {
            return new Promise((resolve, reject) => {
                resolve(data);
            });
        })
        .catch((err) => {
            if (err.response) {
                return new Promise((resolve, reject) => {
                    reject(err.response.data);
                });
            } else {
                return new Promise((resolve, reject) => {
                    reject({ message: err.message });
                });
            }
        });
}

