
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


document.querySelector("#new_movie_input").addEventListener("input",function() {
    let movie_title = document.querySelector("#new_movie_input").value;
    let response
   
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f3b20f69a3msh9eb55a9e7877f48p1e5b9ajsn46d4a1ca307a',
            'X-RapidAPI-Host': 'imdb-movies-web-series-etc-search.p.rapidapi.com'
        }
    };
    let fetch_string = 'https://imdb-movies-web-series-etc-search.p.rapidapi.com/' + movie_title + '.json';
    fetch(fetch_string, options)
        
        .then(response => console.log(response))
        .catch(err => console.error(err));
    
});