import schema from './schemas/Votes.schema.js';

function Votes(sequelize, DataTypes) {
  const Votes = sequelize.define('Votes', schema(DataTypes), {
    tableName: 'votes',
    timestamps: true
  });

  Votes.associate = models => {
    Votes.belongsTo(models.Regions, { as: 'region', foreignKey: 'regionId' });
    Votes.belongsTo(models.Users, { as: 'user', foreignKey: 'userId' });
    Votes.belongsTo(models.Candidates, { as: 'candidate', foreignKey: 'candidateId' });
  };

  Votes.associations = models => ({
    region: {
      model: models.Regions,
      as: 'region',
      attributes: ['id', 'caption', 'description'],
      $sort: { id: 1 },
    },
    user: {
      model: models.Users,
      as: 'user',
      attributes: ['id', 'firstName', 'lastName', 'thirdName', 'regionId', 'birthDate'],
      $sort: { id: 1 },
    },
    candidate: {
      model: models.Candidates,
      as: 'candidate',
      attributes: ['id', 'firstName', 'lastName', 'thirdName'],
      $sort: { id: 1 },
    },
  });

  return Votes;
}

export default Votes;
