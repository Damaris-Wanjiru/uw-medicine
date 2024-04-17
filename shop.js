const apiKey = f86ad31f6227853389a868ef93ec7693;
const apiUrl= "https://gnews.io/api/v4/search?q=medicine+health&apikey=f86ad31f6227853389a868ef93ec7693"
const blog = document.getElementById("blog")

fetch("https://gnews.io/api/v4/search?q=medicine+health&apikey=f86ad31f6227853389a868ef93ec7693")

.then(response => {

    if (!response.ok){
       throw new Error('network response was not okay')
}return response.json()
})

.then(data => { 
    console.log(data)
}).catch(error => {
    console.error("error" ,error);
})

