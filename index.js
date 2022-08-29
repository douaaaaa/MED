let sourceIframe = document.querySelector("iframe").getAttribute("src"); 

document.querySelector("#about .about .left3 .video .into i").addEventListener("click", () => {
    document.querySelector("iframe").setAttribute("src", sourceIframe); 
    document.querySelector("#about .shadow").style.display = "block";
    document.querySelector(".shadow .cross").addEventListener("click", () => {
        document.querySelector("#about .shadow").style.display = "none";
        document.querySelector("iframe").setAttribute("src", ""); 
    })
}); 

let serArray = document.querySelectorAll(".left4 .subSer"); 

let inforArray = [
    {
        serName: "dental", 
        artTitle: "dental car services", 
        doctor: "5",
        text: "dental Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Minus Quibusdam Temporibus Excepturi Totam Quos.", 
        image: "https://as1.ftcdn.net/v2/jpg/02/61/24/78/1000_F_261247806_M75GNxhdRghqsPdelW18txBGh9uylSYx.jpg",
    }, 
    {
        serName: "medicine", 
        artTitle: "medicine car services", 
        doctor: "20",
        text: "medicine Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Minus Excepturi Totam Quos.", 
        image: "https://as1.ftcdn.net/v2/jpg/03/06/82/34/1000_F_306823472_82RKTlM8IOjX6CcKcClVP27Lb2pwWniV.jpg",
    }, 
    {
        serName: "cardeology", 
        artTitle: "cardeology car services", 
        doctor: "2",
        text: "cardeology Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Minus Excepturi Totam Quos.", 
        image: "https://t4.ftcdn.net/jpg/04/75/93/93/240_F_475939310_14G5ChqTqjba46gEHuMvCfay4bGrxV37.jpg",
    }, 
    {
        serName: "eye care", 
        artTitle: "eye car services", 
        doctor: "12",
        text: "eye care Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Minus Excepturi Totam Quos.", 
        image: "https://t4.ftcdn.net/jpg/04/80/22/45/240_F_480224545_wWeBl9cdav87wgyf51RrdjpJC7bBCbO2.jpg",
    }, 
    {
        serName: "primary care", 
        artTitle: "primary car services", 
        doctor: "20",
        text: "primary care Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Minus Excepturi Totam Quos.", 
        image: "https://t3.ftcdn.net/jpg/04/04/26/44/240_F_404264460_4ApqCnBMWvrXYJALqKFcfgvs33VNoGWj.jpg",
    }, 
    {
        serName: "orthophdic", 
        artTitle: "orthophdic car services", 
        doctor: "17",
        text: "orthophdic Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Minus Excepturi Totam Quos.", 
        image: "https://as1.ftcdn.net/v2/jpg/05/00/57/26/1000_F_500572603_Pgfa8OsTJVXC2IeFzLWpUkadGrqPJaZN.jpg",
    }, 
]

serArray.forEach((element) => {
    element.addEventListener("click", (e) => {
        for (let i = 0; i < serArray.length; i++) {
            serArray[i].classList.remove("active")
        }
        e.currentTarget.classList.add("active"); 
        let index; 
        for (let j = 0; j < inforArray.length; j++) {
            if (e.currentTarget.querySelector("p").textContent === inforArray[j].serName) {
                index = j; 
            }
        }
        document.querySelector(".right4 .down h1").textContent = inforArray[index].artTitle;
        document.querySelector(".right4 .down p").textContent = inforArray[index].text;
        document.querySelector(".right4 .up img").setAttribute("src", inforArray[index].image);
        document.querySelector(".right4 .people p").textContent = inforArray[index].doctor;
    })
})