module.exports = (sequelize, DataType) => {
  const Acessorio = sequelize.define('Acessorio', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    carrinhoId: {
      type: DataType.INTEGER,
      allowNull: true
    },
    usuarioId: {
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
    tableName: 'acessorios',
    timestamps: false
  })

  return Acessorio;
}