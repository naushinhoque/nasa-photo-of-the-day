import React, { useState, useEffect } from "react";
import axios from 'axios';

import "./App.css";

import NasaPhoto from "./Components/NasaPhoto";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.error(err))
  }, [])
  return (
    <div className="App">
      { data && <NasaPhoto photo={data} /> }
    </div>
  );
}

export default App;

/**

const dummyData = {
  date: "2023-02-24",
  explanation: "Planetary nebula Jones-Emberson 1 is the death shroud of a dying Sun-like star. It lies some 1,600 light-years from Earth toward the sharp-eyed constellation Lynx. About 4 light-years across, the expanding remnant of the dying star's atmosphere was shrugged off into interstellar space, as the star's central supply of hydrogen and then helium for fusion was finally depleted after billions of years. Visible near the center of the planetary nebula is what remains of the stellar core, a blue-hot white dwarf star.  Also known as PK 164 +31.1, the nebula is faint and very difficult to glimpse at a telescope's eyepiece. But this deep broadband image combining 22 hours of exposure time does show it off in exceptional detail. Stars within our own Milky Way galaxy as well as background galaxies across the universe are scattered through the clear field of view. Ephemeral on the cosmic stage, Jones-Emberson 1 will fade away over the next few thousand years. Its hot, central white dwarf star will take billions of years to cool.",
  hdurl: "https://apod.nasa.gov/apod/image/2302/jonesemberson1.jpg",
  title: "Jones-Emberson 1"
}


date: "2023-02-24"
explanation: "Planetary nebula Jones-Emberson 1 is the death shroud of a dying Sun-like star. It lies some 1,600 light-years from Earth toward the sharp-eyed constellation Lynx. About 4 light-years across, the expanding remnant of the dying star's atmosphere was shrugged off into interstellar space, as the star's central supply of hydrogen and then helium for fusion was finally depleted after billions of years. Visible near the center of the planetary nebula is what remains of the stellar core, a blue-hot white dwarf star.  Also known as PK 164 +31.1, the nebula is faint and very difficult to glimpse at a telescope's eyepiece. But this deep broadband image combining 22 hours of exposure time does show it off in exceptional detail. Stars within our own Milky Way galaxy as well as background galaxies across the universe are scattered through the clear field of view. Ephemeral on the cosmic stage, Jones-Emberson 1 will fade away over the next few thousand years. Its hot, central white dwarf star will take billions of years to cool."
hdurl: "https://apod.nasa.gov/apod/image/2302/jonesemberson1.jpg"
title: "Jones-Emberson 1"

 */