import { useState, useEffect } from 'react';
import './App.css';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "cloak dagger",
      artiste: "Burna Boy ft J.Hus",
      img_src: "./images/burnaboy-170.jpg",
      src: "./music/Burna Boy - Cloak   Dagger (feat. J Hus).mp3"
    },
    {
      title: "different Size",
      artiste: "Burna Boy ft Victony",
      img_src: "./images/burnaboy-170.jpg",
      src: "./music/Burna Boy - Different Size (feat. Victony).mp3"
    },
    {
      title: "it's Plenty",
      artiste: "Burna Boy",
      img_src: "./images/burnaboy-170.jpg",
      src: "./music/Burna Boy - It s Plenty.mp3"
    },
    {
      title: "science",
      artiste: "Burna Boy ft J.Hus",
      img_src: "./images/burnaboy-170.jpg",
      src: "./music/Burna Boy - Science.mp3"
    },
    {
      title: "whiskey",
      artiste: "Burna Boy",
      img_src: "./images/burnaboy-170.jpg",
      src: "./music/Burna Boy - Whiskey.mp3"
    },
    {
      title: "common person",
      artiste: "Burna Boy ",
      img_src: "./images/burnaboy-170.jpg",
      src: "./music/Burna Boy - Common Person.mp3"
    },
    {
      title: "wild dreams",
      artiste: "Burna Boy feat. Khalid",
      img_src: "./images/burnaboy-170.jpg",
      src: "./music/Burna Boy - Wild Dreams (feat. Khalid).mp3"
    },
    {
      title: "rollercoaster",
      artiste: "Burna Boy ft J Balvin",
      img_src: "./images/burnaboy-170.jpg",
      src: "./music/Burna Boy - Rollercoaster (feat. J Balvin).mp3"
    },
    {
      title: "for my hand",
      artiste: "Burna Boy ft Ed Sheeran",
      img_src: "./images/burnaboy-170.jpg",
      src: "./music/Burna Boy - For My Hand (feat. Ed Sheeran).mp3"
    },
    {
      title: "last last",
      artiste: "Burna Boy",
      img_src: "./images/burnaboy-170.jpg",
      src: "./music/Burna Boy - Last Last.mp3"
    },
    {
      title: "Feel Yourself",
      artiste: "Jacinto",
      img_src: "./images/jacinto-1.jpg",
      src: "./music/jacinto-1.mp3"
    },
    {
      title: "Unconditional",
      artiste: "Jacinto",
      img_src: "./images/jacinto-2.jpg",
      src: "./music/jacinto-2.mp3"
    },
    {
      title: "Better",
      artiste: "Jacinto",
      img_src: "./images/jacinto-3.jpg",
      src: "./music/jacinto-3.mp3"
    }, 
    {
      title: "Hello Beautiful",
      artiste: "Jacinto",
      img_src: "./images/metric-1.jpg",
      src: "./music/metric-1.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(()=> {
      setNextSongIndex(() => {
          if (currentSongIndex + 1 > songs.length - 1){
            return 0;
          } else {
            return currentSongIndex + 1;
          }
      });
  }, [currentSongIndex]);
  return (
    <div className="App">
      <Player currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
              nextSongIndex={nextSongIndex}
              songs={songs}/>
    </div>
  );
}

export default App;
