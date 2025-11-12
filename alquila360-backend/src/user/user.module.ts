import { Module } from "@nestjs/common";
import { userInfo } from "os";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
