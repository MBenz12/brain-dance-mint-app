module.exports = (connectionSeq, Sequelize) => {
  const Model = connectionSeq.define(
    'WhiteList',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      address: {
        type: Sequelize.STRING,
      },
      step: {
        type: Sequelize.INTEGER,
      },
    },
    {
      tableName: 'whitelists',
    }
  )

  return Model
}
