import { Column, Entity } from "typeorm";
import commonEntity from "./commonEntity.ts";
@Entity()
class User extends commonEntity{
    @Column({type:"varchar"})
    Fullname: string;

    @Column({type:"text", unique:true})
    email: string;

    @Column({type:"text"})
    password: string;


}
export default User;