import {Injectable} from "@nestjs/common";
import {IUser} from "../interfaces";

@Injectable()
export class UsersService {
    getAll(): IUser[] {
        return [] as IUser[]
    }
}
