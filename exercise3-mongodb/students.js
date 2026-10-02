
use schoolDB

// Insert 3 students

db.students.insertMany([
  {
    name: "Ahmed Ali",
    email: "ahmed@gmail.com",
    points: 80,
    courses: ["React", "MongoDB"]
  },
  {
    name: "Amina Hassan",
    email: "amina@gmail.com",
    points: 90,
    courses: ["JavaScript", "Node.js"]
  },
  {
    name: "Mohamed Omar",
    email: "mohamed@gmail.com",
    points: 75,
    courses: ["HTML", "CSS"]
  }
])


// 1. Use $set to update one email

db.students.updateOne(
  { name: "Ahmed Ali" },
  { $set: { email: "ahmed@school.edu" } }
)


// 2. Use $inc to increase points

db.students.updateOne(
  { name: "Amina Hassan" },
  { $inc: { points: 10 } }
)


// 3. Use $push to add a new course

db.students.updateOne(
  { name: "Mohamed Omar" },
  { $push: { courses: "MongoDB" } }
)


// 4. Use $pull to remove a course

db.students.updateOne(
  { name: "Ahmed Ali" },
  { $pull: { courses: "React" } }
)


// 5. BONUS
// Use $set, $inc, and $push together

db.students.updateOne(
  { name: "Amina Hassan" },
  {
    $set: { email: "amina@school.edu" },
    $inc: { points: 5 },
    $push: { courses: "React" }
  }
)


// Check the updated students

db.students.find()