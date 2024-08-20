import {AddressDTO, CreateAddressDTO} from "@modules/address/dto";

export interface AddressService {
    getAddresses(): Promise<AddressDTO[]>;
    createAddress(address: CreateAddressDTO): Promise<AddressDTO>;
    deleteAddress(id: string): Promise<void>;

    updateAddress(id: string, address: Partial<CreateAddressDTO>): Promise<AddressDTO>;

}