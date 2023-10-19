import { Request, Response, Router } from 'express';
import typesService from './types.service';
const router = Router();

router.get('/', async (req: Request, res: Response) => {
    await typesService.getAll()
    .then((result) => res.send({ message: 'Tipos encontrados', types: result }))
    .catch((err) => { 
        if (err === 404) { 
            res.status(err).send({ message: "Recurso não encontrado", err: err });
        } else {
            res.status(500).send({ message: "Erro ao buscar recurso", err: err });
        }
    });
});

router.post('/', async (req: Request, res: Response) => {
    await typesService.create(req.body.type)
    .then((result) => res.send({ message: 'Recurso criado', type: result }))
    .catch((err) => res.status(500).send({ message: "Erro ao criar recurso", erro: err}));
});

export default router;