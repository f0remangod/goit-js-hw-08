import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const video = new Player('vimeo-player');
const currentStorageValue = localStorage.getItem(STORAGE_KEY);

if (currentStorageValue) {
  video.setCurrentTime(localStorage.getItem(STORAGE_KEY));
}

video.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}
