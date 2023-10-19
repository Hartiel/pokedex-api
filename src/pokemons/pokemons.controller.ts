import { Request, Response, Router } from 'express';
import pokemonsService from './pokemons.service';
const router = Router();

router.get('/', async (req: Request, res: Response) => {
    await pokemonsService.getAll()
    .then((result) => res.send({ message: 'Recurso encontrados', pokemons: result }))
    .catch((err) => { 
        if (err === 404) { 
            res.status(err).send({ message: "Recurso não encontrado", err: err });
        } else {
            res.status(500).send({ message: "Erro ao buscar recurso", err: err });
        }
    });
});

router.get('/:pokemon', async(req: Request, res: Response) => {
    await pokemonsService.getByName(req.params.pokemon)
    .then((result) => res.send({ message: 'Recurso encontrados', pokemons: result }))
    .catch((err) => {
        if (err === 404) { 
            res.status(err).send({ message: "Recurso não encontrado", err: err });
        } else {
            res.status(500).send({ message: "Erro ao buscar recurso", err: err });
        }
    });
});

router.post('/', async (req: Request, res: Response) => {
    await pokemonsService.create(req.body.pokemon)
    .then((result) => res.send({ message: 'Recurso criado', pokemon: result }))
    .catch((err) => res.status(500).send({ message: "Erro ao criar recurso", erro: err}));
});

router.patch('/:id', async (req: Request, res: Response) => {
    await pokemonsService.update(req.params.id, req.body.pokemon)
    .then((result) => res.send({ message: 'Recurso atualizado', pokemon: result }))
    .catch((err) => res.status(500).send({ message: "Erro ao atualizar recurso", erro: err}));
});

router.delete('/:id', async (req: Request, res: Response) => {
    await pokemonsService.delete(req.params.id)
    .then((result) => res.send({ message: 'Recurso apagado', pokemon: result }))
    .catch((err) => res.status(500).send({ message: "Erro ao apagar recurso", erro: err}));
});

export default router;