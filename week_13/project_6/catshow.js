const slideshow = Vue.extend({
    props: ['whichcat'],
    data: () => {
        return {
            image: "",
            allofit: [],
            i: 0
        }
    },
    created() {
        this.loadNextImage(this.whichcat);
    },
    methods: {
        async loadNextImage(breedID) {
            try {
                axios.defaults.headers.common['x-api-key'] = "5707ff43-c0b5-456f-864a-78a03c24ea46"
                let response = await axios.get('https://api.thecatapi.com/v1/images/search?breed_ids=' + breedID, {
                    params: {
                        limit: 10,
                        size: "full"
                    }
                })
                this.allofit = response.data;

            } catch (err) {
                console.log(err)
            }
            this.slideshow()
        },
        async slideshow() {

            if (this.i >= this.allofit.length) {
                this.i = 0;
            }
            this.image = this.allofit[this.i];
            this.i++;
        }
    },
    template: `<div class='text-center visible2' >

            
            <h2 class='display-4'>{{image.breeds[0].name}}</h2>
            <p class='lead'>{{image.breeds[0].description}} </p>
            <p class='lead'><b>Temperament: </b>{{image.breeds[0].temperament}} </p>
            <p class='lead'><b>Origin: </b>{{image.breeds[0].origin}} </p>
           
                <b class='text-right'>Child Friendly:</b> 
           
            <span v-if="image.breeds[0].child_friendly > 0">&#9787;</span>
                <span v-if="image.breeds[0].child_friendly > 1">&#9787;</span>
                <span v-if="image.breeds[0].child_friendly > 2">&#9787;</span>
                <span v-if="image.breeds[0].child_friendly > 3">&#9787;</span>
                <span v-if="image.breeds[0].child_friendly > 4">&#9787;</span>
            <br>
            <button class='btn btn-primary mt-3' v-on:click="slideshow()">Next Image</button><br><br>
            <img :src="image.url"><br>
            
        </div>`
})

Vue.component('catslideshow', slideshow)

new Vue({
    el: "#app"
})

//Global to store last one to hide
var prevId = "-1"
//Function to toggle
function toggle(id) {
    //flip the visibility of the ones to show
    $("#" + prevId).toggleClass('visible2')
    $("#" + id).toggleClass('visible2')
    //Save the last clicked button
    prevId = id
}