import models from '../models';
import { throwError } from '../helpers/error';

const { sequelize, Votes } = models;

const all = async ctx => {
  try {
    const data = await Votes.findAll();

    ctx.body = {
      status: 'success',
      data
    };
  } catch (error) {
    throwError(ctx, error);
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
    throwError(ctx, error);
  }
};

const create = async ctx => {
  try {
    const { vote } = ctx.request.body;
    await Votes.create(vote);

    ctx.body = {
      status: 'success',
    };
  } catch (error) {
    throwError(ctx, error);
  }
};

const overall = async ctx => {
  try {
    const total = await Votes.count();
    const data = await Votes.findAll({
      include: ['candidate'],
      attributes: [[sequelize.fn('count', sequelize.col('Votes.id')), 'votes']],
      group: ['candidate.id']
    });

    ctx.body = {
      status: 'success',
      data: {
        list: data,
        total
      }
    };
  } catch (error) {
    throwError(ctx, error);
  }
};

const region = async ctx => {
  try {
    const { id } = ctx.params;
    const total = await Votes.count({
      where: {
        regionId: id
      }
    });
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
      data: {
        list: data,
        total
      }
    };
  } catch (error) {
    throwError(ctx, error);
  }
};

export default {
  all,
  get,
  create,
  region,
  overall
};
