export interface CreatePokemon {
    "pokedex_id":       number,
    "name":             string,
    "description":      string,
    "species":          string,
    "height":           number,
    "weight":           number,
    "baseStats": {
        "hp":           number,
        "attack":       number,
        "defense":      number,
        "sp.attack":    number,
        "sp.defense":   number,
        "speed":        number,
    },
    "types"?:           string[],
    "evolutions"?:      string[],
    "devolutions"?:     string[],
}

export interface UpdatePokemon {
    "pokedex_id"?:      number,
    "name"?:            string,
    "description"?:     string,
    "species"?:         string,
    "height"?:          number,
    "weight"?:          number,
    "baseStats"?: {
        "hp"?:          number,
        "attack"?:      number,
        "defense"?:     number,
        "sp.attack"?:   number,
        "sp.defense"?:  number,
        "speed"?:       number,
    },
    "types"?:           string[],
    "evolutions"?:      string[],
    "devolutions"?:     string[],
}