module.exports = (sequelize, DataType) => {
  const ProdutoInfo = sequelize.define('ProdutoInfo', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    descricao: {
      type: DataType.STRING(300),
      allowNull: false
    },
    cor: {
      type: DataType.STRING(20),
      allowNull: false
    },
    produto_id: {
      type: DataType.INTEGER,
      allowNull: false
    }

  }, {
    tableName: 'produto_info',
    timestamps: false
  })

  return ProdutoInfo;
}