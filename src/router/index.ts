import { Router } from 'express'

import { friendsRouter } from '@modules/friends'
import {addressRouter} from "@modules/address/controller/address.controller";

export const router = Router()

router.use('/friends', friendsRouter)
router.use('/address', addressRouter)