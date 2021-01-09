        // AXIOS 

        // axios.<method> will now provide autocomplete and parameter typings
        // const axios = require('axios').default;
        function putText() {
            console.log("okq")
                // name.innerHTML = "hello world";
        }
        const axios = require('axios');

        // // get users
        // const getUsers = () => {
        //     axios.get('https://reqres.in/api/users')
        //         .then(response => {
        //             const users = response.data.data;
        //             console.log(`GET users`, users);
        //         })
        //         .catch(error => console.error(error));
        // };
        // getUsers();


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

        function displayData() {
            name.appendChild(response);
        }

        let name = document.querySelector(".name");
        console.log("ok1")


        putText();