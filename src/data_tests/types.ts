const types = [
    {
        "type": "normal",
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
        "description": "The Normal type is the most basic type of Pokémon. They are very common and appear from the very first route you visit. Most Normal Pokémon are single type, but there is a large contingent having a second type of Flying. Later games have added several more Normal Pokémon paired with different types."
    },
    {
        "type": "fire",
        "effectiveness": {
            "normal":   1,
            "fire":     0.5,
            "water":    0.5,
            "electric": 1,
            "grass":    2,
            "ice":      2,
            "fighting": 1,
            "poison":   1,
            "ground":   1,
            "flying":   1,
            "psychic":  1,
            "bug":      2,
            "rock":     0.5,
            "ghost":    1,
            "dragon":   0.5,
            "dark":     1,
            "steel":    2,
            "fairy":    1
        },
        "description": "Fire is one of the three basic elemental types along with Water and Grass, which constitute the three starter Pokémon. This creates a simple triangle to explain the type concept easily to new players. Fire types are notoriously rare in the early stages of the games so choosing the Fire variation starter is often a plus."
    },
    {
        "type": "water",
        "effectiveness": {
            "normal":   1,
            "fire":     2,
            "water":    0.5,
            "electric": 1,
            "grass":    0.5,
            "ice":      1,
            "fighting": 1,
            "poison":   1,
            "ground":   2,
            "flying":   1,
            "psychic":  1,
            "bug":      1,
            "rock":     2,
            "ghost":    1,
            "dragon":   0.5,
            "dark":     1,
            "steel":    1,
            "fairy":    1
        },
        "description": "Water is one of the three basic elemental types along with Fire and Grass, which constitute the three starter Pokémon. This creates a simple triangle to explain the type concept easily to new players. Water is the most common type with over 150 Pokémon, which are based on a wide variety of fish and other sea-dwelling creatures."
    },
    {
        "type": "electric",
        "effectiveness": {
            "normal":   1,
            "fire":     1,
            "water":    2,
            "electric": 0.5,
            "grass":    0.5,
            "ice":      1,
            "fighting": 1,
            "poison":   1,
            "ground":   0,
            "flying":   2,
            "psychic":  1,
            "bug":      1,
            "rock":     1,
            "ghost":    1,
            "dragon":   0.5,
            "dark":     1,
            "steel":    1,
            "fairy":    1
        },
        "description": "There are relatively few Electric Pokémon; in fact only four were added in the third generation. Most are based on rodents or inanimate objects. Electric Pokémon are very good defensively, being weak only to Ground moves."
    },
    {
        "type": "grass",
        "effectiveness": {
            "normal":   1,
            "fire":     0.5,
            "water":    2,
            "electric": 1,
            "grass":    0.5,
            "ice":      1,
            "fighting": 1,
            "poison":   0.5,
            "ground":   2,
            "flying":   0.5,
            "psychic":  1,
            "bug":      0.5,
            "rock":     2,
            "ghost":    1,
            "dragon":   0.5,
            "dark":     1,
            "steel":    0.5,
            "fairy":    1
        },
        "description": "Grass is one of the three basic elemental types along with Fire and Water, which constitute the three starter Pokémon. This creates a simple triangle to explain the type concept easily to new players. Grass is one of the weakest types statistically, with 5 defensive weaknesses and 7 types that are resistant to Grass moves."
    },
    {
        "type": "ice",
        "effectiveness": {
            "normal":   1,
            "fire":     0.5,
            "water":    0.5,
            "electric": 1,
            "grass":    2,
            "ice":      0.5,
            "fighting": 1,
            "poison":   1,
            "ground":   2,
            "flying":   2,
            "psychic":  1,
            "bug":      1,
            "rock":     1,
            "ghost":    1,
            "dragon":   2,
            "dark":     1,
            "steel":    0.5,
            "fairy":    1
        },
        "description": "Ice type Pokémon are now the rarest of all types: there are only around 60 in total (depending on how you count alternate forms or mega evolutions). They are ranked quite well defensively in terms of stats, although multiple type weaknesses let them down. Some are based on typical Arctic creatures like seals or yaks, while others are more mythical."
    },
    {
        "type": "fighting",
        "effectiveness": {
            "normal":   2,
            "fire":     1,
            "water":    1,
            "electric": 1,
            "grass":    1,
            "ice":      2,
            "fighting": 1,
            "poison":   0.5,
            "ground":   1,
            "flying":   0.5,
            "psychic":  0.5,
            "bug":      0.5,
            "rock":     2,
            "ghost":    0,
            "dragon":   1,
            "dark":     2,
            "steel":    2,
            "fairy":    0.5
        },
        "description": "Fighting Pokémon are strong and muscle-bound, often based on martial artists. Fighting moves are super-effective against five other types (as is Ground), making them very good offensively. Most Fighting type moves are in the Physical category, for obvious reasons."
    },
    {
        "type": "poison",
        "effectiveness": {
            "normal":   1,
            "fire":     1,
            "water":    1,
            "electric": 1,
            "grass":    2,
            "ice":      1,
            "fighting": 1,
            "poison":   0.5,
            "ground":   0.5,
            "flying":   1,
            "psychic":  1,
            "bug":      1,
            "rock":     0.5,
            "ghost":    0.5,
            "dragon":   1,
            "dark":     1,
            "steel":    0,
            "fairy":    2
        },
        "description": "The Poison type is regarded as one of the weakest offensively. Prior to Pokémon X/Y it was super-effective only against Grass (many of which are dual Poison so neutralizes the effect). From X/Y onward it has an extra advantage against the Fairy type. In the first generation it was also super-effective against Bug but this was changed. It fares a little better defensively but its best advantage is through status moves like Toxic."
    },
    {
        "type": "ground",
        "effectiveness": {
            "normal":   1,
            "fire":     2,
            "water":    1,
            "electric": 2,
            "grass":    0.5,
            "ice":      1,
            "fighting": 1,
            "poison":   2,
            "ground":   1,
            "flying":   0,
            "psychic":  1,
            "bug":      0.5,
            "rock":     2,
            "ghost":    1,
            "dragon":   1,
            "dark":     1,
            "steel":    2,
            "fairy":    1
        },
        "description": "Ground is one of the strongest types offensively: it is super-effective against five other types (as is Fighting) and Earthquake is one of the strongest moves in the game with power and accuracy both 100. In the first few generations many Ground type Pokémon were dual Rock types, lumbering them with 4x Grass and Water disadvantages; most newer Pokémon introduced avoid this now."
    },
    {
        "type": "flying",
        "effectiveness": {
            "normal":   1,
            "fire":     1,
            "water":    1,
            "electric": 0.5,
            "grass":    2,
            "ice":      1,
            "fighting": 2,
            "poison":   1,
            "ground":   1,
            "flying":   1,
            "psychic":  1,
            "bug":      2,
            "rock":     0.5,
            "ghost":    1,
            "dragon":   1,
            "dark":     1,
            "steel":    0.5,
            "fairy":    1
        },
        "description": "Most Flying type Pokémon are based on birds or insects, along with some mythical creatures like dragons. On average they are faster than any other type. Nearly every Flying type has Flying as the secondary type, usually with Normal. There are only three pure Flying type Pokémon (Tornadus, Rookidee, Corvisquire), and six Pokémon with Flying as a primary type (Noibat, Noivern, Corviknight, Cramorant, Bombirdier, Flamigo). As of Generation 6, the type has also been paired with every other type."
    },
    {
        "type": "psychic",
        "effectiveness": {
            "normal":   1,
            "fire":     1,
            "water":    1,
            "electric": 1,
            "grass":    1,
            "ice":      1,
            "fighting": 2,
            "poison":   2,
            "ground":   1,
            "flying":   1,
            "psychic":  0.5,
            "bug":      1,
            "rock":     1,
            "ghost":    1,
            "dragon":   1,
            "dark":     0,
            "steel":    0.5,
            "fairy":    1
        },
        "description": "The Psychic type has few outright strengths, however, it also has few weaknesses. In the first generation it ended up being massively overpowered, mainly due to a complete lack of powerful Bug moves, its only weakness. Furthermore, a mistake in the game meant that Ghost-type moves had no effect on Psychic (although this only affected the low-powered Lick). Generation 2 rectified the situation with the addition of the Dark type along with better Pokémon and moves of all types."
    },
    {
        "type": "bug",
        "effectiveness": {
            "normal":   1,
            "fire":     0.5,
            "water":    1,
            "electric": 1,
            "grass":    2,
            "ice":      1,
            "fighting": 0.5,
            "poison":   0.5,
            "ground":   1,
            "flying":   0.5,
            "psychic":  2,
            "bug":      1,
            "rock":     1,
            "ghost":    0.5,
            "dragon":   1,
            "dark":     2,
            "steel":    0.5,
            "fairy":    0.5
        },
        "description": "Most Bug Pokémon grow quickly and evolve sooner than other types. As a result, they are often very weak. In Generation I, bugs were almost useless since the few Bug type moves available were very weak. The situation improved in later games with better moves and an advantage against the Dark type."
    },
    {
        "type": "rock",
        "effectiveness": {
            "normal":   1,
            "fire":     2,
            "water":    1,
            "electric": 1,
            "grass":    1,
            "ice":      2,
            "fighting": 0.5,
            "poison":   1,
            "ground":   0.5,
            "flying":   2,
            "psychic":  1,
            "bug":      2,
            "rock":     1,
            "ghost":    1,
            "dragon":   1,
            "dark":     1,
            "steel":    0.5,
            "fairy":    1
        },
        "description": "Rock is a solid type as one might expect. Like Steel, Rock Pokémon usually have high defense - however, since many Rock Pokémon from earlier games were part Ground they had a 4x weakness to both Grass and Water whose moves often come as Special type."
    },
    {
        "type": "ghost",
        "effectiveness": {
            "normal":   0,
            "fire":     1,
            "water":    1,
            "electric": 1,
            "grass":    1,
            "ice":      1,
            "fighting": 1,
            "poison":   1,
            "ground":   1,
            "flying":   1,
            "psychic":  2,
            "bug":      1,
            "rock":     1,
            "ghost":    2,
            "dragon":   1,
            "dark":     0.5,
            "steel":    1,
            "fairy":    1
        },
        "description": "Ghosts are rare Pokémon, and the only type to have two immunities. Later games have added more to the roster so they now sit third from bottom in terms of numbers, above Ice and Fairy. In the first generation, Ghost moves has no effect on Psychic Pokémon, however, it was later changed to be super-effective. When paired with the Dark type it was the only type combination to have no weaknesses before the Fairy type was introduced in Gen 6."
    },
    {
        "type": "dragon",
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
            "rock":     1,
            "ghost":    1,
            "dragon":   2,
            "dark":     1,
            "steel":    0.5,
            "fairy":    0
        },
        "description": "Dragons are among the most elusive and powerful of all Pokémon. Nineteen legendary Pokémon are part Dragon type and eight have legendary-like stats (aka pseudo-legendary). They are notoriously difficult to train due to requiring more EXP points per level than most non-legendary Pokémon, and the fact they evolve much later means they are in their weaker forms for longer. Interestingly, many final-evolution Dragon types have a 4x weakness to the Ice type."
    },
    {
        "type": "dark",
        "effectiveness": {
            "normal":   1,
            "fire":     1,
            "water":    1,
            "electric": 1,
            "grass":    1,
            "ice":      1,
            "fighting": 0.5,
            "poison":   1,
            "ground":   1,
            "flying":   1,
            "psychic":  2,
            "bug":      1,
            "rock":     1,
            "ghost":    2,
            "dragon":   1,
            "dark":     0.5,
            "steel":    1,
            "fairy":    0.5
        },
        "description": "The Dark type was introduced in the second generation of Pokémon games as a measure to balance the types. In particular, its immunity to Psychic cut down that type's advantage by a long way. When paired with the Ghost type it was the only type combination to have no weaknesses before the Fairy type was introduced in Gen 6."
    },
    {
        "type": "steel",
        "effectiveness": {
            "normal":   1,
            "fire":     0.5,
            "water":    0.5,
            "electric": 0.5,
            "grass":    1,
            "ice":      2,
            "fighting": 1,
            "poison":   1,
            "ground":   1,
            "flying":   1,
            "psychic":  1,
            "bug":      1,
            "rock":     2,
            "ghost":    1,
            "dragon":   1,
            "dark":     1,
            "steel":    0.5,
            "fairy":    2
        },
        "description": "The Steel type was introduced in the second generation of Pokémon games. It is the strongest type defensively, with 10 types being not very effective against it and the Poison type having no effect. From Pokémon X/Y onwards, it lost its Ghost and Dark resistance, those types now dealing neutral damage. The Steel type also has the highest average Defense stat in the games."
    },
    {
        "type": "fairy",
        "effectiveness": {
            "normal":   1,
            "fire":     0.5,
            "water":    1,
            "electric": 1,
            "grass":    1,
            "ice":      1,
            "fighting": 2,
            "poison":   0.5,
            "ground":   1,
            "flying":   1,
            "psychic":  1,
            "bug":      1,
            "rock":     1,
            "ghost":    1,
            "dragon":   2,
            "dark":     2,
            "steel":    0.5,
            "fairy":    1
        },
        "description": "The Fairy type was introduced in Generation 6 - the first new type for more than 12 years! Its main intention was to balance the type chart by reducing the power of dragons, while also giving an offensive boost to the Poison and Steel types. Several old Pokémon were retyped and new Pokémon introduced, and in the years since the total number of Fairy type Pokémon has caught up somewhat with the other types."
    }
];

export default types;