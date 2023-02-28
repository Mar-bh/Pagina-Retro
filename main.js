function loadFilter(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("filter").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "media.html", true);
    xhttp.send();
}


function loadXMLDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      const xmlDoc = xhttp.responseXML;
      const cd = xmlDoc.getElementsByTagName("CD");
      myFunction(cd)
    }
    xhttp.open("GET", "discography.xml");
    xhttp.send();
  }
  
  function myFunction(cd) {
    let table="<tr><th>DATE</th><th>Title</th></tr>";
    for (let i = 0; i < cd.length; i++) { 
      table += "<tr><td>" +
      cd[i].getElementsByTagName("DATE")[0].childNodes[0].nodeValue +
      "</td><td>" +
      cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
  }