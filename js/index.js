var apiKey = "AIzaSyBtzCRCHqSk3PED41bGxaXynugW5I_iLrY";

document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
  document.getElementById('sub-btn').addEventListener('click', function(event){
    var req = new XMLHttpRequest();
    var input = {longUrl:null};
    input.longUrl = document.getElementById('loc').value;
    req.open('POST','https://www.googleapis.com/urlshortener/v1/url?key=' + apiKey, false);
    req.setRequestHeader('Content-Type', 'application/json');
    // Stringify object into a string
    req.send(JSON.stringify(input));
    // RESPONSE - parse text into a JSON object
    var res = JSON.parse(req.responseText);
    document.getElementById('full-url').textContent = res.longUrl;
    document.getElementById('short-url').textContent = res.id;
    event.preventDefault();
  })
}