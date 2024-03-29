interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details
}

interface Details {
    author:string;
    year:string;
}

const audioPlayer:AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "LALA",
    details: {
        author: "Myke Towers",
        year: "2023"
    }
}
const {audioVolume:audioNea, song:musicSong, songDuration:duration, details} = audioPlayer;
const {author,year} = details;

console.log('Song: ', musicSong);
console.log('Duration: ', duration);
console.log('Author: ', author);
console.log('Volumen: ', audioNea);
console.log('Año: ', year);

const [,,trunks = 'Not Found']:string[] = ['Goku','Vegeta', 'Picoro'];

console.log('Personaje 3: ', trunks );



export{}