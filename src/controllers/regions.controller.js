import models from '../../models';
const { Regions } = models;

const all = async ctx => {
  try {
    const data = await Regions.findAll();

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
    const data = await Regions.findByPk(id);

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
    const region = ctx.request.body;
    const data = await Regions.create(region);

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
    const region = ctx.request.body;
    const data = await Regions.update(region);

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
  const region = await Regions.findOne({
    where: {
      id
    }
  });
  try {
    await region.destroy();
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
