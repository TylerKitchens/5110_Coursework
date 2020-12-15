
for(var i =0; i< 100; i++){
    $("#userInput").append(new Option(i, i))
}

function compare() {
    let answer = $("#userInput").val()
    let reaction = $("#response")

    switch (true) {
        case (Number(answer) === 24):
            reaction.text("correct")
            break
        case (Number(answer) < 24 && Number(answer) > 19):
            reaction.text(answer + " is too low but pretty close")
            break
        case (Number(answer) > 24 && Number(answer) < 29):
            reaction.text(answer + " is high but pretty close")
            break
        case (Number(answer) < 24 && Number(answer) < 19):
            reaction.text(answer + " is way too low")
            break
        case (Number(answer) > 24 && Number(answer) > 29):
            reaction.text(answer + " is way too high")
            break

    }
 
}
