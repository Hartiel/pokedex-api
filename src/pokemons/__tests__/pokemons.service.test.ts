import { prismaMock } from './../../singleton';
import pokemonService from './../pokemons.service';
import typeTestData from './../../data_tests/types';
import pokemonTestData from './../../data_tests/pokemons'

// let queryType = {
//     "id": "65313a17f4167b3d2c0eb0a1",
//     "pokemonIds": [],
//     ...typeTestData[4]
// };

let query = {
    "id":               "",
    "pokedex_id":       pokemonTestData[0].pokedex_id,
    "name":             pokemonTestData[0].name,
    "description":      pokemonTestData[0].description,
    "species":          pokemonTestData[0].species,
    "height":           pokemonTestData[0].height,
    "weight":           pokemonTestData[0].weight,
    "baseStats": {
        "hp":           pokemonTestData[0].baseStats.hp,
        "attack":       pokemonTestData[0].baseStats.attack,
        "defense":      pokemonTestData[0].baseStats.defense,
        "sp.attack":    pokemonTestData[0].baseStats['sp.attack'],
        "sp.defense":   pokemonTestData[0].baseStats['sp.defense'],
        "speed":        pokemonTestData[0].baseStats.speed,
    },
    "typeIds":           [],
    "evolutionIds":      [],
    "devolutionIds":     [],
};

describe('pokemons', () => {
    // // TESTE CREATE
    it('should resolve with Pokemon object', async () => {
        const result = await pokemonService.create(query);
        query.id = result.id
        expect(result).toEqual(query);
    });

    // TESTE GET ALL
    it('should resolve with Pokemon[] object', async () => {
        await expect(pokemonService.getAll()).resolves.toEqual([query]);
    });

    // TESTE GET BY NAME
    it('should resolve with Pokemon object', async () => {
        await expect(pokemonService.getByName('bulbasaur')).resolves.toEqual(query);
    });

    // TESTE UPDATE
    it('should resolve with Pokemon object', async () => {
        query.name = 'changeTestPokemon';
        await expect(pokemonService.update(query.id, { name: 'changeTestPokemon' })).resolves.toEqual(query);
    });

    // TESTE DELETE
    it('should resolve with "deleted" String', async () => {
        await expect(pokemonService.delete(query.id)).resolves.toEqual(query);
    });
});