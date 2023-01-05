import { useState, useEffect } from 'react';
import './App.css';
import Player from './components/Player';

import img1 from "./assets/images/burnaboy-170.jpg";
import img2 from "./assets/images/burnaboy-170.jpg";
import img3 from "./assets/images/burnaboy-170.jpg";
import img4 from "./assets/images/burnaboy-170.jpg";
import img5 from "./assets/images/burnaboy-170.jpg";
import img6 from "./assets/images/burnaboy-170.jpg";
import img7 from "./assets/images/burnaboy-170.jpg";
import img8 from "./assets/images/burnaboy-170.jpg";
import img9 from "./assets/images/burnaboy-170.jpg";
import img10 from "./assets/images/burnaboy-170.jpg";
import img11 from "./assets/images/jacinto-1.jpg";
import img12 from "./assets/images/jacinto-2.jpg";
import img13 from "./assets/images/jacinto-3.jpg";
import img14 from "./assets/images/metric-1.jpg";


import mus1 from "./assets/music/Burna Boy - Cloak   Dagger (feat. J Hus).mp3";
import mus2 from "./assets/music/Burna Boy - Different Size (feat. Victony).mp3";
import mus3 from "./assets/music/Burna Boy - It s Plenty.mp3";
import mus4 from "./assets/music/Burna Boy - Science.mp3";
import mus5 from "./assets/music/Burna Boy - Whiskey.mp3"
import mus6 from "./assets/music/Burna Boy - Common Person.mp3"
import mus7 from "./assets/music/Burna Boy - Wild Dreams (feat. Khalid).mp3"
import mus8 from "./assets/music/Burna Boy - Rollercoaster (feat. J Balvin).mp3"
import mus9 from "./assets/music/Burna Boy - For My Hand (feat. Ed Sheeran).mp3"
import mus10 from "./assets/music/Burna Boy - Last Last.mp3"
import mus11 from "./assets/music/jacinto-1.mp3"
import mus12 from "./assets/music/jacinto-2.mp3"
import mus13 from "./assets/music/jacinto-3.mp3"
import mus14 from "./assets/music/metric-1.mp3"

function App() {
  const [songs] = useState([
    {
      title: "cloak dagger",
      artiste: "Burna Boy ft J.Hus",
      img_src: img1,
      src: mus1
    },
    {
      title: "different Size",
      artiste: "Burna Boy ft Victony",
      img_src: img2,
      src: mus2
    },
    {
      title: "it's Plenty",
      artiste: "Burna Boy",
      img_src: img3,
      src: mus3
    },
    {
      title: "science",
      artiste: "Burna Boy ft J.Hus",
      img_src: img4,
      src: mus4
    },
    {
      title: "whiskey",
      artiste: "Burna Boy",
      img_src: img5,
      src: mus5
    },
    {
      title: "common person",
      artiste: "Burna Boy ",
      img_src: img6,
      src: mus6
    },
    {
      title: "wild dreams",
      artiste: "Burna Boy feat. Khalid",
      img_src: img7,
      src: mus7
    },
    {
      title: "rollercoaster",
      artiste: "Burna Boy ft J Balvin",
      img_src: img8,
      src: mus8
    },
    {
      title: "for my hand",
      artiste: "Burna Boy ft Ed Sheeran",
      img_src: img9,
      src: mus9
    },
    {
      title: "last last",
      artiste: "Burna Boy",
      img_src: img10,
      src: mus10
    },
    {
      title: "Feel Yourself",
      artiste: "Jacinto",
      img_src: img11,
      src: mus11
    },
    {
      title: "Unconditional",
      artiste: "Jacinto",
      img_src: img12,
      src: mus12
    },
    {
      title: "Better",
      artiste: "Jacinto",
      img_src: img13,
      src: mus13
    }, 
    {
      title: "Hello Beautiful",
      artiste: "Jacinto",
      img_src: img14,
      src: mus14
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
  }, [currentSongIndex, songs.length]);
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
