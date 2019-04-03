import Router from 'koa-router';
import controller from '../controllers/candidates.controller';

const router = new Router({
	prefix: '/candidates'
});

router.get('/', controller.all);
router.post('/', controller.create);
router.put('/', controller.update);
router.get('/:id', controller.get);
router.delete('/:id', controller.remove);

module.exports = router;
