import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { Mongoose } from "mongoose";
import { MongooseModule } from "@nestjs/mongoose";
import { UserDatabaseName, UserEntity, UserSchema } from "./schema/user.schema";
import { DB_CONNECTIONS_NAMES } from "../common/constants/db-connections-name";



@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: UserEntity.name,
                schema: UserSchema,
                collection: UserDatabaseName
            }
        ], DB_CONNECTIONS_NAMES.PRIMARY)
    ],
    providers: [UserService],
    controllers: [UserController],
    exports: [UserService]
})


export class UserModule { }