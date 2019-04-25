import bcrypt from 'bcryptjs';

const schema = DataTypes => ({
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  uid: {
    type: DataTypes.STRING,
    allowNull: false
  },
  passportSerial: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'passport_serial'
  },
  encryptedPassword: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'encrypted_password',
    set(val) {
      this.setDataValue('encryptedPassword', bcrypt.hashSync(val));
    }
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'first_name'
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'last_name'
  },
  thirdName: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'third_name'
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'birth_date'
  },
  regionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'region_id'
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

export default schema;
