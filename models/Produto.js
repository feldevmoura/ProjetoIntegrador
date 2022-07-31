
module.exports = (sequelize, DataType) => {
  const Produto = sequelize.define('Produto', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    descricao: {
      type: DataType.STRING(200)
    },
    nome: {
      type: DataType.STRING(100),
      alloNull: false
    },
    cor: {
      type: DataType.STRING(20)
    },
    preco: {
      type: DataType.DECIMAL(6,2),
      allowNull: false
    }
  }, {
    tableName: 'produto',
    timestamps: false
  })

  return Produto;
}