import {getplaylist,loadDownbar ,data} from "./data/backend.js";
import { playlist, getPlaylistSong,playlistSavetoStorage, playlistloadFromStrorage,toggleButton} from "./data/cartPlaylist.js";
import { renderPlaying } from "./downbar/playing.js";

 playlistloadFromStrorage()

export async function renderPlaylist(){

 const container = document.querySelector('.js-playlist-song-list');
 const playlistId = JSON.parse(localStorage.getItem('playlistId'));
  let songData =  getplaylist(playlist,playlistId)
  console.log(songData)
 
  let playlistSongHTML='';
    
   if (!container) return;

  songData.songs.forEach((song,index)=>{
      playlistSongHTML+=`
    <div class="song js-song" data-id=${song.id}>
        <span class="index">${index+1}</span>
        <img src=${song.img} />
        <span class="title">${song.name}</span>
        <span class="plays">${song.plays}</span>
        <span class="duration">${song.duration}</span>
      </div>
      `
  })
  
document.querySelector('.js-playlist-song-list').innerHTML=playlistSongHTML;

let song=JSON.parse(localStorage.getItem('song'))
if(song){
  loadDownbar(song)
}

document.querySelectorAll('.js-song').forEach((button)=>{
button.addEventListener('click',()=>{
  let songId=button.dataset.id 
  localStorage.setItem('songId',JSON.stringify(songId))
  
  let song=getPlaylistSong(songData,songId)
 
 localStorage.setItem('song',JSON.stringify(song))
  loadDownbar(song)
   
})
})

followButton(playlistId)
renderPlaying(song,songData.songs)
playlistSavetoStorage()


}
document.addEventListener("DOMContentLoaded", () => {
  renderPlaylist();
});

function followButton(playlistId){
  const followbutton = document.querySelector('.js-follow-btn')
  const playlistData=playlist.find(p=> p.id==playlistId);

    if(playlistData.followed){
      followbutton.innerText='Following'
    }else {
      followbutton.innerText='Follow'
    }


   followbutton.addEventListener('click',()=>{

    toggleButton(playlistId)
  if(followbutton.innerText === 'Follow'){
      followbutton.innerText = 'Following'
      
  }
  else {
      followbutton.innerText = 'Follow'
  }
    

})
}





