import Router from 'koa-router';
import controller from '../controllers/candidates.controller';

const router = new Router({
	prefix: '/candidates'
});

router.get('/', controller.all);
router.get('/:id', controller.get);

module.exports = router;
