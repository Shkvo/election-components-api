const schema = DataTypes => ({
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  caption: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

export default schema;
