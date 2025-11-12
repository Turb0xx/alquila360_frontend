import { Inject, Injectable } from "@nestjs/common";
import AppDataSource from "src/data-source";
import { User } from "src/entity/user.entity";

@Injectable()
export class UserService {
    async createUser(user:User)
    {
        return await AppDataSource.getRepository(User).save(user);
    }

    async getAllUsers()
    {
        return await AppDataSource.getRepository(User).find();
    }
    async getUserById(id:number)
    {
        return await AppDataSource.getRepository(User).findOneBy({id}); 
    }
    async updateUser(id:number, userData : Partial<User>)
    {
        return await AppDataSource.getRepository(User).update(id, userData);
        return this.getUserById(id);
    }
    async deleteUser(id:number)
    {
        return await AppDataSource.getRepository(User).delete(id);
    }

}