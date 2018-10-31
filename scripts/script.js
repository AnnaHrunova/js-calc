function reload(val) {
  document.getElementById("display").value = val;
}

function insertSymbol(val) {
  document.getElementById("display").value += val;
}

function calc() {
  var expression = "?expr=" + document.getElementById("display").value;
  var host = "http://api.mathjs.org/v4/";
  var xmlHttp = new XMLHttpRequest();
  try {
    xmlHttp.open("GET", host + expression , false);
    xmlHttp.send();
    reload(xmlHttp.responseText);
    // reload(eval(document.getElementById("display").value))
  }
  catch(e) {
    reload('Error')
  }
}
