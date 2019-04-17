import BayBridge from '../../assets/video/bay-bridge.mp4';
import PantherBeach from '../../assets/video/panther-beach.m4v';
import McwayFalls from '../../assets/video/mcway-falls.mp4';
import Sunset from '../../assets/video/sunset.m4v';
import Turtle from '../../assets/video/turtle.mp4';
import BadwaterBasin from '../../assets/video/badwater-basin.m4v';
import Dunes from '../../assets/video/dunes.mp4';



let Posts = {
  featured: 9,
  0: {
    title: 'Half Dome',
    src:   "https://drscdn.500px.org/photo/111533197/q%3D80_m%3D2000/v2?webp=true&sig=6532ba5a6390b4745312ccbddafd961af59785bec7e697cf95f6c03b568d5e49",
  },
  1: {
    title: 'Golden Gate',
    src:   "https://drscdn.500px.org/photo/287634029/q%3D80_m%3D2000/v2?webp=true&sig=0801750bed0baa3f7a9ea1dd3c38a57bde27774db05063d1af34f8daa2e26eeb",
  },
  2: {
    title: 'Delicate Arch',
    src:   "https://drscdn.500px.org/photo/297710733/q%3D80_m%3D2000/v2?webp=true&sig=892dc19c4e6b48811270c754acb4f9ac9cc875f04211bb99be685707636c4b08",
  },
  3: {
    title: 'Badwater Basin',
    src: BadwaterBasin,
  },
  4: {
    title: 'Dunes',
    src: Dunes,
  },
  5: {
    title: 'Sunset',
    src: Sunset
  },
  6: {
    title: 'Turtle',
    src: Turtle,
  },
  7: {
    title: 'Bay Bridge',
    src: BayBridge,
    contents: [
      "BayBridgeContent"
    ]
  },
  8: {
    title: 'Mcway Falls',
    src: McwayFalls,
  },
  9: {
    title: 'Panther Beach',
    src: PantherBeach,
    contents: [
      "PantherBeachContent"
    ]
  }
}

export default Posts;
