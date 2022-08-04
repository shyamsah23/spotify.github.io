console.log("Welcome To SpotiFy");
// audioElement.play();

let songIndex=0;
let audioElement=new Audio('Songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('progressBar');
let gif1=document.getElementById('gif1');
let gif2=document.getElementById('gif2');
let gif3=document.getElementById('gif3');
let gif4=document.getElementById('gif4');

let songItems=Array.from(document.getElementsByClassName('songItem'))


let songs =[
    {songname:"Rattan-Lambiyaan",filepath:"Songs/1.mp3",coverPath:"Covers/1.jfif"},
    {songname:"Tune-jo-na-kaha",filepath:"Song/s2.mp3",coverPath:"Covers/2.jfif"},
    {songname:"Chaand-Baliyaan",filepath:"Songs/3.mp3",coverPath:"Covers/3.jpg"},
    {songname:"Khamsohiyaan",filepath:"Songs/4.mp3",coverPath:"Covers/4.jpg"},
    {songname:"Rattan-Lambiyaan",filepath:"Songs/1.mp3",coverPath:"Covers/1.jfif"},
    {songname:"Rattan-Lambiyaan",filepath:"Songs/2.mp3",coverPath:"Covers/1.jfif"},
    {songname:"Rattan-Lambiyaan",filepath:"Songs/1.mp3",coverPath:"Covers/1.jfif"},
    {songname:"Rattan-Lambiyaan",filepath:"Songs/2.mp3",coverPath:"Covers/1.jfif"},
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML=songs[i].songname;
   
})

// Play Song

masterPlay.addEventListener('click', ()=>{
    if(audioElement.pause() || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif1.style.opacity=1;
        gif2.style.opacity=1;
        gif3.style.opacity=1;
        gif4.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        audioElement.currentTime=0;
        gif1.style.opacity=0;
        gif2.style.opacity=0;
        gif3.style.opacity=0;
        gif4.style.opacity=0;
        makeAllPlays();
    }
})

if(myProgressBar.value>audioElement.duration)
{
         audioElement.pause();
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        audioElement.currentTime=0;
        gif1.style.opacity=0;
        gif2.style.opacity=0;
        gif3.style.opacity=0;
        gif4.style.opacity=0;
}

// progressBar

audioElement.addEventListener('timeupdate', ()=>{
   // console.log(timeupdate);
    progress=(audioElement.currentTime/audioElement.duration)*100;
  //  console.log(progress);
    myProgressBar.value=progress;
})


myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=( myProgressBar.value*audioElement.duration)/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');       
        })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
      
        audioElement.src=`Songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif1.style.opacity=1;
        gif2.style.opacity=1;
        gif3.style.opacity=1;
        gif4.style.opacity=1;

        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        
       
        
    })
})

if(myProgressBar.value>=audioElement.duration)
{
    makeAllPlays();
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-play');
}

// exctra



// end
document.getElementById('prev').addEventListener('click',()=>{
    if(songIndex<0)
    {
        songIndex=8;
    }
    else{
    songIndex-=1;
    }
    makeAllPlays();
    audioElement.src=`Songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        
        gif1.style.opacity=1;
        gif2.style.opacity=1;
        gif3.style.opacity=1;
        gif4.style.opacity=1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

        
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>8)
    {
        songIndex=0;
    }
    else{
    songIndex+=1;
    }
    makeAllPlays();
    audioElement.src=`Songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif1.style.opacity=1;
        gif2.style.opacity=1;
        gif3.style.opacity=1;
        gif4.style.opacity=1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})