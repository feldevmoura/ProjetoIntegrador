module.exports = (sequelize, DataType) => {
  const Endereco = sequelize.define('Endereco', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome_tabela: {
      type: DataType.STRING(20),
      defaultValue: true,
      allowNull: false
    },
    cep: {
      type: DataType.INTEGER,
      allowNull: false
    },
    rua: {
      type: DataType.STRING(50),
      allowNull: true
    },
    numero: {
      type: DataType.INTEGER,
      allowNull: false
    },
    completmento: {
      type: DataType.STRING(50),
      allowNull: true
    },
    referencia: {
      type: DataType.STRING(100),
      allowNull: true
    },
    bairro: {
      type: DataType.STRING(100),
      alloNull: true
    },
    cidade: {
      type: DataType.STRING(50),
      allowNull: false
    },
    estado: {
      type: DataType.STRING(50),
      allowNull: true
    },
    usuario_id: {
      type: DataType.INTEGER
    }
  }, {
    tableName: 'endereco',
    timestamps: false
  })

  return Endereco;
}