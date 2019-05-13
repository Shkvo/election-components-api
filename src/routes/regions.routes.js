import Router from 'koa-router';
import controller from '../controllers/regions.controller';
import { authenticate } from '../helpers/auth';

const router = new Router({
  prefix: '/regions'
});

router.get('/', controller.all);
router.post('/', authenticate, controller.create);
router.put('/:id', authenticate, controller.update);
router.get('/:id', controller.get);
router.delete('/:id', authenticate, controller.remove);

module.exports = router;
