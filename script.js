const imgSelector = document.getElementById("image-selector");
const imgBackground = document.getElementById("image-background");

//interactivity(left right arrow keys)
imgIndex = 0;

const images = [
  {
    src: "./angelic-pictures/angel-1 100.jpg",
    alt: "an image of an angel set on a corner piece  in stone.",
  },
  {
    src: "./angelic-pictures/angel-3 100.jpg",
    alt: "a rennaisance  style painting of angels amongst the clouds",
  },
  {
    src: "./angelic-pictures/angel-4 100.jpg",
    alt: "a stone angel stautue in a public space",
  },
  {
    src: "./angelic-pictures/angel-5 100.jpg",
    alt: "a sculpture of a warrior angel seemingly in a battle",
  },
  {
    src: "./angelic-pictures/angel-6 100.jpg",
    alt: "an image of an angel in tarot card style",
  },
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

  img.addEventListener("mouseover", function (e) {
    e.target.style.border = "solid red 10px";
  });
  img.addEventListener("mouseout", function (e) {
    e.target.style.border = "0px ";
  });

  // add a click event listener to the image

  imgSelector.appendChild(img);
}
