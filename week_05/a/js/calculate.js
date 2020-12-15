let input1 = $("#input1")
let input2 = $("#input2")
let addBtn = $("#addButton")
let output = $("#output")

function add(){
    output.val("$" + (Number(input1.val()) + Number(input2.val())))
}

function sub(){
    output.val( "$" + (Number(input1.val()) - Number(input2.val())))
}

function div(){
    output.val( "$" + (Number(input1.val()) / Number(input2.val())))
}

function mult(){
    output.val( "$" + (Number(input1.val()) * Number(input2.val())))
}
