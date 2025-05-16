import dishChannels from '../values/dishChannels';

export default function Counter() {
  let hdChannels = 0;
  let top120 = 0;
  let top120plus = 0;
  let top200 = 0;
  let top250 = 0;
  for (const key in dishChannels) {
    if (dishChannels[key][1]) {
      hdChannels += 1;
    }
    if (dishChannels[key][2].includes(1)) {
      top120 += 1;
    }
    if (dishChannels[key][2].includes(2)) {
      top120plus += 1;
    }
    if (dishChannels[key][2].includes(3)) {
      top200 += 1;
    }
    if (dishChannels[key][2].includes(4)) {
      top250 += 1;
    }
  }

  return (
    <p>
      Channels: <b>{Object.keys(dishChannels).length}</b> <br />
      HD Channels: <b>{hdChannels}</b> <br />
      Channels In "America's Top 120": <b>{top120}</b> <br />
      Channels In "America's Top 120 Plus": <b>{top120plus}</b> <br />
      Channels In "America's Top 200": <b>{top200}</b> <br />
      Channels In "America's Top 250": <b>{top250}</b> <br />
    </p>
  );
}
