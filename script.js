//collect all links of class "link-on-hover link-no-underline wordbreak-fix text--extra-bold ember-view"


let answer = confirm("Should I Open All Tickets in New Tabs ?")


if (answer){
//the class of the a tag
let classString  = "link-on-hover link-no-underline wordbreak-fix text--extra-bold ember-view";

//get all elements with the given class name (assuming they are all a TAGS !!!!)
for (i =0 ;i<document.getElementsByClassName(classString).length;i++)
{
    //get the href value of the element (whiche supposed to be a an "a" tag)
   let ticket_link = document.getElementsByClassName(classString)[i].href;

   //open the href into new tab if there is any
   if(ticket_link!= "" && ticket_link!= undefined)
   {
       window.open(ticket_link)
   }
}
}

