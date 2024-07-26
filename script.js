const tracks = [
    { name: 'Track 1', src: 'track1.mp3' }, // Add your own track URLs and names
    { name: 'Track 2', src: 'track2.mp3' },
    { name: 'Track 3', src: 'track3.mp3' }
];

let currentTrackIndex = 0;
const audio = new Audio(tracks[currentTrackIndex].src);
const playPauseButton = document.getElementById('play-pause');
const trackName = document.getElementById('track-name');
const progress = document.getElementById('progress');

trackName.textContent = tracks[currentTrackIndex].name;

function playPauseTrack() {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function playNextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    audio.src = tracks[currentTrackIndex].src;
    trackName.textContent = tracks[currentTrackIndex].name;
    audio.play();
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
}

function playPrevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    audio.src = tracks[currentTrackIndex].src;
    trackName.textContent = tracks[currentTrackIndex].name;
    audio.play();
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
}

audio.addEventListener('timeupdate', updateProgress);

function updateProgress() {
    const { duration, currentTime } = audio;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

document.getElementById('play-pause').addEventListener('click', playPauseTrack);
document.getElementById('next').addEventListener('click', playNextTrack);
document.getElementById('prev').addEventListener('click', playPrevTrack);
