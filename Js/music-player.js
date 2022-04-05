const musicPLayerContainer = document.getElementById('MusicPlayerContainer')
const playList = document.getElementById('playlist')

// Music player Button
document.getElementById('MusicPlayerButton').addEventListener('click', () => {
    if (musicPLayerContainer.className === 'music-player-container') {
        musicPLayerContainer.className = 'music-player-container music-player-container-hidden'
        playList.className = 'playlist playlist-hidden'
    }
    else {
        musicPLayerContainer.className = 'music-player-container'
        document.getElementById('MusicPlayerButton').className = 'float-music-player-button float-music-player-button-hidden rounded-circle d-flex justify-content-center align-items-center'
    }
})
// Hide Button
document.getElementById('closeButton').addEventListener('click', () => {
    musicPLayerContainer.className = 'music-player-container music-player-container-hidden'
    playList.className = 'playlist playlist-hidden'
    document.getElementById('MusicPlayerButton').className = 'float-music-player-button rounded-circle d-flex justify-content-center align-items-center'
})

//PLaylistButton
document.getElementById('playlistButton').addEventListener('click', () => {
    if (playList.className == 'playlist') playList.className = 'playlist playlist-hidden'
    else playList.className = 'playlist'
})

//Audio Controls
const audio = document.querySelector('audio')
const playPause = document.getElementById('PlayPause'),
    fowardStep = document.getElementById('FowardStep'),
    backwardStep = document.getElementById('BackwardStep'),
    randomRepeat = document.getElementById('RandomRepeat'),
    songTitle = document.getElementById('songTitle'),
    songArtist = document.getElementById('songArtist')

playPause.addEventListener('click', () => {
    if (audio.paused) {
        playPause.className = 'fa fa-pause icon px-1'
        audio.play()
    } else {
        playPause.className = 'fa fa-play icon'
        audio.pause()
    }

})
//Random, repeat or repeat once 
randomRepeat.addEventListener('click', () => {
    let text = randomRepeat.innerHTML

    switch (text) {
        case 'repeat':
            randomRepeat.innerHTML = 'repeat_one'
            break;
        case 'repeat_one':
            randomRepeat.innerHTML = 'shuffle'
            break;
        default:
            randomRepeat.innerHTML = 'repeat'
            break;
    }
})

// Next song
fowardStep.addEventListener('click', () => {
    let playingSongId;
    // To select current song id
    playlistContainer.childNodes.forEach(item => {
        if (item.className !== undefined && item.className.indexOf('active') !== -1) playingSongId = item.id
    })

    for (let i = 0; i < songs.length; i++) {
        if (songs[i].id == playingSongId) {
            if (i + 1 === songs.length) i = 0
            else i += 1

            audio.src = songs[i].song
            songTitle.innerHTML = songs[i].title
            songArtist.innerHTML = songs[i].artist
            refreshPlaylist(songs[i].id)
            break
        }
    }


    playPause.className = 'fa fa-pause icon px-1'
    audio.play()
})
//--------------------------------------------

// Previous song
backwardStep.addEventListener('click', () => {
    let playingSongId;
    // To select current song id
    playlistContainer.childNodes.forEach(item => {
        if (item.className !== undefined && item.className.indexOf('active') !== -1) playingSongId = item.id
    })

    for (let i = 0; i < songs.length; i++) {
        if (songs[i].id == playingSongId) {
            if (i - 1 < 0) i = songs.length - 1
            else i -= 1

            audio.src = songs[i].song
            songTitle.innerHTML = songs[i].title
            songArtist.innerHTML = songs[i].artist
            refreshPlaylist(songs[i].id)
            break
        }
    }


    playPause.className = 'fa fa-pause icon px-1'
    audio.play()
})
// ---------------------------------------------

// Playlist
const songs = [
    { id: 1, title: 'Amor Foda', artist: 'Bad Bunny', song: '../assets/Music/Bad Bunny - Amor Foda .mp3' },
    { id: 2, title: 'Blinding Lights', artist: 'Rosalia Ft The Weeknd ', song: '../assets/Music/Rosalia Ft The Weeknd - Blinding Lights(www.AbdelLaEsenciayEstudiosOdisea.com).mp4' },
    { id: 3, title: 'Amor Foda', artist: 'Bad Bunny', song: '../assets/Music/Bad Bunny - Amor Foda .mp3' },
    { id: 4, title: 'High Hopes ', artist: 'Panic_ At The Disco', song: '../assets/Music/Panic_ At The Disco - High Hopes (Official Video)(720P_HD).mp4' },
]

const playlistContainer = document.getElementById('playlist-container')

// Update playlist with an id to put the active class on the current song
const refreshPlaylist = (currentSongId) => {
    playlistContainer.innerHTML = ''

    songs.forEach(item => {
        playlistContainer.innerHTML += ` 
        <div 
            id="${item.id}" 
            class="title_song overflow-hidden py-1 px-2 ${item.id === currentSongId ? 'active' : ''}">
          ${item.title}<br>
          <span>${item.artist}</span>
        </div>
      `
    })
}

refreshPlaylist(1)

