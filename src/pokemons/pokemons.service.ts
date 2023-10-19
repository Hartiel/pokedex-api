import { CreatePokemon, UpdatePokemon } from "./pokemons.interface";
import { PrismaClient, Pokemon } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();

const services = {
    async getAll(): Promise<Pokemon[]> {
        return new Promise((resolve, reject) => {
            prisma.pokemon.findMany({
                orderBy: [
                    { name: 'asc' },
                ],
            })
            .then((res: Pokemon[]) => {
                if (res.length <= 0) reject(404);
                resolve(res);
            })
            .catch((err: Error) => reject(err));
        });
    },

    async getByName(pokemon: string): Promise<Pokemon> {
        return new Promise((resolve, reject) => {
            prisma.pokemon.findFirstOrThrow({
                where: {
                    name: pokemon,
                }
            })
            .then((res: Pokemon) => resolve(res))
            .catch((err: Error) => reject(err));
        });
    },

    async create(pokemon: CreatePokemon): Promise<Pokemon> {
        return new Promise((resolve, reject) => {
            prisma.pokemon.create({ data: {
                pokedex_id:         pokemon.pokedex_id,
                name:               pokemon.name,
                description:        pokemon.description,
                species:            pokemon.species,
                height:             pokemon.height,
                weight:             pokemon.weight,
                baseStats:          {
                    "hp":           pokemon.baseStats?.hp,
                    "attack":       pokemon.baseStats?.attack,
                    "defense":      pokemon.baseStats?.defense,
                    "sp.attack":    pokemon.baseStats?.["sp.attack"],
                    "sp.defense":   pokemon.baseStats?.["sp.attack"],
                    "speed":        pokemon.baseStats?.speed,
                },
                type:               {
                    connect: pokemon.types?.map((id) => {
                        return { id: id }
                    }),
                },
            } })
            .then((res: Pokemon) => resolve(res))
            .catch((err: Error) => reject(err));
        });
    },

    async update(id: string, pokemon: UpdatePokemon): Promise<Pokemon> {
        return new Promise((resolve, reject) => {

            prisma.pokemon.update({
                where: { id: id },
                data: {
                    ...pokemon,
                    type: {
                        connect: pokemon.types?.map((id) => {
                            return { id: id }
                        }),
                    },
                    evolutions: {
                        connect: pokemon.evolutions?.map((id) => {
                            return { id: id }
                        }),
                    },
                    devolutions: {
                        connect: pokemon.devolutions?.map((id) => {
                            return { id: id }
                        }),
                    },
                },
            })
            .then((res: Pokemon) => resolve(res))
            .catch((err: Error) => reject(err));
        });
    },

    async delete(id: string): Promise<Pokemon> {
        return new Promise((resolve, reject) => {
            prisma.pokemon.delete({ where: { id: id } })
            .then((res: Pokemon) => resolve(res))
            .catch((err: Error) => reject(err));
        });
    },
};

export default services;