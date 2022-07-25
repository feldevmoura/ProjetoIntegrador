module.exports = (sequelize, DataType) => {
  const CarrinhoProduto = sequelize.define('CarrinhoProduto', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    carrinho_id: {
      type: DataType.INTEGER,
      allowNull: false
    },
    quantidade: {
      type: DataType.INTEGER,
      allowNull: false
    },
    produto_id: {
      type: DataType.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'carrinho_produto',
  })

  return CarrinhoProduto;
}