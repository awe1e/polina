var images = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg"]; // Замените названия файлов на свои изображения
var captions = ["Помню момент, когда впервые увидел тебя.", "Я знал, что ты - та самая с первого дня.", "Я улыбаюсь каждый раз, когда получаю от тебя сообщение.", "Я настоящий везунчик, потому что у меня такая девушка, как ты.", "На случай, если ты забыла, я напоминаю, что люблю тебя."]; // Замените описания на свои

var currentIndex = 0;
var slideshowImage = document.getElementById("slideshow-image");
var slideshowCaption = document.getElementById("slideshow-caption");

function showSlide(index) {
  slideshowImage.src = images[index];
  slideshowCaption.textContent = captions[index];
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showSlide(currentIndex);
}

showSlide(currentIndex);
