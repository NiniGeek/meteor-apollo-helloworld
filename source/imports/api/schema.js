export default typeDefs = [`
type Post {
  id: String
  content: String
  views: Int
}
type Query {
  posts(views: Int): [Post]
}
schema {
  query: Query
}
`]