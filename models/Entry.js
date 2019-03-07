module.exports = function(sequelize, DataTypes){
    
    const Entry = sequelize.define('Entry', {
        date_added: {
            type: DataTypes.DATE
        },

        pubmedid: {
            primaryKey: true,
            type: DataTypes.INTEGER
          },

        first_author: {
            type: DataTypes.STRING,
            allowNull: false
        },

        pub_date: {
            type: DataTypes.DATE,
            allowNull: false
        },

        journal: {
            type: DataTypes.STRING,
            allowNull: false
        },

        link: {
            type: DataTypes.STRING,
            allowNull: false
        },

        study_title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        disease_trait: {
            type: DataTypes.STRING,
            allowNull: false
        },

        sample_size_desc: {
            type: DataTypes.STRING,
            allowNull: false
        },

        replication_sample_size_desc: {
            type: DataTypes.STRING,
            allowNull: false
        },

        platform: {
            type: DataTypes.STRING,
            allowNull: false
        },

        assoc_count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });
    
    return Entry;
}