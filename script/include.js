function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};

function bienvenido(){
  alert("ESRI technology say 'Hi everybody'");
};

function plot1(){
  var ctx= document.getElementById("myCanvas").getContext("2d");
  var myChart= new Chart(ctx,{
      type:"pie",
      data:{
          labels:['Área total de Chapinero km²','Área urbanizada km²','Área de techos km²'],
          datasets:[{
                  label:'Area en km²',
                  data:[38.48,11.60,1.10],
                  backgroundColor:[
                      'rgb(62, 196, 179)',
                      'rgb(62, 146, 196)',
                      'rgb(196, 62, 146)'
                  ]
          }]
      }
  });
}

function plot2(){
  var ctx= document.getElementById("myCanvas2").getContext("2d");
  var myChart= new Chart(ctx,{
      type:"pie",
      data:{
          labels:['col1','col2','col3'],
          datasets:[{
                  label:'Num datos',
                  data:[10,9,15],
                  backgroundColor:[
                      'rgb(66, 134, 244,0.5)',
                      'rgb(74, 135, 72,0.5)',
                      'rgb(229, 89, 50,0.5)'
                  ]
          }]
      },
      options:{
          scales:{
              yAxes:[{
                      ticks:{
                          beginAtZero:true
                      }
              }]
          }
      }
  });
}