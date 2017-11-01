import models from 'express-cassandra'
import path from 'path'

//Tell express-cassandra to use the models-directory, and
//use bind() to load the models using cassandra configurations.
async function connectToDataBase() {
    return await new Promise((resolve, reject) => {
        models.setDirectory(path.join(path.resolve('.'), __dirname, 'models')).bind(
            {
                clientOptions: {
                    contactPoints: [ip],
                    protocolOptions: {port: 9042},
                    keyspace: 'helloworld',
                    queryOptions: {consistency: models.consistencies.one}
                },
                ormOptions: {
                    //If your keyspace doesn't exist it will be created automatically
                    //using the default replication strategy provided here.
                    defaultReplicationStrategy: {
                        class: 'SimpleStrategy',
                        replication_factor: 1
                    },
                    migration: 'safe',
                    createKeyspace: true
                }
            },
            function (err) {
                if (err)
                    reject(err);
                else {
                    console.log(models.timeuuid());
                    resolve(models);
                }
            }
        )
    })
}

export default connectToDataBase