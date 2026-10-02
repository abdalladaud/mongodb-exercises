
use schoolDB

// Sample student data

db.students.insertMany([
  {
    name: "Ayaan",
    courses: [
      { title: "React", score: 90 },
      { title: "Node.js", score: 82 },
      { title: "MongoDB", score: 88 }
    ]
  },
  {
    name: "Ahmed",
    courses: [
      { title: "React", score: 92 },
      { title: "Node.js", score: 78 },
      { title: "MongoDB", score: 91 }
    ]
  },
  {
    name: "Sahra",
    courses: [
      { title: "React", score: 87 },
      { title: "Node.js", score: 89 },
      { title: "MongoDB", score: 80 }
    ]
  },
  {
    name: "Mohamed",
    courses: [
      { title: "React", score: 75 },
      { title: "Node.js", score: 90 },
      { title: "MongoDB", score: 93 }
    ]
  },
  {
    name: "Hodan",
    courses: [
      { title: "React", score: 95 },
      { title: "Node.js", score: 86 },
      { title: "MongoDB", score: 89 }
    ]
  }
])


// Find courses with scores above 85

db.students.aggregate([
  // 1. Flatten the courses array
  {
    $unwind: "$courses"
  },

  // 2. Keep only scores above 85
  {
    $match: {
      "courses.score": { $gt: 85 }
    }
  },

  // 3. Group by course and count top performers
  {
    $group: {
      _id: "$courses.title",
      total: { $sum: 1 }
    }
  },

  // 4. Rename _id to course
  {
    $project: {
      _id: 0,
      course: "$_id",
      total: 1
    }
  },

  // 5. Sort by highest number of top performers
  {
    $sort: {
      total: -1
    }
  }
])



// BONUS
// Average score for each course


db.students.aggregate([
  // Flatten courses
  {
    $unwind: "$courses"
  },

  // Group by course
  {
    $group: {
      _id: "$courses.title",
      total: { $sum: 1 },
      avgScore: { $avg: "$courses.score" }
    }
  },

  // Rename _id to course
  {
    $project: {
      _id: 0,
      course: "$_id",
      total: 1,
      avgScore: 1
    }
  },

  // Sort by total high performers
  {
    $sort: {
      total: -1
    }
  }
])
