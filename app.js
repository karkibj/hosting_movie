// function to handle error while fetching data
async function fetchData(movie_name) {

    const url = `https://www.omdbapi.com/?t=${movie_name}&apikey=9d5c1d5d`;
    const response = await fetch(url);
    console.log("Response satatus:", response);
    const data = await response.json();
    console.log(data);
    document.querySelector("#movie-name").innerText = `${data.Title}`;
    document.querySelector("#name").innerText = `Title:${data.Title}`;
    document.querySelector("#year").innerText = `Year :${data.Year}`;;
    document.querySelector("#director").innerText = data.Director;
    document.querySelector("#Relsease-date").innerText = `Release Date ${data.Released}`;
    document.querySelector("#Genre").innerText = `Genre: ${data.Genre}`;
    document.querySelector("#runtime").innerText = `Runtime: ${data.Runtime}`;
    document.querySelector("#Country").innerText = `Country: ${data.Country}`;
    document.querySelector("#plot").innerText = `${data.Plot}`;
    document.querySelector("#lan").innerText = `Language: ${data.Language}`;
    const image_url = data.Poster;
    document.querySelector("#photo").innerHTML = `<img src=${image_url} alt="">`;
    const actors = data.Actors;
    const list_of_actors = actors.split(',');
    console.log(list_of_actors);
    console.log(list_of_actors[0]);
    document.querySelector("#act1").innerText = list_of_actors[0];
    document.querySelector("#act2").innerText = list_of_actors[1];
    document.querySelector("#act3").innerText = list_of_actors[2];
    document.querySelector("#awards").innerText = data.Awards;
    document.querySelector("#box-collection").innerText = data.BoxOffice;
    document.querySelector("#rating-value").innerText = data.Ratings[0].Value;




}
var result
const movie_name = "12th fail";
fetchData(movie_name); //for deafult dashboard
var get_name
const search_button = document.getElementById("button");
search_button.addEventListener('click', () => {
    get_name = document.getElementById("get_movie").value;
    fetchData(get_name); 
    result = get_name.replace(/ /g,"-"); 
    console.log(result)

    

})



console.log("Adding more featurs")


links=document.getElementsByTagName('a')
console.log(links)
for(link of links){
   
    link.addEventListener('click',()=>{
    alert(`Are you sure to search movie ${result}`)
    link.href=`https://dopebox.to/search/${result}`;
    // link.href=`https://www.youtube.com/results?search_query=The+social+network`
})
}

//same thing using for each