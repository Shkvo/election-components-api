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

export default {
	all,
	get
};
