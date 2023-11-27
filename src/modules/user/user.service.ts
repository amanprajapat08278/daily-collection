import { Injectable } from "@nestjs/common/decorators";
import { InjectModel } from "@nestjs/mongoose";
import { UserDocument, UserEntity } from "./schema/user.schema";
import { DB_CONNECTIONS_NAMES } from "../common/constants/db-connections-name";
import { Model } from "mongoose";
import { BadRequestException } from '@nestjs/common'


@Injectable()
export class UserService {
    constructor(
        @InjectModel(UserEntity.name, DB_CONNECTIONS_NAMES.PRIMARY)
        private UserModal: Model<UserDocument>
    ) { }


    async createUser(data: any): Promise<any> {
        try {
            const { contact } = data;
            if (!contact) { return { message: 'Contact is mandatory !' } }
            return await this.UserModal.create(data)

        } catch (e) {
            throw new BadRequestException(e)
        }
    }

}