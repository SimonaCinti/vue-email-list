/* 
Generare 10 email e stamparle a schermo utilizzando Vue, Axios e il seguente API endpoint boolean:
https://flynn.boolean.careers/exercises/api/random/mail

*/

var app = new Vue({
    el: '#app',
    data: {
        email: [],
    },
    created(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
})