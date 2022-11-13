import { galleryItems } from "./gallery-items.js";

const ref = document.querySelector(".gallery");

const renderListImg = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>`,
  ""
);
ref.insertAdjacentHTML("beforeend", renderListImg);

function onImgClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  instanceModal(e);
}

function instanceModal(e) {
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  ref.addEventListener("keydown", escButton);

  function escButton(e) {
    if (e.code === "Escape") {
      instance.close();
      ref.removeEventListener("keydown", escButton);
    }
  }
}
ref.addEventListener("click", onImgClick);
