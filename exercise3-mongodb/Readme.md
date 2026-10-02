```markdown
# MongoDB Update Operations

## Overview

This project practices MongoDB update operations using a student collection.

## Technologies

- MongoDB
- MongoDB Compass

## Operations Practiced

- `$set` — update a field
- `$inc` — increase points
- `$push` — add a course
- `$pull` — remove a course
- Multiple update operators together

## Files

- `students.js` — student data and update queries
- `README.md` — project description

## Schema

Each student contains:

- `name`
- `email`
- `points`
- `courses`

## Bonus

The bonus task updates one student using `$set`, `$inc`, and `$push` in the same `updateOne()` operation.
```