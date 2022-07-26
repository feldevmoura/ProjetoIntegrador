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
    quantidade: {
      type: DataType.INTEGER,
      allowNull: false
    },
    data_pedido: {
      type: DataType.DATE,
      allowNull: false,
    },
    produto_id: {
      type: DataType.INTEGER,
      allowNull: false
    },
    produto_info_id: {
      type: DataType.INTEGER,
      allowNull: false,
      
    }
  }, {
    tableName: 'pedido',
    timestamps: true

  })

  return Pedido;
}