import { data,artist,getplaylist,loadDownbar } from "./data/backend.js";
import { playlist, playlistSavetoStorage,playlistloadFromStrorage } from "./data/cartPlaylist.js";


playlistloadFromStrorage()
let songHTML='';

data.forEach((song) => {
    songHTML+=`
      <div class="cover">
                <div class="song-cover"><img src=${song.img}>
                <button class="cover-button-play js-cover-button-play " data-song-id="${song.id}" >&#9654</button></div>
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
document.querySelector('.js-top-artist-section').innerHTML=TopartistHTML;

let song=JSON.parse(localStorage.getItem('song'))
if(song){
  loadDownbar(song)
}

document.querySelectorAll('.js-cover-button-play').forEach((button)=>{
    button.addEventListener('click',()=>{
        let songId=button.dataset.songId
        localStorage.setItem('songId',JSON.stringify(songId))
        let song=getplaylist(data,songId)
         
        localStorage.setItem('song',JSON.stringify(song))
        console.log(song)
       
      
        loadDownbar(song)
        

    })
})

function addSongtoPlaylist(){
  const addButton=document.querySelector('.js-addto-playlist')
  addButton.addEventListener('click',()=>{
    const songId=addButton.dataset.songId;
    const addSong=getplaylist(data,songId)
    
    
  })
}

addSongtoPlaylist()
 playlistSavetoStorage()
console.log(playlist)



