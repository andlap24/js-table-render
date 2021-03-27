import { getDataFromServer } from '../api/api';

export async function initPosts() {
  try {
    const posts = await getPosts();

    if (posts) {
      renderPosts(posts, '#posts');
    } else {
      throw new Error('Error getting posts');
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);

    // TODO: show something to user in case of error
  }
}

async function getPosts(startIndex = 0, lastIndex = 20) {
  try {
    const posts = await getDataFromServer('posts', startIndex, lastIndex);

    return posts;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);

    throw new Error('Error while getting posts from server');
  }
}

function renderPosts(posts, parentContainerSelector = '#posts') {
  if (!Array.isArray(posts)) {
    throw new Error('Type of posts is not array');
  }

  const container = document.querySelector(parentContainerSelector);

  if (container) {
    let postsHtml = '';

    posts.forEach(post => {
      postsHtml += `
        <div class="posts__post post">
          <h3 class="post__title">${post.title}</h3>
          <p class="post__text">${post.body}</p>
        </div>`;
    });

    container.innerHTML += postsHtml;
  } else {
    throw new Error('There is no posts container in html');
  }
}
