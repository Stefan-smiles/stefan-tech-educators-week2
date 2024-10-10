const imgSelector = document.getElementById("image-selector");
const imgBackground = document.getElementById("image-background");

//interactivity(left right arrow keys)

const images = [
  { src: "./angelic-pictures/angel-1.jpg", alt: "angel 1" },
  { src: "./angelic-pictures/angel-2.jpg", alt: "angel 2" },
  { src: "./angelic-pictures/angel-3.jpg", alt: "angel 3" },
  { src: "./angelic-pictures/angel-4.jpg", alt: "angel 4" },
  { src: "./angelic-pictures/angel-5.jpg", alt: "angel 5" },
  { src: "./angelic-pictures/angel-6.jpg", alt: "angel 6" },
];

for (let i = 0; i < images.length; i++) {
  const img = document.createElement("img");
  img.src = images[i].src;
  img.alt = images[i].alt;

  img.addEventListener("click", function () {
    imgBackground.src = images[i].src;
    imgBackground.alt = images[i].alt;
    imgBackground.title = images[i].alt;
  });

  // add a click event listener to the image

  imgSelector.appendChild(img);
}
