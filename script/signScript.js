var survey123webform = document.getElementsByName('survey123webform')[0];window.addEventListener("message",e=>{
  if(e.data){
    var t=JSON.parse(e.data);
    "survey123:onFormLoaded"===t.event&&t.contentHeight&&(survey123webform.parentNode.style.height=t.contentHeight+"px")&&(survey123webform.parentNode.style["padding-bottom"]="unset")
  }
});
