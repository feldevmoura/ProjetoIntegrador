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
      allowNull: false
    }
    
  }, {
    tableName: 'carrinho',
    timestamps: false
  })

  return Carrinho;
}