const backdropVideo = document.querySelector('.backdrop-video');

export { renderVideo };

function renderVideo(video) {
  const markup = `
  <iframe
  class="video"
  width="100%"
  height="70%"
  src="https://www.youtube.com/embed/${video.key}"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
  `;
  backdropVideo.innerHTML = markup;
  backdropVideo.classList.remove('is-hidden');
  backdropVideo.addEventListener('click', onBackKey);
  document.addEventListener('keydown', onDocKeydown);
}

function onBackKey(e) {
  if (e.target.classList.value === 'backdrop-video') {
    closeVideoPlayer();
  }
}

function onDocKeydown(e) {
  if (e.key === 'Escape') {
    closeVideoPlayer();
  }
}

function closeVideoPlayer() {
  document.removeEventListener('keydown', onDocKeydown);
  backdropVideo.removeEventListener('click', onBackKey);
  backdropVideo.classList.add('is-hidden');
  backdropVideo.innerHTML = '';
}
