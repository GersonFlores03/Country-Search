const isbtheme = document.getElementById("theme-btn")
const body = document.body

const colors = () => {

     if(isbtheme.classList.contains("bx-sun")){
        isbtheme.classList.replace("bx-sun" , "bx-moon")
     }else{
          isbtheme.classList.replace("bx-moon" , "bx-sun")
     }

     body.classList.toggle("dark")

}

isbtheme.addEventListener("click" , () => colors())










