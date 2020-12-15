let candidateNames = ["Jeb Bush", "Ben Carson", "Lincoln Chafee", "Chris Christie", "Ted Cruz", "Carly Fiorina", "Jim Gilmore", "Lindsey Graham", "Bobby Jindal", "John Kasich", "Lawrence Lessig", "Martin O'Malley", "George Pataki", "Rand Paul", "Rick Perry", "Marco Rubio", "Bernie Sanders", "Rick Santorum", "Donald Trump", "Scott Walker", "Jim Webb"]
let candidatePix = ["bush.jpg", "carson.jpg", "chafee.jpg", "christie.jpg", "cruz.jpg", "fiorina.jpg", "gilmore.jpg", "graham.jpg", "jindal.jpg", "kasich.jpg", "lessig.jpg", "omalley.jpg", "pataki.jpg", "paul.jpg", "perry.jpg", "rubio.jpg", "sanders.jpg", "santorum.jpg", "trump.jpg", "walker.jpg", "webb.jpg"]

//Counter variables to use one array
var counter1 = 0;
var counter2 = 6;
var counter3 = 14;


$("#img1").attr("src", "../pix/" + candidatePix[counter1])
$("#img2").attr("src", "../pix/" + candidatePix[counter2])
$("#img3").attr("src", "../pix/" + candidatePix[counter3])


//Method to change the images
function canShow(plusMinus, slideNum){
    
 /**
  * Could be cleaned up with using an array for the counter instead
  * of 3 individual variabels but this is how my brain solved the problem first
  */
    switch(slideNum){
        case 1:
            //decrement or increment counter
            counter1 += plusMinus

            if(counter1 == 6){
                //if at end send it back to start
                counter1 = 0
            }
            else if(counter1 == -1){
                //if at beginning send it back to end
                counter1 = 5
            }
            //set the source of the image
            $("#img1").attr("src", "../pix/" + candidatePix[counter1])
        break

        case 2:

            counter2 += plusMinus
            if(counter2 == 14){
                counter2 = 6
            }
            else if(counter2 == 5){
               
                counter2 = 13
            }
            //set the source of the image
            $("#img2").attr("src", "../pix/" + candidatePix[counter2])
        break

        case 3:

            counter3 += plusMinus
            if(counter3 == 21){
                counter3 = 14
            }
            else if(counter3 == 13){
               
                counter3 = 20
            }
            //set the source of the image
            $("#img3").attr("src", "../pix/" + candidatePix[counter3])
        break

    }
    
}
