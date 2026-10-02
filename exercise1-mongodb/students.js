use schoolDB

db.students.insertMany([
  {
    name: "Ahmed Ali",
    age: 20,
    email: "ahmed@example.com",
    department: "Computer Science",
    skills: ["JavaScript", "MongoDB"]
  },
  {
    name: "Amina Hassan",
    age: 21,
    email: "amina@example.com",
    department: "Information Technology",
    phone: "+252610000000"
  },
  {
    name: "Mohamed Omar",
    age: 19,
    email: "mohamed@example.com",
    department: "Software Engineering",
    address: {
      city: "Mogadishu",
      country: "Somalia"
    },
    hobbies: ["Football", "Reading"]
  }
])

// Query all students
db.students.find()

// Example query
db.students.find({ department: "Computer Science" })