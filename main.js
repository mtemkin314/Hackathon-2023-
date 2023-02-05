
window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        1000 
    )
});


document.querySelector("#close").addEventListener("click", function(){
    if(document.getElementById('new_user_name').value == ""){
        alert("Input a Username")
     }else if(document.getElementById('new_birthdate').value == ""){
        alert("Input a Birth Year") 
    }else{
         document.querySelector(".popup").style.display = "none";
         let name = document.getElementById('new_user_name').value
         document.getElementById("name").innerHTML = name;
    }
});


document.querySelector("#new_movie_input").addEventListener("keydown",function() {
    let movie_title = document.querySelector("#new_movie_input").value;
    
   if(movie_title != ""){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f3b20f69a3msh9eb55a9e7877f48p1e5b9ajsn46d4a1ca307a',
            'X-RapidAPI-Host': 'imdb-movies-web-series-etc-search.p.rapidapi.com'
        }
    };
    let fetch_string = 'https://imdb-movies-web-series-etc-search.p.rapidapi.com/' + movie_title + '.json';
    fetch(fetch_string, options)
        .then(response => response.json())
       .then(response =>{
        const list = response.d
        document.getElementById("result_list").innerHTML = "";
        list.map((item) =>{
            const movie_name = item.l
            const poster =item.i.imageUrl
            const movie = '<button onclick = "add_movie(event)" style="color: blue;text-decoration: underline;">'+movie_name+'</button><br><img src = "'+poster+'" style="width:80px;">'
            const new_movie = document.createElement("li")
            new_movie.innerHTML = movie;            
            document.getElementById("result_list").append(new_movie)

        });

        
       } )
        .catch(err => console.error(err));
}


});

function add_movie(e){
   
    const movie_name = e.l
    const poster = e.i.imageUrl
    const movie = '<button onclick = "add_movie" style="color: blue;text-decoration: underline;">'+movie_name+'</button><br><img src = "'+poster+'" style="width:80px;">'
    const new_movie = document.createElement("li")
    new_movie.innerHTML = movie;            
    document.getElementById("saved_movies").append(new_movie)


};





