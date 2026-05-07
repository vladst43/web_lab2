const systemInfoKey = 'systemInfo';

const systemInfo = {
  browser: navigator.userAgent,
  platform: navigator.platform,
  language: navigator.language,
};

localStorage.setItem(systemInfoKey, JSON.stringify(systemInfo));

const savedSystemInfo = JSON.parse(localStorage.getItem(systemInfoKey));

document.getElementById('browserInfo').textContent = savedSystemInfo.browser;
document.getElementById('platformInfo').textContent = savedSystemInfo.platform;
document.getElementById('languageInfo').textContent = savedSystemInfo.language;

const themeToggle = document.getElementById('themeToggle');

function setTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  themeToggle.textContent = isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme';
}

const currentHour = new Date().getHours();
setTheme(currentHour < 7 || currentHour >= 21);

themeToggle.addEventListener('click', () => {
  setTheme(!document.body.classList.contains('dark-mode'));
});

const reviewsContainer = document.getElementById('reviewsContainer');

fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Unable to load reviews');
    }

    return response.json();
  })
  .then((reviews) => {
    reviewsContainer.innerHTML = '';

    reviews.forEach((review) => {
      const card = document.createElement('article');
      card.className = 'review-card';

      const title = document.createElement('h3');
      title.textContent = review.name;

      const email = document.createElement('p');
      email.className = 'review-email';
      email.textContent = review.email;

      const body = document.createElement('p');
      body.textContent = review.body;

      card.append(title, email, body);
      reviewsContainer.appendChild(card);
    });
  })
  .catch((error) => {
    reviewsContainer.innerHTML = `<p class="error-message">${error.message}</p>`;
  });

const contactModal = document.getElementById('contactModal');
const modalClose = document.getElementById('modalClose');

setTimeout(() => {
  contactModal.classList.remove('hidden');
}, 60000);

modalClose.addEventListener('click', () => {
  contactModal.classList.add('hidden');
});
