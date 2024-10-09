import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose"
import { Role } from "../enums/role.enum";

@Schema({
   timestamps: true 
})
export class User extends Document{

    @Prop() 
    name:string

    @Prop({unique: [true, 'Nhập email trùng khớp!']}) 
    email:string

    @Prop() 
    password:string

    @Prop({
        type: [{type: String, enum: Role}],
        default: [Role.User]
    })
    role: Role[];

    @Prop({default:''})
    personaltaxcode: String;

    @Prop({default:''})
    phone: String[];
    
    @Prop({ 
        default: 'https://res.cloudinary.com/dmcfhbwbb/image/upload/v1727328075/Real%20-%20Estate/Auth/g64ogu7thcdltvgfcoas.jpg' 
    })
    avatar: string; 

}
export const UserSchema = SchemaFactory.createForClass(User)