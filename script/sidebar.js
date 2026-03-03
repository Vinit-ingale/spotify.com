import { playlist } from "./data/backend.js";  

let playlistHTML='';

playlist.forEach((playlist)=>{
  playlistHTML+=`
        <div class="sidebar-playlist ">
        <div class="colum1"><img class="sidebar-pf" src=${playlist.img}></div>
        <div class="colum2" ><p class="artist-name">${playlist.name}</p>
        <p class="playlist-name">${playlist.source}</p></div> 
        </div>
  `
})

document.querySelector('.js-sidebar-playlist').innerHTML=playlistHTML;
