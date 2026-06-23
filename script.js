
const text =
"AI Enthusiast • Machine Learning Developer • Creative Technologist";

let i = 0;

function typingEffect(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typingEffect,60);
    }
}

typingEffect();


// Scroll To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display = "block";
    }

    else{

        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});


// Fade In Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = 1;

            entry.target.style.transform = "translateY(0)";
        }
    });

});

sections.forEach(section=>{

    section.style.opacity = 0;

    section.style.transform = "translateY(50px)";

    section.style.transition = "all .8s ease";

    observer.observe(section);
});
```

