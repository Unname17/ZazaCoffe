function ViewMore() {
  var moreImgs = document.getElementById("More-imgs");
  var toggleButton = document.querySelector(".lanjut h3");

  if (moreImgs.style.display === "none" || moreImgs.style.display === "") {
    moreImgs.style.display = "flex";
    toggleButton.textContent = "View Less";
  } else {
    moreImgs.style.display = "none";
    toggleButton.textContent = "View More";
  }
}
