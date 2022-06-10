// ------------------------------------------------------Smooth scroll-----------------------------------------------------------------

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');          //This is fetching all the anchor tags         

for(i = 0; i < navMenuAnchorTags.length; i++){                             //This is for printing nav items separatly.
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();                                             //This will lead to stop moving of screen on clicking on nav items. 

        var targetSectionID = this.textContent.trim().toLowerCase();  //prints - home/portfolio after each cIn line 8 there is something wrong. 
        // console.log(targetSectionID);

        var targetSection = document.getElementById(targetSectionID);  //for getting exact location of clicked nav-item,where it should be goes.
        console.log(targetSection);

        var interval = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();   //for getting exact location of clicked nav-item, then this will take to that section.licking
           
            if(targetSectionCoordinates.top <= 0){
                clearInterval(interval);                            // This is for stop scrolling 
                return;
            }
            window.scrollBy(0, 50)
        }, 50);
    });
}

// ----------------------------------------------------skill animation------------------------------------------------------

// Handle scroll event on window
// Check that skills section container is visible or not
// Ensure that initial width of colored skills divs is zero -> initialise
// Start animation on every skill -> increase skill width from 0 to skill
// Store skill level -> html the help data attribue 




var progessBar = document.querySelectorAll(".skill-progress > div");            //This is inner colored skill boxes.
var skillsContainer = document.getElementById("skills-container");              //This is big skill box.
window.addEventListener("scroll",checkScroll);                          //function-3 call
var animationDone = false;


function initialiseBars(){                                     //function-1----------------------------------------
    for(let bar of progessBar){
        bar.style.width = 0; + "%";
    }
}
initialiseBars();



function fillBars(){                                        //function-2-----------------------------------------------------
    for(let bar of progessBar){
        let targetWidth = bar.getAttribute("data-bar-width");
        let currentWidth = 0;
        let intervall = setInterval(function(){
            if(currentWidth> targetWidth){                      //Mtlb ki jb color bdna(currentWidth) shuru ho to ek perticular point(targetSection) ke bad ruk jae 
            clearInterval(intervall);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + "%";                         //Mainly isi ki wajah se color fill ho rahe hai.
    },3);
}
}

function checkScroll(){                                                             
    //function-3--------------------------------------------------

    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top <= window.innerHeight){                    //Mtlb ki scroll karne par jaise hi skill section ki top se height total visible height(viewport height) se kam hogi vaise hi next condition impliment ho jaegi.
        animationDone = true;
        console.log("visible")
        fillBars();
    }
    else if(coordinates.top > window.innerHeight){                               //skill section ki top se height total visible height(viewport height) se jada hogi vaise hi next condition impliment ho jaegi.
        animationDone = false;
        initialiseBars();
    }
}


