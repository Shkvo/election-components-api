import Router from 'koa-router';
import controller from '../controllers/votes.controller';

const router = new Router({
  prefix: '/votes'
});

router.get('/', controller.all);
router.post('/', controller.create);
router.get('/overall', controller.overall);
router.get('/region/:id', controller.region);
router.get('/:id', controller.get);

module.exports = router;
