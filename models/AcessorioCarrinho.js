module.exports = (sequelize, DataType) => {
  const AcessorioCarrinho = sequelize.define('AcessorioCarrinho', {
    carrinhoId: {
      type: DataType.INTEGER,
      allowNull: true
    },
    usuario_id: {
      type: DataType.INTEGER,
      allowNull: true,
    },
    acessorioId: {
      type: DataType.INTEGER,
    },
    quantidadeAcessorio: {
      type: DataType.INTEGER
    }
  }, {
    tableName: 'acesoriocarrinho',
    timestamps: false
  })

  return AcessorioCarrinho;
}