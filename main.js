
window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        2000 
    )
});


document.querySelector("#close").addEventListener("click", function(){
    if(document.getElementById('new_user_name').value == ""){
        alert("Input a Username")
     }else if(document.getElementById('new_birthdate').value == ""){
        alert("Input a Birth Year") 
    }else{
         document.querySelector(".popup").style.display = "none";
    }
});