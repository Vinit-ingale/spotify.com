export let playlist;

export function playlistloadFromStrorage (){

 playlist=JSON.parse(localStorage.getItem('playlist'))||[{
    id:'1',
    name:"anime ",
    img:"imges/dog.jpg",
    source:"myPlaylist",
    followed:true,
    songs:[{
          id:'11',
    name:"anime ",
    img:"imges/dog.jpg",
    plays:"123455",
    duration:"1:14",
    singer:"Hemesh Rashamiya"
    },{
          id:'12',
    name:"anime ",
    img:"imges/dog.jpg",
    plays:"123455",
    duration:"1:14",
    singer:"Hemesh Rashamiya"
    },{
          id:'13',
    name:"anime ",
    img:"imges/dog.jpg",
    plays:"123455",
    duration:"1:14",
    singer:"Hemesh Rashamiya"
    },{
          id:'14',
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
    source:"myPlaylist",
    followed:true,
    songs:[{
          id:'21',
    name:"anime ",
    img:"imges/dog.jpg",
    plays:"123455",
    duration:"1:14",
    singer:"Hemesh Rashamiya"
    },{
          id:'22',
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
          id:'24',
    name:"anime ",
    img:"imges/dog.jpg",
    plays:"123455",
    duration:"1:14",
    singer:"Hemesh Rashamiya"
    }]
},{ 
    id:'3',
    name:"anime songs",
    img:"imges/dog.jpg",
    source:"myPlaylist",
    followed:true,
     songs:[{
          id:'31',
    name:"anime ",
    img:"imges/dog.jpg",
    plays:"123455",
    duration:"1:14",
    singer:"Hemesh Rashamiya"
    },{
          id:'32',
    name:"anime ",
    img:"imges/dog.jpg",
    plays:"123455",
    duration:"1:14",
    singer:"Hemesh Rashamiya"
    },{
          id:'33',
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
    }]
},{
    id:'4',
    name:"anime songs",
    img:"imges/dog.jpg",
    source:"myPlaylist",
    followed:true,
     songs:[{
          id:'41',
    name:"anime ",
    img:"imges/dog.jpg",
    plays:"123455",
    duration:"1:14",
    singer:"Hemesh Rashamiya"
    },{
          id:'42',
    name:"anime ",
    img:"imges/dog.jpg",
    plays:"123455",
    duration:"1:14",
    singer:"Hemesh Rashamiya"
    },{
          id:'43',
    name:"anime ",
    img:"imges/dog.jpg",
    plays:"123455",
    duration:"1:14",
    singer:"Hemesh Rashamiya"
    },{
          id:'44',
    name:"anime ",
    img:"imges/dog.jpg",
    plays:"123455",
    duration:"1:14",
    singer:"Hemesh Rashamiya"
    }]
},{
    id:'5',
    name:"anime songs",
    img:"imges/dog.jpg",
    source:"myPlaylist",
    followed:true,
     songs:[{
          id:'51',
    name:"anime ",
    img:"imges/dog.jpg",
    plays:"123455",
    duration:"1:14",
    singer:"Hemesh Rashamiya"
    },{
          id:'52',
    name:"anime ",
    img:"imges/dog.jpg",
    plays:"123455",
    duration:"1:14",
    singer:"Hemesh Rashamiya"
    },{
          id:'53',
    name:"anime ",
    img:"imges/dog.jpg",
    plays:"123455",
    duration:"1:14",
    singer:"Hemesh Rashamiya"
    },{
          id:'54',
    name:"anime ",
    img:"imges/dog.jpg",
    plays:"123455",
    duration:"1:14",
    singer:"Hemesh Rashamiya"
    }]
},]}


export function playlistSavetoStorage(){
    localStorage.setItem('playlist',JSON.stringify(playlist))
}

export function getPlaylistSong(songData,songId){
    let matchingsong;

    songData.songs.forEach((song)=>{
        if(song.id === songId)
            matchingsong=song
    })
    return matchingsong
}

export function removePlaylist(playlistId){
   const newPlaylist=[];
    
   playlist.forEach((playlist)=>{
    if(playlist.id!== playlistId ){
        newPlaylist.push(playlist)
    }
   })
   playlist=newPlaylist
   playlistSavetoStorage()
   console.log(playlist+'removed')
   
   

}

export function addPlaylist(playlistId,tempPlaylist){
    const newPlaylist=[];

    tempPlaylist.forEach((playlist)=>{
      if(playlist.id===playlistId){
         newPlaylist=tempPlaylist;
         playlist=newPlaylist;
       
      }else{
          console.log('not in playlist')
           
      }
       
    })

}

export function toggleButton(playlistId){
      playlist.forEach((playlist)=>{
         if(playlist.id===playlistId){
            playlist.followed=!playlist.followed
         }
      })
      playlistSavetoStorage()
}


