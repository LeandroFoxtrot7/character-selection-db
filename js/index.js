const baseURL = "https://dragonball-api.com/api";
const characterSelected = document.querySelectorAll(".character img")
const characterPreview = document.querySelector(".character-preview img")

characterSelected.forEach(img => {
    img.addEventListener("click", async (event) => {
        try{
        const characterSelected = event.target.dataset.name;
        const response = await fetch(`${baseURL}/characters?name=${characterSelected}`);
        
        const data = await response.json();

        characterPreview.style.display = "block"
        
        characterPreview.setAttribute("src", `https://dragonball-api.com/characters/${characterSelected}.webp`)
        }catch(error) {
            console.log("Não foi possível encontrar a imagem do personagem, erro:", error)
        }
    })
});









