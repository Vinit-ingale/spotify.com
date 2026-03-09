import { getplaylist,data } from "../data/backend.js";
import { playlist , addSongToP} from "../data/cartPlaylist.js";



export function renderPlaying(song){

function addSongtoPlaylist(){
    const popup = document.querySelector('.js-popup');
  const addButton=document.querySelector('.js-addto-playlist')
  addButton.addEventListener('click',(event)=>{
    const songId=addButton.dataset.songId;
    const addSong=song
    
     const x = event.clientX;
     const y = event.clientY;

    popup.style.left = x +10+ 'px';
    popup.style.top = y-350 + 'px';
    popup.style.display="block"
    
    renderPopup(addSong,popup);
    document.querySelector('.js-cancel-btn').addEventListener('click',()=>{
      popup.style.display="none"
  })

  })
  
}
addSongtoPlaylist()

function renderPopup(addSong,popup){
    let popupHTML=''

    playlist.forEach(p => {
        if(p.followed){
            popupHTML+=`
             <div class="playlist-item js-playlist-item" data-playlist-id="${p.id}">
                    <img src=${p.img} alt="">
                    <p>${p.name}</p>
                    <span class="check">✔</span>
                    </div>
            `
        }
    });
    document.querySelector('.js-popup-playlist').innerHTML=popupHTML;

    document.querySelectorAll('.playlist-item').forEach((p)=>{
        p.addEventListener('click',()=>{
            const playlistId=p.dataset.playlistId
            const playlistData=playlist.find(playlist=> playlist.id===playlistId)
           addSongToP(playlistData,addSong)
            console.log(playlistData)
            console.log(addSong)
            popup.style.display="none"

        })
    })
}
 

}

