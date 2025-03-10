const URL = "https://api.mapbox.com/styles/v1/mapbox/streets-v12/static";
const TOKEN = process.env.MAPBOX_TOKEN;
const WIDTH = 300;
const HEIGHT = 500;
const ZOOM = 15;
const BEARING = 0;
const PITCH = 0;

export default function fetchStaticMapImage(lon: number, lat: number) {
    const url = `${URL}/${lon},${lat},${ZOOM},${BEARING},${PITCH}/${WIDTH}x${HEIGHT}@2x?access_token=${TOKEN}`;

    return fetch(url, {next: {revalidate: 3600}});
}