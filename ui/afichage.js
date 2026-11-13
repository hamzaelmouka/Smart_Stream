const list= document.getElementById("channel");
const img=document.getElementById("img");
const select=document.getElementById("select");
const loadin=document.getElementById("loading");
const error=document.getElementById("erour");

export function affichage(channels){
    list.innerHTML="";
    channels.forEach(element => {
        list.innerHTML+=`
        <div  data-id="${element.id}" class="flex items-center m-2 bg-amber-50 rounded-md p-2 hover:bg-red-400">
            <p class="font-bold text-zinc-800 flex items-center m-3">${element.channelNumber}</p>
            <img src="${element.logo}" alt="" class="w-12 h-11 rounded-md object-cover" />
            <p class="namee ml-5 flex items-center italic font-semibold text-xl text-amber-800">${element.name}</p>
        </div>
        `
    });
   
}

export function selection(){
    const catt=document.querySelector('[data-id="1"]')
    catt.classList.add("bg-red-400");
    catt.classList.remove("bg-amber-50");
}

export function selectionn(cate){
    cate.classList.add("bg-red-400");
    cate.classList.remove("bg-amber-50");
}

export function selectio(cate){
    cate.classList.remove("bg-red-400");
    cate.classList.add("bg-amber-50");
}
export function affichagePrevi(channel){
    img.innerHTML=`
    <img class="w-full h-130 object-cover rounded-2xl " src=${channel.previewImage}>
    <h1 class="mt-4 text-3xl font-bold text-amber-50">${channel.channelNumber}-${channel.name}</h1>
    `;
}

export function selecte(data){
    if(!select)return;
    select.innerHTML="";
    select.innerHTML=`<option id="" class="w-10" value="">Tout les catalouge </option>`
    data.forEach(function(element){
        let valid=true;
        Array.from(select.options).forEach(function(e){
            if(element.category===e.value){
                valid=false
            }
        })
        if(valid){
            select.innerHTML+=`<option class="w-7" id="" value="${element.category}">${element.category}</option>`
        }
    })
}

export function loading(loadi){
    loadin.classList.toggle("hidden",loadi);
}
export function errour(err ,mesage){
    error.textContent=mesage;
    error.classList.toggle("hidden",err)
}