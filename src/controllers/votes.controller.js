import models from '../../models';
const { sequelize, Votes } = models;

const all = async ctx => {
  try {
    const data = await Votes.findAll();

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
    const data = await Votes.findByPk(id);

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
    const vote = ctx.request.body;

    const data = await Votes.create(vote);

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

const overall = async ctx => {
  try {
    const data = await Votes.findAll({
      include: ['candidate'],
      attributes: [[sequelize.fn('count', sequelize.col('Votes.id')), 'votes']],
      group: ['candidate.id']
    });

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

const region = async ctx => {
  try {
    const { id } = ctx.params;

    const data = await Votes.findAll({
      where: {
        regionId: id
      },
      include: ['candidate'],
      attributes: [[sequelize.fn('count', sequelize.col('Votes.id')), 'votes']],
      group: ['candidate.id']
    });

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
  get,
  create,
  region,
  overall
};
