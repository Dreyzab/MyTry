
document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var city = document.getElementById('city').value;
    var note = document.getElementById('note').value;
    var whatsappNumber = "1234567890"; // Replace with your WhatsApp number

    var message = "Name: " + name + "\nCity: " + city;
    if (note) {
        message += "\nNote: " + note;
    }

    var whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank').focus();     });
    document.querySelector('.burger').addEventListener('click', function() {
        document.querySelector('nav.container-fluid').classList.toggle('active');
    });
    let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
