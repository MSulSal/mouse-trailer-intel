const trailer = document.getElementById("trailer");

const getTrailerClass = (type) => {
  switch (type) {
    case "video":
      return "fa-solid fa-play";
    default:
      return "fa-solid fa-arrow-up-right-from-square";
  }
};

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;

  trailer.style.transform = `translate(${x}px, ${y}px)`;

  const keyframes = {
    transform: `translate(${x}px, ${y}px)`,
  };

  trailer.animate(keyframes, {
    duration: 800,
    fill: "forwards",
  });
};

window.onmousemove = (e) => {
  const interactable = e.target.closest(".interactable"),
    interacting = interactable !== null;

  const icon = document.getElementById("trailer-icon");

  animateTrailer(e, interacting);

  trailer.dataset.type = interacting ? interactable.dataset.type : "";

  if (interacting) {
    icon.className = getTrailerClass(interactable.dataset.type);
  } else {
    icon.className = "";
  }
};
