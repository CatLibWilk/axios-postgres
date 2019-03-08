module.exports = function(sequelize, DataTypes){
    
    const Entry = sequelize.define('Entry', {
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        date_added: {
            type: DataTypes.STRING
        },

        pubmedid: {
            type: DataTypes.INTEGER
          },

        first_author: {
            type: DataTypes.STRING,
            // allowNull: false
        },

        pub_date: {
            type: DataTypes.STRING,
            // allowNull: false
        },

        journal: {
            type: DataTypes.STRING,
            // allowNull: false
        },

        link: {
            type: DataTypes.STRING,
            // allowNull: false
        },

        study_title: {
            type: DataTypes.TEXT,
            // allowNull: false
        },

        disease_trait: {
            type: DataTypes.STRING,
            // allowNull: false
        },

        sample_size_desc: {
            type: DataTypes.TEXT,
            // allowNull: false
        },

        replication_sample_size_desc: {
            type: DataTypes.TEXT,
            // allowNull: false
        },

        platform: {
            type: DataTypes.STRING,
            // allowNull: false
        },

        assoc_count: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
    });
    
    return Entry;
}