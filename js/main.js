/* 
Generare 10 email e stamparle a schermo utilizzando Vue, Axios e il seguente API endpoint boolean:
https://flynn.boolean.careers/exercises/api/random/mail

*/

var app = new Vue({
    el: '#app',
    data: {
        emails: [],
        cat: ''
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
        };
        //Call cats
        axios.get('https://aws.random.cat/meow')
            .then(function (response) {
                // handle success
                return self.cat = response.data.file
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },

    methods: {
        // Print again the list
        printAgain(){
            console.log('click');
            //Declare .this
            const self = this;
            self.emails = [];
            // Call datas for array emails
            for (let i = 0; i < 9; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function (response) {
                    return self.emails.push(response.data.response)
                })
            }
        }
    },

})