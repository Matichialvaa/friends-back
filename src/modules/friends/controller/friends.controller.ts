import { Request, Response, Router } from 'express'
import HttpStatus from "http-status";
import {db} from "@utils";
import {FriendsServiceImpl} from "@modules/friends/service";
import {FriendsRepositoryImpl} from "@modules/friends/repository";
import {BodyValidation} from "@utils/validation";
import {CreateFriendDTO} from "@modules/friends/dto";

export const friendsRouter = Router()

const service = new FriendsServiceImpl(new FriendsRepositoryImpl(db))

friendsRouter.get('/', async (req: Request, res: Response) => {
    const friends = await service.getFriends();

    return res.status(HttpStatus.OK).json(friends)
})

friendsRouter.post('/', BodyValidation(CreateFriendDTO), async (req: Request, res: Response) => {
    const data = req.body
    const friends = await service.createFriend(data);

    return res.status(HttpStatus.CREATED).json(friends)
})

friendsRouter.delete('/:id', async (req: Request, res: Response) => {
    const {id} = req.params
    const friends = await service.deleteFriend(id);

    return res.status(HttpStatus.OK).json(friends)
})