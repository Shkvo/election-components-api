import Router from 'koa-router';
import controller from '../controllers/votes.controller';
import { authenticate } from '../helpers/auth';

const router = new Router({
  prefix: '/votes'
});

router.get('/', controller.all);
router.post('/', authenticate,  controller.create);
router.get('/overall', controller.overall);
router.get('/region/:id', controller.region);
router.get('/:id', controller.get);

module.exports = router;
