export const data=[{
    id:'1',
    name:"Blinding Lights",
    img:"imges/dog.jpg",
    singer:"Hemesh Rashamiya",
    keyword:"recommended",
    duration:"4.15",
    plays:"123456",
     audio:"audio/Edsheeran_Shape_Of_You.mp3"
},{
    id:'2',
    name:"Shape of You",
    img:"imges/cat.jpg",
    singer:"The Weeknd",
    keyword:"recommended",
    duration:"4.15",
    plays:"123456",
    audio:"audio/Edsheeran_Shape_Of_You.mp3"
},{
    id:'3',
    name:"Kesariya",
    img:"imges/cat.jpg",
    singer:"Arijit Singh",
    keyword:"recommended",
    duration:"4.15",
    plays:"123456",
     audio:"audio/Edsheeran_Shape_Of_You.mp3"
},{
    id:'4',
    name:"Believer",
    img:"imges/cat.jpg",
    singer:"Imagine Dragons",
    keyword:"recommended",
    duration:"4.15",
    plays:"123456",
     audio:"audio/Edsheeran_Shape_Of_You.mp3"
},{
    id:'5',
    name:"Tum Hi Ho",
    img:"imges/cat.jpg",
    singer:"Arijit Singh",
    keyword:"recommended",
    duration:"4.15",
    plays:"123456",
     audio:"audio/Edsheeran_Shape_Of_You.mp3"
},{
    id:'6',
    name:"On My Way",
    img:"imges/cat.jpg",
    singer:"Alan Walker",
    keyword:"recommended",
    duration:"4.15",
    plays:"123456",
     audio:"audio/Edsheeran_Shape_Of_You.mp3"
},{
    id:'7',
    name:"Perfect",
    img:"imges/cat.jpg",
    singer:"Ed Sheeran",
    keyword:"recommended",
    duration:"4.15",
    plays:"123456",
     audio:"audio/Edsheeran_Shape_Of_You.mp3"
},{
    name:"Hemesh Rashamiya",
    img:"imges/cat.jpg",
    keyword:"top-artist",
    songs:[{
        id:'artist-11',
        name:"happy place",
        img:"imges/cat.jpg",
        singer:"Hemesh Rashamiya",
        duration:"4.15",
        plays:"123456"
    }]
},{
    name:"Hemesh Rashamiya",
    img:"imges/cat.jpg",
    keyword:"top-artist"
},{
    name:"Hemesh Rashamiya",
    img:"imges/cat.jpg",
    keyword:"top-artist"
},{
    name:"Hemesh Rashamiya",
    img:"imges/cat.jpg",
    keyword:"top-artist"
},{
    name:"Hemesh Rashamiya",
    img:"imges/cat.jpg",
    keyword:"top-artist"
},{
    name:"Hemesh Rashamiya",
    img:"imges/cat.jpg",
    keyword:"top-artist"
},{
    name:"Hemesh Rashamiya",
    img:"imges/cat.jpg",
    keyword:"top-artist"
}
]


export function getplaylist(dataList,songId){
    let matchingsong;
    
    dataList.forEach((song)=>{
        if(song.id === songId)
            matchingsong=song
       
    })
    return matchingsong
  
}


export function loadDownbar(song){
        document.querySelector('.js-playing').innerHTML=`
           <div class="downbar-column1" ><img class="song-picture" src=${song.img}></div>
            <div class="downbar-column2"><p  class="music-name">${song.name}</p>
                 <p class="Artist">${song.singer}</p></div>
                 <div class="addto-playlist js-addto-playlist" data-song-id="${song.id}"><button>+</button></div>
        `
        }

