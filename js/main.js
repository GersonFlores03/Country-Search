const search = document.querySelector(".InputContainer input");
const buton = document.querySelector("button")
const Contenedor = document.querySelector(".jsonDatos")
const Country = document.querySelector(".country")
const image = document.querySelector(".text")
const FilterConteiner = document.querySelector(".Filter-Region")
const countryName = document.getElementsByClassName("name")

//https://restcountries.com/v3.1/subregion/${FilterConteiner.value}
  // https://restcountries.com/v3.1/region/europe
   //FilterConteiner.value

let allcontryData

fetch(`https://restcountries.com/v3.1/all`)
   .then(res => res.json())
   .then(data => {
      mostrarDatos(data)
      allcontryData = data
   })

FilterConteiner.addEventListener('change', (e) => {
   Contenedor.innerHTML = ``
   fetch(` https://restcountries.com/v3.1/region/${FilterConteiner.value}`)
   
      .then(res => res.json())
      .then(data => {
         data.forEach(data => {
            const countryData = document.createElement("a")
            countryData.href = `./country.html?name=${data.name.common}`
            countryData.innerHTML = `
            <div class="DatesCountry">
            <div class="Datos"> 
            <img class="image" src= ${data.flags.png} alt="">
            <div class="getParrafos"> 
            <h5 class="name"> ${data.name.common} </h5>
            <p class="Parrafo"> <b class="Caracters"> Population: </b>  ${data.population}   </p>
            <p class="Parrafo"> <b class="Caracters" > Region: </b>  ${data.region} </p>
            <p class="Parrafo">  <b class="Caracters" > Capital: </b> ${data.capital?.[0]} </p>
            </div>
            </div>
            </div>


                `
            Contenedor.append(countryData)
         })

      })

})


function mostrarDatos(data) {
   Contenedor.innerHTML = ``
   data.forEach((api) => {
      console.log(api)
      const Ancor = document.createElement("a")
      //div.classList.add("country")
      Ancor.href = `./country.html?name=${api.name.common}`
      Ancor.innerHTML = `
      <div class="DatesCountry">
      <div class="Datos"> 
      <img class="image" src= ${api.flags.png} alt="">
      <div class="getParrafos"> 
      <h4 class="name"> ${api.name.common} </h4>
      <p class="Parrafo"> <b class="Caracters"> Population: </b>  ${api.population}   </p>
      <p class="Parrafo"> <b class="Caracters" > Region: </b>  ${api.region} </p>
      <p class="Parrafo">  <b class="Caracters" > Capital: </b> ${api.capital?.[0]} </p>
      </div>
      </div>
      </div>
   `
      Contenedor.append(Ancor)

   })


}

search.addEventListener('input', (e) => {
   const filterDatos = allcontryData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
   //console.log(filterDatos)
   mostrarDatos(filterDatos)
})




















