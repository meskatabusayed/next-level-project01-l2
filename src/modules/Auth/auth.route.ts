import express from 'express'
import validateRequest from '../../app/middlewares/validateRequest';
import { authValidation } from './auth.validation';

const router = express.Router();

router.post('/login',
    validateRequest(authValidation.loginValidationSchema),

)

export const loginRoutes = router;