const respuesta = new URLSearchParams(location.search).get("name")
const Countrys = document.querySelector(".countryName")
console.log(respuesta)

fetch(`https://restcountries.com/v3.1/name/${respuesta}?fullText=true`)
  .then(res => res.json())
  .then(data => {
    countryDatos(data)
  })

const countryDatos = (country) => {
  console.log(country[0])
  country.forEach((isCountry) => {
    const conteinerCountry = document.createElement("div")
    conteinerCountry.classList.add("isCountrys")
    conteinerCountry.innerHTML = `
  <div class="ContainerCountryName">
  
  <button class="ButtonLinks"> <a class="Ancor" href="./index.html"> <i class='bx bx-arrow-back'></i> Back </a>  </button>
  </div>
  <div class="Container-CountryPropertys">
  <div class="CenterImg">
  <img class="imgCountryName" src=${isCountry.flags.png} alt="">
  </div>
  <div class="Title-Caracteristicas">
  <div class="MargenTitle">
  <strong class="NameCountrys"> ${isCountry.name.common}  </strong>
   </div>
   <div class="FlexCaracteristicas">
  <div class="Caracteristicas">
  <p class="ParrafoCaracteristicas">  <strong class="TitleParrafo">   Native Name :   </strong>  <span class="NameCountry"> ${isCountry.name.common}  </span> </p>
  <p class="ParrafoCaracteristicas">   <strong class="TitleParrafo">   Population :   </strong>   <span class="NameCountry"> ${isCountry.population}  </span> </p>
  <p class="ParrafoCaracteristicas">  <strong class="TitleParrafo">   Region :    </strong>   <span class="NameCountry"> ${isCountry.region}  </span> </p>
  </div>
  <div class="Regiones">
  <p class="ParrafoCaracteristicas">   <strong class="TitleParrafo">   Sub Region :    </strong>    <span class="NameCountry"> ${isCountry.subregion}  </span> </p>
  <p class="ParrafoCaracteristicas"> <strong class="TitleParrafo">   Capital :  </strong>    <span class="NameCountry"> ${isCountry.capital[0]}  </span> </p>
  <div class="PropiedadesCountry">
  <p class="ParrafoCaracteristicas"> <strong class="TitleParrafo"> To Level Domain :   </strong>     <span class="NameCountry"> ${isCountry.cca2} </span> </p>
  </div>
  
  </div>
  </div>
  </div>
  </div>
  
  `
    Countrys.append(conteinerCountry)
  })
}






