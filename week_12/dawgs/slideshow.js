new Vue({
    el: '#app',

    data() {

        return {
            info: null,
            moreData : [],
            imgMaker : [],
            whichDawg : "",
            selector: -1

        }
    },
    mounted: function mounted() {
        this.showme('cocker')

    },

    methods: {
        async showme(index) {
            await axios
                .get('https://dog.ceo/api/breed/spaniel/' + index + '/images')
                .then(response => (this.info = response.data));
            console.log(this.info.message)
            this.moreData = this.info.message
            this.slider(1)
        },
        slider(count){
            this.selector += count
           
            
       
            
            if(this.selector == -1){
                this.selector = this.moreData.length -1
            }
            else if(this.selector == this.moreData.length){
                this.selector = 0
            }

            console.log(this.selector)
            this.whichDawg = this.moreData[this.selector]
        }
    }
})
