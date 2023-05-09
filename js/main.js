console.log("ciao");


const { createApp } = Vue
createApp({
    data() {
        return{
            il: "😁Il",
            mio: "mio",
            primo: "primo",
            messaggio: "messaggio 😁",
            messaggio2: "green",
            beer: "🍻🍻🍻🍻🍻🍻🍻",
            link: "https://www.viaggio-in-germania.de/oktoberfest-monaco.html", 
            img: "https://static.vecteezy.com/ti/foto-gratuito/p2/9322067-sexy-donna-russa-in-abito-bavarese-con-boccali-di-birra-foto.JPG",

        }
    },
    methods: {
        btn() {
            console.log(this.beer);
        },
        restituisceNomrCognome() {
            return ''
        }
 
    } 

}).mount('#app')

