
let page = 1;

const container = document.querySelector(".container")
async function loadQuotes(page){
    console.log("page number",page)
    const api = `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=25`;
    try{
        let res = await fetch(api);
        let data = await res.json();
        appendData(data.data);
    }
    catch(err){
        console.log(err)
    }
}


const appendData = (data)=>{
    data.forEach(element => {
        let p1 = document.createElement("p");
        p1.textContent = element.quote;
        container.append(p1)
    });
}


loadQuotes(page,limit)

window.addEventListener('scroll',()=>{
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        page = page+1;
        loadQuotes(page,limit)
    }
})