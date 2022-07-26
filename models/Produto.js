
module.exports = (sequelize, DataType) => {
  const Produto = sequelize.define('Produto', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome: {
      type: DataType.STRING(100),
      alloNull: false
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