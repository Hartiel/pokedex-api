import { CreateType, UpdateType } from "./types.interface";
import { PrismaClient, Type } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();

const services = {
    async getAll(): Promise<Type[]> {
        return new Promise((resolve, reject) => {
            prisma.type.findMany({
                orderBy: [
                    { type: 'asc' },
                ],
            })
            .then((res: Type[]) => {
                if (res.length <= 0) reject(404);
                resolve(res);
            })
            .catch((err: Error) => reject(err));
        });
    },

    async getByType(type: string): Promise<Type> {
        return new Promise((resolve, reject) => {
            prisma.type.findFirstOrThrow({
                where: {
                    type: type,
                }
            })
            .then((res: Type) => resolve(res))
            .catch((err: Error) => reject(err));
        });
    },

    async create(type: CreateType): Promise<Type> {
        return new Promise((resolve, reject) => {
            prisma.type.create({ data: type })
            .then((res: Type) => resolve(res))
            .catch((err: Error) => reject(err));
        });
    },

    async update(id: string, type: UpdateType): Promise<Type> {
        return new Promise((resolve, reject) => {
            prisma.type.update({
                where: { id: id },
                data: type,
            })
            .then((res: Type) => resolve(res))
            .catch((err: Error) => reject(err));
        });
    },

    async delete(id: string): Promise<Type> {
        return new Promise((resolve, reject) => {
            prisma.type.delete({ where: { id: id } })
            .then((res: Type) => resolve(res))
            .catch((err: Error) => reject(err));
        });
    },
};

export default services;