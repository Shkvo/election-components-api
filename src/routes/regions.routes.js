import Router from 'koa-router';
import controller from '../controllers/regions.controller';

const router = new Router({
  prefix: '/regions'
});

router.get('/', controller.all);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.get('/:id', controller.get);
router.delete('/:id', controller.remove);

module.exports = router;
