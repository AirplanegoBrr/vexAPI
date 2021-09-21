const fetch = require('node-fetch');
Btoken = ""
module.exports = {
    init: function(token) {
        Btoken = token;
    },

    fetch: async function (url) {
        if (Btoken == "") {
            throw "No token! Did you init?"
        }
        const response = await fetch(url, {
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: {
                "Authorization": "Bearer "+Btoken
            }
        }).catch(error => {
            throw error;
        });
        const json = await response.json();
        return json;
    }
}