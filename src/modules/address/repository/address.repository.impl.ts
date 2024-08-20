import {AddressRepository} from "@modules/address/repository/address.repository";
import { PrismaClient } from "@prisma/client";
import {AddressDTO, CreateAddressDTO} from "../dto";

export class AddressRepositoryImpl implements AddressRepository {
    constructor(private readonly db: PrismaClient) {
    }

    async create(data: CreateAddressDTO): Promise<AddressDTO> {
        const address = await this.db.address.create({
            data
        })
        return new AddressDTO(address);
    }
    async getAll(): Promise<AddressDTO[]> {
        const addresses = await this.db.address.findMany();
        return addresses.map(address => new AddressDTO(address));
    }
    async delete(id: string): Promise<void>{
        //no devuelvo nada, solo borro.
        await this.db.address.delete({
            where: { id }
        });
    }

    async update(id: string, address: Partial<CreateAddressDTO>): Promise<AddressDTO> {
        const newAddress = await this.db.address.update({
            where: {id},
            data: address
        });
        return new AddressDTO(newAddress);
    }
}