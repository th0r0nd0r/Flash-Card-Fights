# Routes

## API Endpoints

### `users`
+ `POST /api/users` - sign up

### `sessions`
+ `POST /api/session` - creates a new session
+ `DELETE /api/session` - destroys the current session

### `courses`
+ `GET /api/courses` - course index
+ `GET /api/courses/:id` - returns course
+ `POST /api/courses` - creates a course
+ `PATCH /api/courses/:id` - edit a course
+ `DELETE /api/courses/:id` - remove a course

### `quizzes`

#### `by course`
+ `GET /api/courses/:courseId/quizzes` - quiz index for a course (maybe don't need this)
+ `GET /api/courses/:courseId/quizzes/:quizId` - quiz show under course
+ `POST /api/courses/:courseId/quizzes` - create a new quiz
+ `PATCH /api/courses/:courseId/quizzes/:quizId` - edit quiz
+ `DELETE /api/courses/:courseId/quizzes/:quizId` - delete quiz

#### `by subject`
+ `GET /api/subjects/:subjectId/quizzes` - quiz index for a subject (maybe don't need this)
+ `GET /api/subjects/:subjectId/quizzes/:quizId` - quiz show under course
+ `POST /api/subjects/:subjectId/quizzes` - create a new quiz
+ `PATCH /api/subjects/:subjectId/quizzes/:quizId` - edit quiz
+ `DELETE /api/subjects/:subjectId/quizzes/:quizId` - delete quiz

### `subjects`
+ `GET /api/subjects` - index
+ `GET /api/subjects/:id` - subject show (and associated quizzes)
+ `POST /api/subjects` - create new subject
+ `PATCH /api/subjects/:id` - edit a subject
+ `DELETE /api/subjects/:id` -delete a subject (protect this one)

### `questions`
all the shit nested under quizzes

### `question attempt, quiz questions`
normal routes, not nested

## Frontend Routes

+ `/login`
+ `/signup`
+ `/user/:userId` - user homepage
+ `/courses` - courses a user owns/is a member of
+ `/courses/:courseId` - course's page
+ `/subjects` -subjects page
+ `/subjects/:subjectId` looking at a subject (shows all quizzes for that subject)

+ `/:quizId` - a quiz (probably don't need to nest this under course or subject on the frontend)
+ Alternative (if we don't want to show the quiz index on `/course` and `/subject` by default):
+ `/courses/:courseId/:quizId` and
+ `/subjects/:subjectId/:quizId`

+ `/:quizId/:Id` - showing a question