use("CrudDb")
db.createCollection("courses")
db.courses.insertOne({
    name: "Harry web dev",
    price: 0,
    assignments: 12,
    projects: 45,
})

