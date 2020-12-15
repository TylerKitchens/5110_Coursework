$.getJSON('https://raw.githubusercontent.com/emuel/api/master/5110', data => {

    console.log(data)
    for (var i = 0; i < data.length; i++) {
        var person = "<div class='text-center w-50'>" +
            "<div class='img-cropper m-2 text-center'> " +
            "<img src='http://" + data[i].domain + "/images/me.jpg' class='img-fluid '  />" +
            "</div>" +
            "<a href='http://" + data[i].domain + "' target='_blank' ><h2>" + data[i].stu_name + " " + data[i].last_name + "</h2> </a>" +
            "<p class='lead text-wrap'>" + data[i].fact + "</p>" +
            " </div>"
        $("#content").append(person)
    }
});