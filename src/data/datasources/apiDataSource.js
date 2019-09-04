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
