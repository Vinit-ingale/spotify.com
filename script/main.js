import { data,artist } from "./data/backend.js";


let songHTML='';

data.forEach((song) => {
    songHTML+=`
      <div class="cover">
                <div class="song-cover"><img src=${song.img}>
                <button class="cover-button-play">&#9654</button></div>
                <div class="song-title">
                    <p class="song-name">${song.name}</p>
                    <p class="singer-name">${song.singer} </p>
                </div>
            </div>
    `
});
document.querySelector('.js-section-album').innerHTML=songHTML

let TopartistHTML='';

artist.forEach((artist)=>{
   TopartistHTML+=`
   <div class="cover">
                     <div class="artists-cover"><img src="imges/cat.jpg">
                     <button class="artist-button-play">&#9654</button></div>
                     <div class="song-title">
                         <p class="top-artist-name">Hemesh Rashamiya</p>
                         <p class="title">Artist</p>
                     </div>
                 </div>
   `

});
document.querySelector('.js-top-artist-section').innerHTML=TopartistHTML