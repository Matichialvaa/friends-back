import {AddressDTO, CreateAddressDTO} from "@modules/address/dto";

export interface AddressRepository {
    create(address: CreateAddressDTO): Promise<AddressDTO>;
    getAll(): Promise<AddressDTO[]>;
    delete(id: string): Promise<void>;
    update(id: string, address: Partial<CreateAddressDTO>): Promise<AddressDTO>;
}