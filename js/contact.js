const hulpBtn = document.querySelector(".helpAsked");
hulpBtn.addEventListener('click', helpPressed)

function helpPressed() {
    document.querySelector(".hulp").classList.remove("hulp");
    console.log("Hulp Gevraagd")
}