

export const milliseconds_to_ms = (milliseconds) => {
  return seconds_format(milliseconds / 1000);
};

export const seconds_format = (milliseconds) => {
  const m = Math.floor(milliseconds / 60);
  let s = Math.round(milliseconds - m * 60);
  if (s === 0) {
    s = "00";
  } else if (s < 10) {
    s = `0${s}`;
  }
  return `${m}:${s}`;
};

export const process_itunes_album_result = (data) => {
  return data.map((item, i) => ({
    ...item,
    href: `/album/${item.collectionId}`,
    id: item.collectionId,
    imgSrcSm: item.artworkUrl100,
    imgSrcMd: item.artworkUrl100.replace('100x100', '270x270'),
  }))
}

export const process_itunes_tracks = (data) => data.map((item, i) => ({
  ...item,
  id: item.trackId,
  trackNumber: item.trackNumber,
  imgSrcSm: item.artworkUrl100,
  imgSrcMd: item.artworkUrl100.replace('100x100', '270x270'),
  imgAlt: item.trackName,
  name: item.trackName,
  artistName: item.artistName,
  artistLink: item.artistViewUrl,
  durationMillis: item.trackTimeMillis,
  source: 'itunes',
  previewUrl: item.previewUrl,
  albumUrl: `/album/${item.collectionId}`
}))

