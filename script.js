const navlink = document.querySelectorAll(".nav-link");
const windowpath = window.location.pathname;

navlink.forEach(element => {
    if(element.href.includes(windowpath)){
      element.classList.add("actives") 
    }
    console.log(element.href)  
    console.log(windowpath)
});

//  var a = document.getElementsByClassName("submit");

// function run () {
// let skills=[]
// document.querySelectorAll('[type="checkbox"]').forEach(item=>{
//     if(item.checked === true){
//              skills.push(item.value);
//     }
// })
//     console.log(skills)                             
// }








