fetch('data/posts.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('posts');
    posts.forEach(post => {
      const card = document.createElement('div');
      card.innerHTML = `
        <h2><a href="post.html?id=${post.id}">${post.title}</a></h2>
        <p>By ${post.author} on ${post.date}</p>
      `;
      container.appendChild(card);
    });
  });
