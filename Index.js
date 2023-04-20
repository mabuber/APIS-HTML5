const fileAPIsSupported = window.File && window.FileReader && window.FileList;

if (fileAPIsSupported) {
  alert("API's verificadas");
} else {
  alert("API File no soportada");
}
//
document.getElementById('videoFile').addEventListener('change', function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    video.src = event.target.result;
    alert('Cargando...');
  };
  reader.readAsDataURL(file);

}, false);