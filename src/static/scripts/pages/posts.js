import { getDataFromServer } from '../api/api';

export async function getPosts() {
  const startIndex = 0;
  const lastIndex = 20;
  const getData = await getDataFromServer('posts', startIndex, lastIndex);
  const container = document.querySelector('#posts');
  let posts = '';

  getData.forEach(post => {
    const postHtml = `
      <div class="posts__post post">
        <h3 class="post__title">${post.title}</h3>
        <p class="post__text">${post.body}</p>
      </div>`;

    posts += postHtml;
  });

  window.addEventListener('scroll', () => {
    const windowScrollValue = window.innerHeight + window.scrollY;
    const bodyHeight = document.body.offsetHeight;

    // eslint-disable-next-line no-console, max-len
    console.log(windowScrollValue === bodyHeight);
  });

  container.innerHTML = posts;
}

getPosts();
