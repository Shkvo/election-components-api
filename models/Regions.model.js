import schema from './schemas/Regions.schema.js';

function Regions(sequelize, DataTypes) {
  const Regions = sequelize.define('Regions', schema(DataTypes), {
    tableName: 'regions',
    timestamps: false
  });

  Regions.associate = models => {
    Regions.hasOne(models.Users, { foreignKey: 'regionId' });
    Regions.hasOne(models.Votes, { foreignKey: 'regionId' });
  };

  return Regions;
}

export default Regions;
