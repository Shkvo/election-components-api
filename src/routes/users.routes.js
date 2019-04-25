import Router from 'koa-router';
import controller from '../controllers/users.controller';

const router = new Router({
  prefix: '/users'
});

router.get('/', controller.all);
router.post('/', controller.create);
router.post('/login', controller.login);
router.put('/:id', controller.update);
router.get('/:id', controller.get);
router.delete('/:id', controller.remove);

module.exports = router;
