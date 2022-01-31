import {Controller, Get} from "@nestjs/common";
import {IUser} from "../interfaces";
import {UsersService} from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {
    }

    @Get()
    getAll(): IUser[] {
        return this.usersService.getAll()
    }
}
