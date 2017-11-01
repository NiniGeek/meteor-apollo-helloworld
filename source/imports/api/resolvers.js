import connectToDataBase from './connectors'

// create the resolve functions for the available GraphQL queries
export default resolvers = {
    Query: {
        async posts(_, args){
            let models = await connectToDataBase()
            let posts = await new Promise((resolve, reject) => {
                models.instance.Post.find(args, (err, data) => {
                    if (err) reject(err)
                    resolve(data)
                })
            })
            return posts
        },
    }
}