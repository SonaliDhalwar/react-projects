import React from "react";
//import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

  

      
            
          
          
          

 var Accordion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < Accordion.length; i++) {
  Accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
  
        Accordion.defaultProps = {
          title: 'ReactChapters'
        };
        export default Accordion;
