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
                console.log("EL RESPONSE ES ", response);
                resolve(response.data.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};
