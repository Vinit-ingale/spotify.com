export const data=[{
    id:'1',
    name:"hello",
    img:"imges/dog.jpg",
    singer:"Hemesh Rashamiya",
    keyword:"recommended"
},{
    id:'2',
    name:"hi",
    img:"imges/cat.jpg",
    singer:"Hemesh Rashamiya",
    keyword:"recommended"
},{
    id:'3',
    name:"Sanam tere kisam",
    img:"imges/cat.jpg",
    singer:"Hemesh Rashamiya",
    keyword:"recommended"
},{
    id:'4',
    name:"Sanam tere kisam",
    img:"imges/cat.jpg",
    singer:"Hemesh Rashamiya",
    keyword:"recommended"
},{
    id:'5',
    name:"Sanam tere kisam",
    img:"imges/cat.jpg",
    singer:"Hemesh Rashamiya",
    keyword:"recommended"
},{
    id:'6',
    name:"Sanam tere kisam",
    img:"imges/cat.jpg",
    singer:"Hemesh Rashamiya",
    keyword:"recommended"
},{
    id:'7',
    name:"Sanam tere kisam",
    img:"imges/cat.jpg",
    singer:"Hemesh Rashamiya",
    keyword:"recommended"
},
]

export const artist =[{
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
},{
    name:"Hemesh Rashamiya",
    img:"imges/cat.jpg",
    keyword:"top-artist"
}

]

export const playlist=[{
    id:'1',
    name:"anime ",
    img:"imges/dog.jpg",
    source:"myPlaylist",
    songs:[{
          id:'12',
    name:"anime ",
    img:"imges/dog.jpg",
    plays:"123455",
    duration:"1:14",
    singer:"Hemesh Rashamiya"
    },{
          id:'23',
    name:"anime ",
    img:"imges/dog.jpg",
    plays:"123455",
    duration:"1:14",
    singer:"Hemesh Rashamiya"
    },{
          id:'34',
    name:"anime ",
    img:"imges/dog.jpg",
    plays:"123455",
    duration:"1:14",
    singer:"Hemesh Rashamiya"
    },{
          id:'45',
    name:"anime ",
    img:"imges/dog.jpg",
    plays:"123455",
    duration:"1:14",
    singer:"Hemesh Rashamiya"
    }]
},{ 
    id:'2',
    name:"anime songs",
    img:"imges/dog.jpg",
    source:"myPlaylist"
},{ 
    id:'3',
    name:"anime songs",
    img:"imges/dog.jpg",
    source:"myPlaylist"
},{
    id:'4',
    name:"anime songs",
    img:"imges/dog.jpg",
    source:"myPlaylist"
},{
    id:'5',
    name:"anime songs",
    img:"imges/dog.jpg",
    source:"myPlaylist"
},]


export function getplaylist(dataList,songId){
    let matchingsong;
    
    dataList.forEach((song)=>{
        if(song.id === songId)
            matchingsong=song
       
    })
    return matchingsong
  
}

export function getPlaylistSong(songData,songId){
    let matchingsong;

    songData.songs.forEach((song)=>{
        if(song.id === songId)
            matchingsong=song
    })
    return matchingsong
}


export function loadDownbar(song){
        document.querySelector('.js-playing').innerHTML=`
           <div class="downbar-column1"><img class="song-picture" src=${song.img}></div>
            <div class="downbar-column2"><p  class="music-name">${song.name}</p>
                 <p class="Artist">${song.singer}</p></div>
                 <div class="addto-playlist"><button>+</button></div>
        `
        }

