const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.getElementById("gallery");
gallery.classList.add("wrapper");

const galleryRef = images.map((el) => {
  const itemListRef = document.createElement("li");
  const imageRef = document.createElement("img");
  itemListRef.classList.add("item");
  imageRef.setAttribute("src", el.url);
  imageRef.setAttribute("alt", el.alt);
  imageRef.setAttribute("width", 300);
  imageRef.classList.add("image");
  itemListRef.appendChild(imageRef);
  return itemListRef;
});
gallery.append(...galleryRef);
