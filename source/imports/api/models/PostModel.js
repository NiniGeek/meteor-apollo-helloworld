module.exports = {
    fields:{
        id: {
            type: "uuid",
            default: {"$db_function": "uuid()"}
        },
        content: "text",
        views: "int"
    },
    key:["id"]
}