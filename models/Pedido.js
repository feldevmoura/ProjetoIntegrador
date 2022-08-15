module.exports = (sequelize, DataType) => {
  const Pedido = sequelize.define('Pedido', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    usuario_id: {
      type: DataType.INTEGER,
      allowNull: false
    },
    produto_quantidade: {
      type: DataType.INTEGER,
      allowNull: false
    },
    data_pedido: {
      type: DataType.DATE
    },
    produto_id: {
      type: DataType.INTEGER,
      allowNull: false
    },
    acessorio_produto_id: {
      type: DataType.INTEGER
    },
    acessorio_quantidade: {
      type: DataType.INTEGER
    }
  }, {
    tableName: 'pedido',
    timestamps: false
  })

  return Pedido;
}