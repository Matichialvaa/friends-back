import {Router} from "express";
import {db} from "@utils";
import {AddressServiceImpl} from "@modules/address/service/address.service.impl";
import {AddressRepositoryImpl} from "@modules/address/repository/address.repository.impl";


export const addressRouter = Router()

const service = new AddressServiceImpl(new AddressRepositoryImpl(db))

addressRouter.get('/', async (req, res) => {
    const addresses = await service.getAddresses();

    return res.status(200).json(addresses)
})

addressRouter.post('/', async (req, res) => {
    const data = req.body
    const address = await service.createAddress(data);

    return res.status(201).json(address)
})

addressRouter.delete('/:id', async (req, res) => {
    const {id} = req.params
    await service.deleteAddress(id);

    return res.status(204).send()
})

addressRouter.put('/:id', async (req, res) => {
    const {id} = req.params;
    const data = req.body;
    const address = await service.updateAddress(id, data);

    return res.status(200).json(address);
})