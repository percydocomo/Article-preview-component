const lightBtn = document.getElementById('share-button');
const darkBtn = document.getElementById('social-media-button');
const authorContainer = document.querySelector('.author-profile-container');
const socialMediaContainer = document.querySelector('.social-media-container');



lightBtn.addEventListener('click', function() {
  socialMediaContainer.classList.toggle('hidden'); 
});

darkBtn.addEventListener('click', function () {
  socialMediaContainer.classList.toggle('hidden');
});

