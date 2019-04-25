import schema from './schemas/Users.schema.js';

function Users(sequelize, DataTypes) {
  const Users = sequelize.define('Users', schema(DataTypes), {
    tableName: 'users',
    timestamps: true
  });

  Users.associate = models => {
    Users.belongsTo(models.Regions, { foreignKey: 'regionId' });
    Users.hasOne(models.Votes, { foreignKey: 'userId' });
  };

  Users.associations = models => ({
    region: {
      model: models.Regions,
      as: 'region',
      attributes: ['id', 'caption', 'description'],
      $sort: { id: 1 },
    }
  });

  return Users;
}

export default Users;
