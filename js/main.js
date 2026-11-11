import { getData } from "../services/api.js";
import { affichage } from "../ui/afichage.js";
import { affichagePrevi } from "../ui/afichage.js";


const list= document.getElementById("channel");
const search=document.getElementById("search");


const channels=await getData();
console.log(channels);
affichage(channels);

list.addEventListener("click",(e)=>{
const cart=e.target.closest("[data-id]")
if(!cart) return ;
const element=channels.find(({id})=> id===cart.dataset.id)
affichagePrevi(element)

})


search.addEventListener("input",()=>{
    const put=search.value.trim().toLowerCase();
    const carts=document.querySelectorAll("[data-id]");

    carts.forEach((cart)=>{
        const namee=cart.querySelector(".namee");
        const text=namee.textContent.toLowerCase();
        // const elemen=channels.find((p)=>p.id===cart.dataset.id);
        // const name=elemen.name.toLowerCase();
        cart.classList.toggle("hidden",!text.includes(put));
    })
})