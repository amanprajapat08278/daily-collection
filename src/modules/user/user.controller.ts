import { Controller, Post, Body } from '@nestjs/common'
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) { }

    @Post()
    async create(@Body() data: any) {
        return await this.userService.createUser(data)
    }


}