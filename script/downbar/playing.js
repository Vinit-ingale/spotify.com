import { getplaylist,data ,loadDownbar} from "../data/backend.js";
import { playlist , addSongToP} from "../data/cartPlaylist.js";



export function renderPlaying(song , datalist){

    const  audio=document.querySelector('.audio');
    const playBtn=document.querySelector('.js-play-button');
    const nextBtn=document.querySelector('.js-next-button');
    const prevBtn=document.querySelector('.js-prev-button');

    let currentSong=datalist.findIndex(s=> s.id===song.id);
    let isPlaying=false;

function addSongtoPlaylist(){
    const popup = document.querySelector('.js-popup');
  const addButton=document.querySelector('.js-addto-playlist')
  addButton.onclick=(event)=>{
    const songId=addButton.dataset.songId;
    const addSong=song
    
     const x = event.clientX;
     const y = event.clientY;

    popup.style.left = x +10+ 'px';
   popup.style.top = Math.max(20, y - 350) + 'px';
    popup.style.display="block"
    
    renderPopup(addSong,popup);
    document.querySelector('.js-cancel-btn').addEventListener('click',()=>{
      popup.style.display="none"
  })

  }
  
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


 loadSong(song)
function loadSong(song){
    audio.src=song.audio
}

playBtn.addEventListener('click',()=>{
    if (isPlaying){
        audio.pause()
        playBtn.innerHTML="▶"

    }else {
        audio.play()
        playBtn.innerHTML="⏸"
    }
    isPlaying=!isPlaying
});
  audio.addEventListener('timeupdate', () => {
        const {duration,currentTime} = audio;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = progressPercent + "%";
        songcurrentTime.innerHTML=formatTime(audio.currentTime);
        document.querySelector('.js-duration').innerHTML=formatTime(audio.duration)
        });
        progressContainer.addEventListener('click',(e)=>{
            const width = progressContainer.clientWidth;
            const clickX = e.offsetX;
            const duration = audio.duration;
            audio.currentTime = (clickX / width) * duration;
         });

         function formatTime(time){
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);

            return `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
          }


nextBtn.addEventListener('click',()=>{
      currentSong++;

    if(currentSong >= datalist.length){
        currentSong = 0;
    }

    loadSong(datalist[currentSong]);
    audio.play();
    playBtn.innerHTML="⏸";
    isPlaying = true;
    updateDownbar(datalist[currentSong])
    
})

prevBtn.addEventListener('click',()=>{
     currentSong--;

    if(currentSong<0){
        currentSong=datalist.length-1
    }

    loadSong(datalist[currentSong])
    audio.play();
    playBtn.innerHTML="⏸";
    isPlaying=true;
    updateDownbar(datalist[currentSong])
});

function updateDownbar(song){
    document.querySelector('.song-picture').src=song.img;
    document.querySelector('.music-name').textContent=song.name;
    document.querySelector('.Artist').textContent=song.singer;
    document.querySelector('.js-addto-playlist').dataset.songId=song.id;
    localStorage.setItem('song',JSON.stringify(song))
    if(song){
      loadDownbar(song)
    }
}
}

const progress = document.querySelector('.js-progress');
const progressContainer = document.querySelector('.js-progress-container');
let songcurrentTime=document.querySelector('.js-current-time')



