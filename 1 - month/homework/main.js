const crest = document.querySelectorAll(".crest")
let enter = '<a class="cr"> o </a>'
let enter2 = '<a class="cr1"> x </a>'
crest.forEach(
    (crest)=>{
        crest.ondblclick = () => {
            crest.innerHTML = enter;
        }
    }
)

crest.forEach(
    (crest)=>{
        crest.onclick = () => {
            crest.innerHTML = enter2;
        }
    }
)