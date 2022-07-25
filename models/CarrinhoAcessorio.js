module.exports = (sequelize, DataType) => {
  const CarrinhoAcessorio = sequelize.define('CarrinhoAcessorio', {
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
    tableName: 'carrinho_acessorio',
  })

  return CarrinhoAcessorio;
}