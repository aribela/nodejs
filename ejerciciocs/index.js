const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');

const main = async () => {
    let response = await axios.get('https://rickandmortyapi.com/api/character');

    let {data: {results}} = response;

    let cabeceras = "id,name,status,species\n";

    let characters = results.map((character)=> {
        return {
            id:character.id,
            name: character.name,
            status: character.status,
            species: character.species,
        }
    }).map((personaje) => Object.values(personaje).join(","))
    .join("\n");

    characters = cabeceras + characters;

    // console.log(__dirname);
    // console.log(characters);
    // console.log(path.join(__dirname, 'data.csv'));

    await fs.writeFile(path.join(__dirname, 'data.csv'),characters);
}

main();