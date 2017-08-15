/*Encargado de hacer los request a la APi */
import config from './config'

const { apiKey } = config; // Esto es lo mismo que: 'const apiKey = config.apiKey'; 

const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`;

export default function getArtists(country) {
    var URL = url.replace(':country', country)
    return fetch(URL)
    .then(res => res.json())
    .then(json => json.topartists.artist)
}