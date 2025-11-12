import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "src/entity/user.entity";
import { get } from "http";

@Controller('/user')
export class UserController {
    constructor(private readonly userService : UserService) {


    }
    
    @Post()
    createUser(@Body() user : User) {
        return this.userService.createUser(user);
    }

    @Get()
    getAllUser() {
        return this.userService.getAllUsers();
    }
    @Get('/:id')
    getUserById(@Param()param: any) {
        return this.userService.getUserById(param.id);
    }
    @Put('/:id')
    updateUser(@Param()param: any, @Body() user: User) {
        return this.userService.updateUser(param.id, user);
    }
    @Delete('/:id')
    deleteUser(@Param()param: any) {
        return this.userService.deleteUser(param.id);
    }
}