 var axiosPages = require('./axiosPages');
 var coverEff = require('./coverEff');
 axiosPages();
 coverEff();
 import './all.sass'; // use ESM method import
 //  const SASS_STYLE = require('./all.sass')

 function putText() {
     console.log("okq")
         // name.innerHTML = "hello world";
 }


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




 function displayData() {
     name.appendChild(response);
 }

 let name = document.querySelector(".name");
 console.log("ok1")


 putText();