import { initPosts } from './pages/posts';

try {
  (async() => {
    await initPosts();
  })();
} catch (err) {
  // eslint-disable-next-line no-console
  console.log(err);
}
