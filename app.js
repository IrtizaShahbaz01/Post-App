function addPost() {
  const postContent = document.getElementById('postContent').value;
  if (postContent.trim() !== "") {
    const post = document.createElement('div');
    post.className = 'post';
    post.textContent = postContent;
    document.getElementById('posts').appendChild(post);
    document.getElementById('postContent').value = '';
  }
}

function changeTheme(theme) {
  const body = document.body;
  if (theme === 'light') {
    body.className = 'light-theme';
  } else if (theme === 'dark') {
    body.className = 'dark-theme';
  }
}
