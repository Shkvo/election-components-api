import Router from 'koa-router';
import controller from '../controllers/users.controller';

const router = new Router({
	prefix: '/users'
});

router.get('/', controller.all);
router.get('/:id', controller.get);

module.exports = router;
