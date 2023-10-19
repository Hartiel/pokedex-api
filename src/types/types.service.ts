import { CreateType } from "./types.interface";
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
            .then((res) => {
                if (res.length <= 0) reject(404);
                resolve(res);
            })
            .catch((err: Error) => reject(err));
        });
    },

    async create(type: CreateType): Promise<Type> {
        return new Promise((resolve, reject) => {
            prisma.type.create({ data: type })
            .then((res) => resolve(res))
            .catch((err: Error) => reject(err));
        });
    },
};

export default services;