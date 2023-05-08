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
            img: "https://www.alamy.it/foto-immagine-folla-in-ippodromo-birra-tenda-sulla-theresienwiese-oktoberfest-fiera-di-monaco-di-baviera-germania-95476326.html?imageid=CBD0F878-0711-4CDF-A0FE-00A1E0A65180&p=95769&pn=1&searchId=f5fef3193c96e5f687cf13611c3530f4&searchtype=0",
           

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

