let counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

let updateCounter=()=>{

let target=+counter.getAttribute("data-target");
let count=+counter.innerText;

let increment=target/100;

if(count<target){
counter.innerText=Math.ceil(count+increment);
setTimeout(updateCounter,20);
}else{
counter.innerText=target+"+";
}

}

updateCounter();

});
