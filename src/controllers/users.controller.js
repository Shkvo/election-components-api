import models from '../../models';
const { Users } = models;

const all = async ctx => {
  try {
    const data = await Users.findAll();

    ctx.body = {
      status: 'success',
      data
    };
  } catch (error) {
    ctx.body = {
      message: 'Error has occured',
      error
    };
  }
};

const get = async ctx => {
  try {
    const { id } = ctx.params;
    const data = await Users.findByPk(id);

    ctx.body = {
      status: 'success',
      data
    };
  } catch (error) {
    ctx.body = {
      message: 'Error has occured',
      error
    };
  }
};

const create = async ctx => {
  try {
    const user = ctx.request.body;
    const data = await Users.create(user);

    ctx.body = {
      status: 'success',
      data
    };
  } catch (error) {
    ctx.body = {
      message: 'Error has occured',
      error
    };
  }
};

const update = async ctx => {
  try {
    const user = ctx.request.body;
    const data = await Users.update(user);

    ctx.body = {
      status: 'success',
      data
    };
  } catch (error) {
    ctx.body = {
      message: 'Error has occured',
      error
    };
  }
};

const remove = async ctx => {
  const { id } = ctx.params;
  const user = await Users.findOne({
    where: {
      id
    }
  });
  try {
    await user.destroy();
    ctx.body = {
      status: 'success',
    };
  } catch (error) {
    ctx.body = {
      message: 'Error has occured',
      error
    };
  }
};

export default {
	all,
  get,
  create,
  update,
  remove
};
