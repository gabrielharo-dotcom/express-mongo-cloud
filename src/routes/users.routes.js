import express from 'express';
import { userController } from '../controllers/userController.js';

const router = express.Router();
const asyncRoute = (handler) => (req, res, next) => {
  Promise.resolve(handler(req, res, next)).catch(next);
};

router.get('/', asyncRoute(userController.getAll));
router.get('/:id', asyncRoute(userController.getById));
router.post('/', asyncRoute(userController.create));
router.put('/:id', asyncRoute(userController.update));
router.delete('/:id', asyncRoute(userController.remove));

export default router;
