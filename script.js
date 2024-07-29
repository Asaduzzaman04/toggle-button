const bg = document.getElementById("container");

const label = document.getElementById("switch");

label.addEventListener( "click", () =>{

    if(label.checked === true){
        bg.style.backgroundColor = "#201E43";
        console.log(`btnistrue`);
    }else{
        bg.style.backgroundColor = "#fff"
    }
    
})