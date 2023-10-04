let heading1 = document.getElementById("head2");
heading1.innerHTML = localStorage.getItem("IP Address");

let ipArray = localStorage.getItem("lat").split(",");
let lat = document.getElementById("latValue");
lat.innerHTML = ipArray[0];
let long = document.getElementById("longValue");
long.innerHTML = ipArray[1];
let city = document.getElementById("cityValue");
city.innerHTML = localStorage.getItem("City");
let Org = document.getElementById("orgValue");
Org.innerHTML = localStorage.getItem("Organization");
let region = document.getElementById("regionValue");
region.innerHTML = localStorage.getItem("Region");

let map = document.getElementById("map");
map.innerHTML = `<iframe src="https://maps.google.com/maps?q=${ipArray[0]}, ${ipArray[1]}&z=1&output=embed"
                 width="1000"
                 height="360"
                 frameborder="0"
                 style="border: 0"></iframe>`

   let time = localStorage.getItem("Time Zone");
   
   let currentTime = new Date().toLocaleString("en-US", { timeZone: time });


let date_chicago = new Date(currentTime);


let year = date_chicago.getFullYear();


let month = ("0" + (date_chicago.getMonth() + 1)).slice(-2);


let date = ("0" + date_chicago.getDate()).slice(-2);


let date_time = year + "-" + month + "-" + date;


console.log(date_time);
let currTimeZone = document.getElementById("B1");
currTimeZone.innerHTML= localStorage.getItem("Time Zone");
let currTime = document.getElementById("B2");
currTime.innerHTML = date_time;
let postal = document.getElementById("B3");
postal.innerHTML = localStorage.getItem("Postal");




const url = "https://api.postalpincode.in/pincode/";

function pincode(){
    return fetch(`${url}${localStorage.getItem("Postal")}`).
    then((response)=>{
        return response.json();
    }).catch(error=>{
        console.log("error");
    }).then((data)=>{
        console.log(data);
        return data;
    })
}
let card1 = document.getElementById("card1");
pincode().then((data)=>{
    let message = document.getElementById("B4");
    message.innerHTML = data[0].Message; 
    let data1 = data[0].Message.split(":");
    let msg = data1[1];
    let num = parseInt(msg);
   
    for(let i=0; i<num; i++){

        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML=`
<div class="R" style="display: flex;">
    <h3 style="color: gray; margin-right: 7px;">Name</h3>
    <h3 style="color: white;">${data[0].PostOffice[i].Name}</h3>
</div>
<div class="R" style="display: flex;">
    <h3 style="color: gray; margin-right: 7px;">Branch Type</h3>
    <h3 style="color: white;">${data[0].PostOffice[i].BranchType}</h3>
</div>
<div class="R" style="display: flex;">
    <h3 style="color: gray; margin-right: 7px;">Delivery Status</h3>
    <h3 style="color: white;">${data[0].PostOffice[i].DeliveryStatus}</h3>
</div>
<div class="R" style="display: flex;">
    <h3 style="color: gray; margin-right: 7px;">District</h3>
    <h3 style="color: white;">${data[0].PostOffice[i].District}</h3>
</div>
<div class="R" style="display: flex;">
    <h3 style="color: gray; margin-right: 7px;">Division</h3>
    <h3 style="color: white;">${data[0].PostOffice[i].Division}</h3>
</div>`
card1.appendChild(card);

    }
   

})


let input1 = document.getElementById("input");

input1.addEventListener("input", () =>{
card1.innerHTML = "";
pincode().then((data)=>{
    let message = document.getElementById("B4");
    message.innerHTML = data[0].Message; 
    let data1 = data[0].Message.split(":");
    let msg = data1[1];
    let num = parseInt(msg);
   
    for(let i=0; i<num; i++){
    if(input1.value ===`${data[0].PostOffice[i].Name}` || input1.value ===`${data[0].PostOffice[i].BranchType}`){
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML=`
<div class="R" style="display: flex;">
    <h3 style="color: gray; margin-right: 7px;">Name</h3>
    <h3 style="color: white;">${data[0].PostOffice[i].Name}</h3>
</div>
<div class="R" style="display: flex;">
    <h3 style="color: gray; margin-right: 7px;">Branch Type</h3>
    <h3 style="color: white;">${data[0].PostOffice[i].BranchType}</h3>
</div>
<div class="R" style="display: flex;">
    <h3 style="color: gray; margin-right: 7px;">Delivery Status</h3>
    <h3 style="color: white;">${data[0].PostOffice[i].DeliveryStatus}</h3>
</div>
<div class="R" style="display: flex;">
    <h3 style="color: gray; margin-right: 7px;">District</h3>
    <h3 style="color: white;">${data[0].PostOffice[i].District}</h3>
</div>
<div class="R" style="display: flex;">
    <h3 style="color: gray; margin-right: 7px;">Division</h3>
    <h3 style="color: white;">${data[0].PostOffice[i].Division}</h3>
</div>`
card1.appendChild(card);



    }




    }


})



})