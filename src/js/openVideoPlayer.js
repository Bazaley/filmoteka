import { renderVideo } from './renderVideoPlayer';
export { openVideo };

function openVideo(video) {
  const poster = document.querySelector('.poster');
  poster.addEventListener('click', onPosterClick.bind(this, video));
}

function onPosterClick(video) {
  renderVideo(video);
}
