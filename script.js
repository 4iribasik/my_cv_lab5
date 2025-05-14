const systemInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language
};
localStorage.setItem('systemInfo', JSON.stringify(systemInfo));
document.getElementById('localStorageFooter').textContent = "System Info: " + JSON.stringify(systemInfo);

fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`)
  .then(res => res.json())
  .then(data => {
      const container = document.getElementById('commentsContainer');
      data.forEach(comment => {
          const div = document.createElement('div');
          div.innerHTML = `<h4>${comment.name}</h4><p>${comment.body}</p>`;
          container.appendChild(div);
      });
  });

setTimeout(() => {
    const modal = document.createElement('div');
    modal.classList.add('modal-overlay');
    modal.innerHTML = `
        <div class="modal">
            <h2>Feedback</h2>
            <form action="https://formspree.io/f/mzzryppp" method="POST">
                 <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <label for="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}, 60000); // 1 хв

function toggleTheme() {
    document.body.classList.toggle('night-theme');
}

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('night-theme');
});

const currentHour = new Date().getHours();
if (currentHour >= 7 && currentHour < 21) {
    document.body.classList.remove('night-theme');
} else {
    document.body.classList.add('night-theme');
}

