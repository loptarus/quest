function Img(imageUrl) {
    document.getElementById("img_1").src = imageUrl;
  }
  
  var buttons = document.querySelectorAll(".menu_button");
  for (var button of buttons) {
     button.addEventListener('click', function () {
       buttons.forEach(i => i.classList.remove('active'));
       this.classList.toggle('active');
     });
  };