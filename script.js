

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



