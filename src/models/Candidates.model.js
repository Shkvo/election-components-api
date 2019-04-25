import schema from './schemas/Candidates.schema.js';

function Candidates(sequelize, DataTypes) {
  const Candidates = sequelize.define('Candidates', schema(DataTypes), {
    tableName: 'candidates',
    timestamps: true
  });

  Candidates.associate = models => {
    Candidates.hasOne(models.Votes, { foreignKey: 'candidateId' });
  };

  return Candidates;
}

export default Candidates;
