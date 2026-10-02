// MongoDB Practice Task List
// Database: schoolDB
// Collection: students

use schoolDB


db.students.deleteMany({})

db.students.insertMany([
  {
    name: "Sara Ahmed",
    age: 23,
    email: "sara@university.edu",
    courses: ["React", "Node.js"],
    phone: "+252610111111"
  },
  {
    name: "Abdi Hassan",
    age: 21,
    email: "abdi@gmail.com",
    courses: ["React", "MongoDB"],
    skills: ["JavaScript", "HTML", "CSS"]
  },
  {
    name: "Mohamed Ali",
    age: 18,
    email: "mohamed@yahoo.com",
    courses: ["Node.js", "MongoDB"],
    department: "Software Engineering"
  },
  {
    name: "Sahra Omar",
    age: 25,
    email: "sahra@college.edu",
    courses: ["React", "Python"],
    address: {
      city: "Mogadishu",
      country: "Somalia"
    }
  },
  {
    name: "Hodan Yusuf",
    age: 22,
    email: "hodan@gmail.com",
    courses: ["Vue.js", "Node.js"],
    hobbies: ["Reading", "Football"]
  },
  {
    name: "Alex Mohamed",
    age: 20,
    email: "alex@school.edu",
    courses: ["React", "Node.js"],
    skills: ["JavaScript", "Git", "MongoDB"]
  }
])



// 1. Find students older than 22

db.students.find({
  age: { $gt: 22 }
})


// 2. Find students enrolled in React

db.students.find({
  courses: "React"
})


// 3. Find students whose name starts with 'S'

db.students.find({
  name: { $regex: "^S", $options: "i" }
})


// 4. Find students whose age is either 18 or 21

db.students.find({
  age: { $in: [18, 21] }
})


// 5. Find students who are NOT using Gmail

db.students.find({
  email: {
    $not: {
      $regex: "@gmail\\.com$",
      $options: "i"
    }
  }
})


// 6. Find students enrolled in React AND older than 20

db.students.find({
  courses: "React",
  age: { $gt: 20 }
})


// 7. Find students enrolled in React OR Node.js

db.students.find({
  $or: [
    { courses: "React" },
    { courses: "Node.js" }
  ]
})



// 8. Find students whose name contains "x"

db.students.find({
  name: {
    $regex: "x",
    $options: "i"
  }
})



// 9. Find students whose email ends in ".edu"

db.students.find({
  email: {
    $regex: "\\.edu$",
    $options: "i"
  }
})