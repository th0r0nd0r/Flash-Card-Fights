# Database Schema
## `user`

| column name | data type | details |
| --- | --- | --- |
| `id` | integer | not null, primary key|
`username`|string|not null, indexed
`is_educator`|boolean|not null
`img_url`|string|not null
`password_digest`|string|not null
`session_token`|string|not null, indexed, unique
+ `img_url` has a default image at the database level

## `course`

| column name | data type | details |
| --- | --- | --- |
`id`|integer|not null, primary key
`title`|string|not null
`educator_id`|integer|not null, indexed, foreign key
+ `educator_id` references `users`

## `question`

| column name | data type | details |
| --- | --- | --- |
`id`|integer|not null, primary key
`body`|string|not null
`author_id`|integer|not null, indexed, foreign key
`course_id`|integer|not null, indexed, foreign key
+ `author_id` references `users`

## `subject`

| column name | data type | details |
| --- | --- | --- |
`id`|integer|not null, primary key
`title`|string|not null


## `question attempt`

| column name | data type | details |
| --- | --- | --- |
`id`|integer|not null, primary key
`question_id`|integer|not null, indexed, foreign key
`user_id`|integer|not null, indexed, foreign key
`score`|integer|

## `quiz`

| column name | data type | details |
| --- | --- | --- |
`id`|integer|not null, primary key
`title`|string|not null


## `quiz questions`
| column name | data type | details |
| --- | --- | --- |
`id`|integer|not null, primary key
`quiz_id`|integer|not null, indexed, foreign key
`question_id`|integer|not null, indexed, foreign key
