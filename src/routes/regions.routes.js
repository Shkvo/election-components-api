import Router from 'koa-router';
import controller from '../controllers/regions.controller';

const router = new Router({
	prefix: '/regions'
});

router.get('/', controller.all);
router.get('/:id', controller.get);

module.exports = router;
