const list= document.getElementById("channel");
const img=document.getElementById("img");

export function affichage(channels){
    list.innerHTML="";
    channels.forEach(element => {
        list.innerHTML+=`
        <div data-id="${element.id}" class="flex m-2 bg-amber-50 rounded-md p-2">
            <p class="font-bold text-zinc-800 flex items-center m-3">${element.channelNumber}</p>
            <img src="${element.logo}" alt="" class="w-12 h-11 rounded-md object-cover" />
            <p class="namee ml-5 flex items-center italic font-bold text-2xl text-amber-800">${element.name}</p>
        </div>`
    });
    
}

export function affichagePrevi(channel){
    img.innerHTML=`
    <img class="w-full h-100 object-cover rounded-2xl " src=${channel.previewImage}>
    <h1 class="mt-4 text-3xl font-bold text-amber-50">${channel.channelNumber}-${channel.name}</h1>
    `;
}