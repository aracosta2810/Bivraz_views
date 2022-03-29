const musicPLayerContainer = document.getElementById('MusicPlayerContainer')

document.getElementById('MusicPlayerButton').addEventListener('click', () => {
    if (musicPLayerContainer.className === 'music-player-container') {
        musicPLayerContainer.className = 'music-player-container music-player-container-hidden'
        playList.className = 'playlist playlist-hidden'
    }
    else musicPLayerContainer.className = 'music-player-container'
})

document.getElementById('closeButton').addEventListener('click', () => {
    musicPLayerContainer.className = 'music-player-container music-player-container-hidden'
    playList.className = 'playlist playlist-hidden'
})

//PLaylistButton
const playList = document.getElementById('playlist')
document.getElementById('playlistButton').addEventListener('click', () => {
    if(playList.className == 'playlist') playList.className = 'playlist playlist-hidden'
    else playList.className = 'playlist'
})


//Funcionalidades reproductor
const audio = document.querySelector('audio'),
      songLength = document.getElementById('SongLength')
      currentTime = document.getElementById('CurrentSongTime')

const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60),
          seconds = Math.floor(secs % 60),
          returnedSeconds = seconds < 10? `0${seconds}` : `${seconds}`

    return `${minutes}:${returnedSeconds}`
}

const displayDuration = () => {
    songLength.innerHTML = calculateTime(audio.duration)
}

if (audio.readyState > 0) {
    displayDuration()
    currentTime.innerHTML = calculateTime(audio.currentTime)
}else{
    audio.addEventListener('loadedmetadata', () => {
        displayDuration()
    })
}

audio.ontimeupdate = function () {
    currentTime.innerHTML = calculateTime(audio.currentTime)
    setProgress()
}

function setProgress(){
    let percentage = (audio.currentTime / audio.duration) * 100
    document.querySelector('.progress').style.width = percentage + '%'
}

//Audio Controls
const playPause = document.getElementById('PlayPause'),
      plus10 = document.getElementById('Plus10'),
      back10 = document.getElementById('Back10')

playPause.addEventListener('click', () => {
    if (audio.paused) {
        playPause.className = 'fa fa-pause icon'
        audio.play()
    }else{
        playPause.className = 'fa fa-play icon'
        audio.pause()
    }
})

plus10.addEventListener('click', () => {
    audio.currentTime += 10
})

back10.addEventListener('click', () => {
    audio.currentTime -= 10
})
