import express from 'express';
import { Adduser, GetUser, FoundUser, DeleteUser, UpdateUser } from '../controller/user.js';

const router = express.Router();

//Getting details of the users
router.get('/',GetUser)

//Adding a user
router.post('/',Adduser)

//Getting a user with the ID
router.get('/:id',FoundUser)

//DEleting a user
router.delete('/:id',DeleteUser)


//PUT for complete overriding PATCH for partial modification
router.patch('/:id',UpdateUser)


export default router;