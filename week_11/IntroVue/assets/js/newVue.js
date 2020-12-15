var header = new Vue({
    el : "#header",
    data : {
        yourName : "Tyler",
        description : "This is my description",
        link1 : "Introduction",
        link2 : "Portfolio",
        link3 : "About Me",
        link4 : "Contact",
        link5 : "My List",
        link6 : "Conditional",
        link7 : "Function",
        avatar : "images/puppy.jpg"
    }

})

var portfolio = new Vue({
    el : "#portfolio",
    data : {
        portfolioTitle : "This is title ",
        img1 : "images/vuepix/one.jpg",
        imgTxt1 : "This is image 1 text",
        imgTxt2 : "This is image 2 text",
        imgTxt3 : "This is image 3 text",
        imgTxt4 : "This is image 4 text",
        imgTxt5 : "This is image 5 text",
        imgTxt6 : "This is image 6 text",
        img2 : "images/vuepix/two.jpg",
        img3 : "images/vuepix/three.jpg",
        img4 : "images/vuepix/four.jpg",
        img5 : "images/vuepix/five.jpg",
        img6 : "images/vuepix/six.jpg",
        

    }

})

var about = new Vue({
    el : "#about",
    data : {
        img : "images/aboutme.jpg",
        about : "I am a third-year computer science student at the University of Georgia who develops mobile applications. Growing up I was astonished by how simplistic apps could climb to the top of charts and generate hundreds of thousands of dollars. Every time an app climbed to the top I was left thinking, \"I could have come up with that.\" My problem was that I did not possess the skill set to implement app ideas I had. Now I have hundreds of hours of learning and experience under my belt to develop your next big app idea. I am student by day and full-stack mobile app developer by night. I have four published apps on the Google Play and Apple App store for you to take a look at to see my work."
    }
})

var intro = new Vue({
    el : "#intro",
    data : {
        title : "This Is My Vue Title",

    }
})

var contact = new Vue({
    el : "#contact",
    data : {
        desc : "Please fill out the form below to get in touch with me",

    }
})

var list = new Vue({
    el : "#list",
    data : {
        favorites : ["McDonalds", "Wendys", "Eddies", "Barbs"]
    }
})

var conditional = new Vue({
    el : "#conditional",
    data : {
        teacherName : "",
        classNumber : ""
    }
})

var getColor = new Vue({
    el : "#function",
    data : {
        bgColor : '',
        colors : ['red', 'green', 'blue'],
        width: '200px',
        widths: ['400px', '800px', '1200px']
    },
    methods : {
        changeColor(color){
            this.bgColor = color
        },
        changeWidth(width){
            this.width = width
        }
    }
})


