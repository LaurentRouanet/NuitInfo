// Code JavaScript pour changer l'image en fonction de la couleur sélectionnée
document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre
    var selectedAnswer = document.querySelector('input[name="q1"]:checked').value;
  
    var imageContainer = document.getElementById('image-container');
    var colorImage = document.getElementById('color-image');
  
    // Affichage de l'image en fonction de la réponse
    if (selectedAnswer === 'blue') {
      colorImage.src = 'Imagesciel/blue_image.jpg'; // Chemin de l'image bleue
    } else if (selectedAnswer === 'green') {
      colorImage.src = 'Imagesciel/green_image.jpg'; // Chemin de l'image verte
    } else if (selectedAnswer === 'red') {
      colorImage.src = 'Imagesciel/red_image.jpg'; // Chemin de l'image rouge
    }
  
    // Affiche l'image
    colorImage.style.display = 'block';
  });