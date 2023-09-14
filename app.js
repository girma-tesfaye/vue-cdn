const app = Vue.createApp({
    data () {
        return {
            count: 1,
            array:[
                {
                    id: 1,
                    name: "Girma.T",
                    tittle: "Sr. Full-stack developer",
                    experience: 5,
                    isSenior: true
                },{
                    id: 2,
                    name: "John Doe",
                    tittle: "CEO",
                    experience: 4,
                    isSenior: true
                },{
                    id: 3,
                    name: "Jane Doe",
                    tittle: "Sr. Devops",
                    experience: 2,
                    isSenior: false
                },{
                    id: 4,
                    name: "Alex Doe",
                    tittle: "Manager",
                    experience: 1,
                    isSenior: false
                }
            ]
    }},
    methods: {
        increaseExperience () {
         this.array.map((arr) => arr.experience++)
        },
        changeName () {
            if (this.count < this.array.length) {
                this.count++
            } else {
                this.count = 1
            }
        },
        handleClass (arr) {
            arr.isSenior = !arr.isSenior
        }
    },
    computed: {
        filterDevs () {
            return this.array.filter((arr) => arr.isSenior) 
        }
    }
})
app.mount("#app")