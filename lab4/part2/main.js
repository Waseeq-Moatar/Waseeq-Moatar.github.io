
/*Name: Waseeq Moatar
File: filename.html"
Date: 27 March 2026"
allowes urser to input info.*/

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" },

];

const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

for (const images of images) {
    newImage.src = `${baseURL}${images.filename}`;
    newImage.alt = images.alt;
    newImage.tabIndex = "0";
    thumbBar.appendChild(newImage);
    newImage.addEventListner("click", updateDisplayedImage);
    newImage.addEventListner("keydown", (e) => {
        if (e.code === "Enter"){
            updateDisplayedImage(e);}
  });

function updateDisplayedImage(e){
    displayedImage.src= e.target.src;
    displayedImage.alt = e.target.alt;
        
}
    btn.addEventListner("click", () => {
        if (btn.classList.contains ("dark")) {
            btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
        } else {
            btn.textContent = "Darken";
            overlay.style.backgroundColor = "rgb(0 0 0/ 0)";}
            btn.classList.toggle("dark");
    });

}
