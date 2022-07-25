module.exports = (sequelize, DataType) => {
  const AcessorioPedido = sequelize.define('AcessorioPedido', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    produto_id: {
      type: DataType.INTEGER,
      allowNull: false
    },
    quantidade: {
      type: DataType.INTEGER,
      allowNull: false
    },
    pedido_id: {
      type: DataType.INTEGER,
      allowNull: false
    }
    
  }, {
    tableName: 'acessorio_pedido',
  })

  return AcessorioPedido;
}