const URL = "https://maps.geoapify.com/v1/staticmap";
const KEY = process.env.GEOAPIFY_KEY;
const WIDTH = 300;
const HEIGHT = 500;
const STYLE = "toner";
const ZOOM = 14;

export default function fetchStaticMapImage(lon: number, lat: number) {
    const url = `${URL}?center=lonlat:${lon},${lat}&width=${WIDTH}&height=${HEIGHT}&style=${STYLE}&zoom=${ZOOM}&apiKey=${KEY}`;

    return fetch(url, {next: {revalidate: 3600}});
}