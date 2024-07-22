
const cards = document.querySelectorAll('.card');

    cards.forEach((card)=>{
        card.addEventListener("click" , ()=>{
            remove()
            card.classList.add("active")
        })
    })

function remove(){
    cards.forEach((card)=>{
        card.classList.remove("active");
    })
}





