import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { GraphQLResolveInfo } from 'graphql';

@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) { }

    @Mutation(() => User)
    async createUser(@Args('createUserInput') createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }

    @Query(() => [User], { name: 'users' })
    async getUsers(@Info() info: GraphQLResolveInfo) {
        console.log(info, "yoyoyo");
        return this.usersService.getUsers();
    }
}