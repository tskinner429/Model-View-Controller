const commentFormHandler = async function (event) {
  event.preventDefault();

  const body = document.querySelector('textarea[name="comment-body"]').value;
  var splitURL = window.location.pathname.split('');
  var postId = splitURL[splitURL.length - 1];

  if (body) {
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        commentBody: body,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    document.location.reload();
  }
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);
