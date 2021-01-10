const axiosPages = () => {
    const axios = require('axios');
    axios.get('/pagesData.json')
        .then(function(response) {
            console.log("1");
            console.log(response.data);
            // name.innerHTML = JSON.stringify(response.data);
            console.log("2");
            if (response.data.status === 200) {
                // name.prepend("it is 200")
                console.log(response.data.status);
            }
            // name.prepend(response.data.status)
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {
            // always executed
            console.log("end");
        });
};
module.exports = axiosPages;