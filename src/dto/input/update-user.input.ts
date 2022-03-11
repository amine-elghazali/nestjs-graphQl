import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class UpdateUserInput {
    @Field()
    @IsNotEmpty()
    userId: string;

    @Field()
    @IsOptional()
    @IsNotEmpty()
    @Field({ nullable: true })
    age?: number;

    @Field({ nullable: true })
    @IsOptional()
    isSubscribed?: boolean
}