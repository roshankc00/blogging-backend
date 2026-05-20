import { Injectable } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { hash } from 'bcryptjs';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(private readonly prismaService: PrismaService) { }

    async createUser(data: CreateUserDto) {
        return this.prismaService.user.create({
            data: {
                ...data,
                password: await hash(data.password, 10),
            },
        });
    }

    async getUsers() {
        return this.prismaService.user.findMany();
    }

    async getUser(args: Prisma.UserWhereUniqueInput) {
        return this.prismaService.user.findUniqueOrThrow({
            where: args,
        });
    }
}