

const exhibitionImg = document.querySelector(".product_exhibition_section img");

const menu = document.getElementById("section_menu");

const imgList = document.getElementById("img_container").children;

for(let i = 0; i < imgList.length; i++){
    imgList[i].addEventListener("mouseover", ()=>{
        exhibitionImg.src = imgList[i].src;
    })
}



function menuShow(){
    menu.style.display = 'flex';
}

function menuHide(){
    menu.style.display = 'none';
}
