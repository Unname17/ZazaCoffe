var mysong = document.getElementById("mysong");
var icon = document.getElementById("icon");

icon.onclick = function () {
  if (mysong.paused) {
    mysong.play();
    icon.innerHTML = '<i data-feather="pause"></i>';
  } else {
    mysong.pause();
    icon.innerHTML = '<i data-feather="play"></i>';
  }

  // Perbarui ikon Feather setelah mengubah HTML
  feather.replace();
};
