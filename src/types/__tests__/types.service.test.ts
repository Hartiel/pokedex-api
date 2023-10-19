import { prismaMock } from './../../singleton';
import typeService from './../types.service';

let queryCreate = {
    "id": "65313a17f4167b3d2c0eb0ad",
    "type": "testType",
    "effectiveness": {
        "normal":   1,
        "fire":     1,
        "water":    1,
        "electric": 1,
        "grass":    1,
        "ice":      1,
        "fighting": 1,
        "poison":   1,
        "ground":   1,
        "flying":   1,
        "psychic":  1,
        "bug":      1,
        "rock":     0.5,
        "ghost":    0,
        "dragon":   1,
        "dark":     1,
        "steel":    0.5,
        "fairy":    1
    },
    "description": "The Normal type is the most basic type of Pokémon. They are very common and appear from the very first route you visit. Most Normal Pokémon are single type, but there is a large contingent having a second type of Flying. Later games have added several more Normal Pokémon paired with different types.",
    "pokemonIds": []
};

describe('types', () => {
    // TESTE CREATE
    it('should resolve with "Tipo criado" string', async () => {
        prismaMock.type.create.mockResolvedValue(queryCreate);
        await expect(typeService.create(queryCreate)).resolves.toEqual(queryCreate);
    });
});