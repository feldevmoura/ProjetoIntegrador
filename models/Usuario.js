module.exports = (sequelize, DataType) => {
  const Usuario = sequelize.define('Usuario', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome: { 
      type: DataType.STRING(50),
      allowNull: false
    },
    email: {
      type: DataType.STRING,
      allowNull: false,
      unique: true,
      allowNull: false
    },
    senha: {
      type: DataType.STRING(25),
      allowNull: false
    },
    genero: {
      type: DataType.STRING(50),
      allowNull: true
    },
    celular: {
      type: DataType.STRING(20),
      allowNull: false
    },
    telefone: {
      type: DataType.STRING(20),
      allowNull: true
    },
    cpf: {
      type: DataType.STRING(20),
      allowNull: false,
      unique: true
    },
    data_nascimento: {
      type: DataType.DATEONLY,
      allowNull: false
    },
    endereco_id: {
      type: DataType.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'usuario',
    timestamps: false
  })

  return Usuario;
}