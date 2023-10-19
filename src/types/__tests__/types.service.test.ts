import { prismaMock } from './../../singleton';
import typeService from './../types.service';
import typeTestData from './../../data_tests/types';

let query = {
    "id": "65313a17f4167b3d2c0eb0a1",
    "pokemonIds": [],
    ...typeTestData[0]
};

describe('types', () => {
    // TESTE CREATE
    it('should resolve with Type object', async () => {
        prismaMock.type.create.mockResolvedValue(query);
        const result = await typeService.create(query);
        query.id = result.id;
        expect(result).toEqual(query);
    });

    // TESTE GET ALL
    it('should resolve with Type[] object', async () => {
        prismaMock.type.findMany.mockResolvedValue([query]);
        await expect(typeService.getAll()).resolves.toEqual([query]);
    });

    // TESTE GET BY TYPE
    it('should resolve with Type object', async () => {
        prismaMock.type.findFirstOrThrow.mockResolvedValue(query);
        await expect(typeService.getByType('normal')).resolves.toEqual(query);
    });

    // TESTE UPDATE
    it('should resolve with Type object', async () => {
        query.type = 'changeTestType';
        prismaMock.type.upsert.mockResolvedValue(query);
        await expect(typeService.update(query.id, { type: 'changeTestType' })).resolves.toEqual(query);
    });

    // TESTE DELETE
    it('should resolve with "deleted" String', async () => {
        prismaMock.type.delete.mockResolvedValue(query);
        await expect(typeService.delete(query.id)).resolves.toEqual(query);
    });
});