export async function getData(){
try{
    const response=await fetch("https://6af34ebcd2377d6c3704e210.mockapi.io/channels/channel");
    if(!response.ok){
        throw new Error(`Erreur HTTP ${response.status}`);
    }
    const data=await response.json();
    return data;
}catch(error){
    throw new Error(error.message||"propleme reseau");
}
} 