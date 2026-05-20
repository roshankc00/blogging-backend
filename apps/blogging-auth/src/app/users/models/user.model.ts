
import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractModel } from '@blogging/nestjs';

@ObjectType()
export class User extends AbstractModel {
    @Field()
    email: string;
}