/* 
Generare 10 email e stamparle a schermo utilizzando Vue, Axios e il seguente API endpoint boolean:
https://flynn.boolean.careers/exercises/api/random/mail

*/

var app = new Vue({
    el: '#app',
    data: {
        emails: [],
    },

    created(){
        //Declare .this
        const self = this;
        // Call datas for array emails
        for (let i = 0; i < 9; i++){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (response) {
               return self.emails.push(response.data.response)
            })
        }
        

    },

    methods: {
    }
})