const pages=document.querySelectorAll(".page");
const links=document.querySelectorAll("a");

const headerElement = document.getElementById("header-element")

let currentPage = ""

export function moveTo(page){
  pages.forEach(page=>{
    page.classList.add('hidden');
  })
  document.querySelector(`#${page}`).classList.remove('hidden');

  currentPage = page

  if(currentPage === "register"|| currentPage === "login"){
    headerElement.classList.add("hidden")

  }else{
    headerElement.classList.remove('hidden')
  }

}

// if home: must reload and make request

links.forEach(link=>{
  link.onclick=(event)=>{
    event.preventDefault();
    link.classList.add("cursor-pointer")
    moveTo(event.target.getAttribute('to'))
  }
})
