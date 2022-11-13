import { galleryItems } from "./gallery-items.js";

const ref = document.querySelector(".gallery");

const createElList = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<li><a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a></li>`,
  ""
);
ref.insertAdjacentHTML("beforeend", createElList);

function onClickImg(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
ref.addEventListener("click", onClickImg);
