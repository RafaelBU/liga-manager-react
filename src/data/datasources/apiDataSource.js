const axios = require("axios");
axios.defaults.baseURL = "https://reqres.in/api/";

export const getDataDispatch = page => {
    return new Promise((resolve, reject) => {
        axios
            .get("users?page=" + page)
            .then(response => {
                resolve(response.data.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

export const updateDataDispatch = data => {
    return new Promise((resolve, reject) => {
        axios
            .patch("users/" + data.id, { data })
            .then(response => {
                resolve(response.data.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

export const deleteDataDispath = id => {
    return new Promise((resolve, reject) => {
        axios
            .delete("users/" + id)
            .then(() => {
                resolve(id)
            })
            .catch(error => {
                reject(error);
            });
    });
};

export const createDataDispatch = player => {
    return new Promise((resolve, reject) => {
        axios
            .post("users/", player)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error);
            });
    });
};
