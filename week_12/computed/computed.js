var computed = new Vue({
    el: '#compute',
    data: {
        firstName: "Tyler",
        lastName: "Kitchens"
    },
    computed : {
        fullName(){
            return this.firstName + ' ' + this.lastName
        }
    }
})