import throttle from "lodash.throttle";
import Player from '@vimeo/player';

const TIME_DATA_PLAYER = "videoplayer-current-time"; 
const iframeEl = document.getElementById('vimeo-player')


const player = new Player(iframeEl);



player.on("timeupdate", throttle(function (data) {
     const time = data.seconds;
     console.log(time);

    localStorage.setItem(TIME_DATA_PLAYER, time)

},1000));

player.setCurrentTime(localStorage.getItem(TIME_DATA_PLAYER))








