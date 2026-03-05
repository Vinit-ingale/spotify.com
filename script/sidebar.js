import { playlist } from "./data/backend.js";  
import { renderPlaylist } from "./playlist.js";
import { getplaylist} from "./data/backend.js";

let playlistHTML='';

playlist.forEach((playlist)=>{
  playlistHTML+=`
         
        <div class="sidebar-playlist  " data-playlist-id="${playlist.id}"> 
          <a href="playlist.html">
        <div class="colum1"><img class="sidebar-pf" src=${playlist.img}></div>
        <div class="colum2" ><p class="artist-name">${playlist.name}</p>
        <p class="playlist-name">${playlist.source}</p></div> 
        </a>
        </div>
        
      
  `
})

document.querySelector('.js-sidebar-playlist').innerHTML=playlistHTML;

document.querySelectorAll('.sidebar-playlist').forEach((playlist)=>{
    playlist.addEventListener('click',()=>{
    let playlistId=playlist.dataset.playlistId;
    localStorage.setItem('playlistId',JSON.stringify(playlistId));
   
    
})})