import {AddressService} from "@modules/address/service/address.service";
import {AddressRepository} from "@modules/address/repository/address.repository";
import {AddressDTO, CreateAddressDTO} from "@modules/address/dto";

export class AddressServiceImpl implements AddressService {
    constructor(private repository: AddressRepository) {
    }

    async createAddress(address: CreateAddressDTO): Promise<AddressDTO> {
        return this.repository.create(address);
    }

    async deleteAddress(id: string): Promise<void> {
        return this.repository.delete(id);
    }

    getAddresses(): Promise<AddressDTO[]> {
        return this.repository.getAll();
    }

    async updateAddress(id: string, address: Partial<CreateAddressDTO>): Promise<AddressDTO> {
        return await this.repository.update(id, address);
    }
}