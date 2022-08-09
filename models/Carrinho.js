module.exports = (sequelize, DataType) => {
  const Carrinho = sequelize.define('Carrinho', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    usuario_id: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    produto_id: {
      type: DataType.INTEGER,
    },
    produto_quantidade: {
      type: DataType.INTEGER
    },
    acessorio_produto_id: {
      type: DataType.INTEGER
    },
    acessorio_quantidade: {
      type: DataType.INTEGER
    }

  }, {
    tableName: 'carrinho',
    timestamps: false
  })

  
  Carrinho.associate = (models) => {
    Carrinho.belongsTo(models.Produto, {
      as: 'carrinho',
      foreignKey: 'produto_id',
      timestamps: false
    })
  }

  return Carrinho;
}