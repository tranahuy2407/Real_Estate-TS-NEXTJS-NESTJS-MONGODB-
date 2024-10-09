import { IsEmpty } from "class-validator";
import { User } from "../../auth/schemas/user.schema";
import { Home } from "src/home/schemas/home.schema";

export class AddWishlistDto{

    @IsEmpty({message: "Không tìm thấy người dùng!"})
    readonly user: User;

    @IsEmpty({message: "Chưa tìm thấy nhà!"})
    readonly home: Home[];
}   