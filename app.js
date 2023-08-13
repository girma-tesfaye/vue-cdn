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
                },{
                    id: 2,
                    name: "John Doe",
                    tittle: "CEO",
                    experience: 4,
                },{
                    id: 3,
                    name: "Jane Doe",
                    tittle: "Sr. Devops",
                    experience: 2,
                },{
                    id: 4,
                    name: "Alex Doe",
                    tittle: "Manager",
                    experience: 1,
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
            
        }
    }
})
app.mount("#app")