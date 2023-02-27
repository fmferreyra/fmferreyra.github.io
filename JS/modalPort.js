document.querySelectorAll(".modal-container img").forEach(el=>{
    el.addEventListener("click", function(ev){
        ev.stopPropagation();
        this.parentNode.classList.add("active");
        window.scrollTo(0,0);
    })
});

document.querySelectorAll(".modal-container").forEach(el=>{
    el.addEventListener("click", function(ev){
        this.classList.remove("active");

    })
})