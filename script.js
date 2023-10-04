

              
$.getJSON("https://api.ipify.org?format=json", function(data) {
         
// Setting text of element P with id gfg
$("#ipAddress").html(data.ip);
})


let url = "https://ipinfo.io/";


let btnIp = document.getElementById("btn");
let ip = document.getElementById("ipAddress");

let fetchingData = false;
let valIp;

function fetchDetails(){
   valIp = ip.innerHTML;
return fetch(`${url}${valIp}?token=d4f9865f473089`).
then((response)=>{
    return response.json();
}).catch((error)=>{
    console.log("error")
}).
then((data)=>{
    console.log(data);
    return data;
    
})
}


btnIp.addEventListener("click", () =>{


   fetchDetails().then((data)=>{
    localStorage.setItem("lat", data.loc);
    localStorage.setItem("IP Address", valIp);
    localStorage.setItem("Region", data.region);
    localStorage.setItem("Organization", data.org);
    localStorage.setItem("City", data.city);
    localStorage.setItem("Time Zone", data.timezone);
    localStorage.setItem("Postal", data.postal);
    window.location.href = "map.html";
   });


})


