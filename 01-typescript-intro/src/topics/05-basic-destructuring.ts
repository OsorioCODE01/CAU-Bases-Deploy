interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}
interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 215,
  },
};
const song = "Sonido"; // si existen variables con nombres de esta manera lo mejor es renombra la variable de la desesctruruacion
const { song: anotherSong, songDuration: duration, details } = audioPlayer;
const { author } = details;

// console.log("song:", anotherSong);
// console.log("Duration", duration);
// console.log("author:", author);
const [, , trunks = "Not found"]: string[] = ["Goku", "Vegeta", "trunks"];
console.log("Personaje 3", trunks);

export {};
