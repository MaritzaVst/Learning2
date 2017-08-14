/*Encargado de hacer los request a la APi */
import config from './coonfig'

const { apiKey } = config; // Esto es lo mismo que: 'const apiKey = config.apiKey'; 

const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=peru&api_key=${apiKey}&format=json`;

function getArtists() {
    fetch(url)
    .then(res => res.json())
    .then(json => json.topartists.artist)
}