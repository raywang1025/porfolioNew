 var axiosPages = require('./axiosPages');
 var coverEff = require('./coverEff');
 //  var moveLeft = require('./moveLeft');
 var hambergerMenu = require('./hambergerMenu');
 var $ = require("jquery");
 import 'jquery';
 axiosPages();
 coverEff();
 hambergerMenu();
 import './all.sass'; // use ESM method import
 import './works.sass';
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