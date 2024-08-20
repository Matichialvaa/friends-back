import {FriendDTO} from "@modules/friends/dto";
import {IsNotEmpty, IsOptional, IsString} from "class-validator";

export class CreateAddressDTO {
    @IsString()
    @IsNotEmpty()
    street!: string

    @IsString()
    @IsNotEmpty()
    city!: string

    @IsString()
    @IsNotEmpty()
    state!: string

    @IsString()
    @IsNotEmpty()
    code!: string

    @IsString()
    @IsOptional()
    friendId!: string


}

export class AddressDTO {
    id: string
    street : string
    city : string
    state : string
    code : string
    friendId : string
    constructor(address: AddressDTO) {
        this.id = address.id;
        this.street = address.street;
        this.city = address.city;
        this.state = address.state;
        this.code = address.code;
        this.friendId = address.friendId
    }

}