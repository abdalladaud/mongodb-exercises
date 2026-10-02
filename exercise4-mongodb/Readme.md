```markdown
# MongoDB Course Analytics

## Overview

This project uses MongoDB aggregation to find courses with high-performing students.

## Technologies

- MongoDB
- MongoDB Compass

## Aggregation Stages

The project uses:

- `$unwind` — flatten the courses array
- `$match` — filter scores above 85
- `$group` — count students per course
- `$project` — rename and select fields
- `$sort` — order courses by top performers

## Bonus

The bonus calculates the average score for each course using `$avg`.

## Files

- `students.js` — sample data and aggregation queries
- `README.md` — project description
```