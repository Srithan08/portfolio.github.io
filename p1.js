const toggle = document.querySelector(".hamburger")
const sec = document.querySelector("section")

toggle.onclick = function(){
    document.querySelector("body").classList.toggle("active");
}

const resizeOps = () => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
};

resizeOps();
window.addEventListener("resize", resizeOps);
