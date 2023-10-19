export interface CreateType {
    "type":             string,
    "effectiveness": {
        "normal":       number,
        "fire":         number,
        "water":        number,
        "electric":     number,
        "grass":        number,
        "ice":          number,
        "fighting":     number,
        "poison":       number,
        "ground":       number,
        "flying":       number,
        "psychic":      number,
        "bug":          number,
        "rock":         number,
        "ghost":        number,
        "dragon":       number,
        "dark":         number,
        "steel":        number,
        "fairy":        number,
    },
    "description":      string,
}

export interface UpdateType {
    "type"?:             string,
    "effectiveness"?: {
        "normal"?:       number,
        "fire"?:         number,
        "water"?:        number,
        "electric"?:     number,
        "grass"?:        number,
        "ice"?:          number,
        "fighting"?:     number,
        "poison"?:       number,
        "ground"?:       number,
        "flying"?:       number,
        "psychic"?:      number,
        "bug"?:          number,
        "rock"?:         number,
        "ghost"?:        number,
        "dragon"?:       number,
        "dark"?:         number,
        "steel"?:        number,
        "fairy"?:        number,
    },
    "description"?:      string,
}