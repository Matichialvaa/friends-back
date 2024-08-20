import {IsEmail, IsNotEmpty, IsOptional, IsString} from 'class-validator'
import {AddressDTO} from "@modules/address/dto";

export class CreateFriendDTO {
    @IsString()
    @IsNotEmpty()
    name!: string

    @IsEmail()
    @IsNotEmpty()
    email!: string

    @IsString()
    @IsOptional()
    phone?:string

    addresses?: AddressDTO[]
}

export class FriendDTO {
    constructor (friend: FriendDTO) {
        this.id = friend.id
        this.name = friend.name
        this.email = friend.email
        this.phone = friend.phone
        this.addresses = friend.addresses
    }

    id: string
    name: string
    email: string
    phone?: string | null
    addresses?: AddressDTO[]
}