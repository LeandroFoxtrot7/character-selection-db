const baseURL = "https://dragonball-api.com/api";
const characterSelected = document.querySelectorAll(".character img")
const characterPreview = document.querySelector(".character-preview img")

characterSelected.forEach(img => {
    img.addEventListener("click", async (event) => {
        
        const characterSelected = event.target.dataset.name;
        const response = await fetch(`${baseURL}/characters?name=${characterSelected}`);
        
        const data = await response.json();
        
        characterPreview.setAttribute("src", `https://dragonball-api.com/characters/${characterSelected}.webp`)
    })
});









