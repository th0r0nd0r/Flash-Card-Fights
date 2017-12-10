# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Course.destroy_all
CourseStudent.destroy_all
CourseSubject.destroy_all
Quiz.destroy_all
Question.destroy_all
QuizQuestion.destroy_all
Answer.destroy_all
Challenge.destroy_all
Subject.destroy_all
QuizSubject.destroy_all

demo_users = User.create([
  {
    username: 'demo',
    password: 'password'
  },
  {
    username: 'Captain Kirk',
    password: 'captainslog',
    img_url: 'http://pixel.nymag.com/imgs/daily/vulture/2015/07/26/26-Kirk.w529.h529.jpg',
    is_educator: true
  },
  {
    username: 'Jack Sparrow',
    password: 'whynorum',
    img_url: 'https://lumiere-a.akamaihd.net/v1/images/bluesteel_d0f846ee.jpeg?region=0%2C0%2C1580%2C880',
    is_educator: true
  },
  {
    username: 'John Madden',
    password: 'football',
    img_url: 'https://cbssanfran.files.wordpress.com/2010/09/johnmadden01-250.jpg?w=318&h=318&crop=1',
    is_educator: false
  },
  {
    username: 'Whoopi Goldberg',
    password: 'crazydrinks',
    img_url: 'http://www.treknews.net/wp-content/uploads/2016/08/whoopi-goldberg-guinan-star-trek-tng.jpg',
    is_educator: false
  },
  {
    username: 'Whoopi Twin',
    password: 'turkeybacon',
    img_url: 'http://www.treknews.net/wp-content/uploads/2016/08/whoopi-goldberg-guinan-star-trek-tng.jpg',
    is_educator: false
  },
  {
    username: 'Teachers Pet',
    password: 'ilovelamp'
  },
  {
    username: 'Lucy in the Sky',
    password: 'withdiamonds'
  },
  {
    username: 'John Jacob',
    password: 'jingle'
  },
])

demo_courses = Course.create([
  {
    title: "Captain Kirk's Math Class",
    educator_id: demo_users[0].id,
  },
  {
    title: "4th Grade Algebra",
    educator_id: demo_users[0].id
  },
  {
    title: "5th Grade Calculus",
    educator_id: demo_users[0].id
  },
  {
    title: "Mysteries of Paint",
    educator_id: demo_users[1].id
  },
  {
    title: "Identifying Wood",
    educator_id: demo_users[1].id
  },
  {
    title: "Kanye 101",
    educator_id: demo_users[1].id
  }
])

demo_subjects = Subject.create([
  {
    title: "Math"
  },
  {
    title: "Science"
  },
  {
    title: "Paint"
  },
  {
    title: "Woodworking"
  },
  {
    title: "Cosmology"
  },
  {
    title: "Cosmetology"
  },
])

demo_course_subjects = CourseSubject.create([
  {
    course_id: demo_courses[0].id,
    subject_id: demo_subjects[0].id
  },
  {
    course_id: demo_courses[1].id,
    subject_id: demo_subjects[0].id
  },
  {
    course_id: demo_courses[2].id,
    subject_id: demo_subjects[0].id
  },
  {
    course_id: demo_courses[1].id,
    subject_id: demo_subjects[1].id
  },
  {
    course_id: demo_courses[4].id,
    subject_id: demo_subjects[3].id
  },
  {
    course_id: demo_courses[3].id,
    subject_id: demo_subjects[2].id
  },
  {
    course_id: demo_courses[4].id,
    subject_id: demo_subjects[4].id
  },
  {
    course_id: demo_courses[5].id,
    subject_id: demo_subjects[4].id
  },
  {
    course_id: demo_courses[5].id,
    subject_id: demo_subjects[5].id
  },
])

demo_course_students = CourseStudent.create([
  {
    course_id: demo_courses[2].id,
    student_id: demo_users[2].id
  },
  {
    course_id: demo_courses[2].id,
    student_id: demo_users[3].id
  },
  {
    course_id: demo_courses[2].id,
    student_id: demo_users[4].id
  },
  {
    course_id: demo_courses[2].id,
    student_id: demo_users[5].id
  },
  {
    course_id: demo_courses[3].id,
    student_id: demo_users[2].id
  },
  {
    course_id: demo_courses[3].id,
    student_id: demo_users[3].id
  },
  {
    course_id: demo_courses[3].id,
    student_id: demo_users[4].id
  },
  {
    course_id: demo_courses[3].id,
    student_id: demo_users[5].id
  },
  {
    course_id: demo_courses[3].id,
    student_id: demo_users[6].id
  },
  {
    course_id: demo_courses[3].id,
    student_id: demo_users[7].id
  },
  {
    course_id: demo_courses[2].id,
    student_id: demo_users[6].id
  },
])

demo_quizzes = Quiz.create([
  {
    name: "Simple Quiz"
  },
  {
    name: "Colors Quiz"
  }
])

QuizSubject.create({quiz_id: Quiz.first.id, subject_id: Subject.first.id})

demo_course_quizzes = CourseQuiz.create([
  {
    course_id: demo_courses[2].id,
    quiz_id: demo_quizzes[0].id
  },
  {
    course_id: demo_courses[3].id,
    quiz_id: demo_quizzes[1].id
  },
])

demo_challenges = Challenge.create([
  {
    challenger_id: demo_users[2].id,
    challengee_id: demo_users[0].id,
    quiz_id: demo_quizzes[1].id,
  },
  {
    challenger_id: demo_users[3].id,
    challengee_id: demo_users[0].id,
    quiz_id: demo_quizzes[0].id,
  }
])

demo_questions = Question.create!([
  {
    body: "What is 2+2?",
    author_id: demo_users[0].id
  },
  {
    body: "Who was our first president?",
    author_id: demo_users[0].id
  },
  {
    body: "What is the color with the lowest frequency?",
    author_id: demo_users[1].id
  },
  {
    body: "Which is the following is not a color?",
    author_id: demo_users[1].id
  }
])

demo_quiz_questions = QuizQuestion.create!([
  {
    quiz_id: demo_quizzes[0].id,
    question_id: demo_questions[0].id
  },
  {
    quiz_id: demo_quizzes[0].id,
    question_id: demo_questions[1].id
  },
  {
    quiz_id: demo_quizzes[1].id,
    question_id: demo_questions[2].id
  },
  {
    quiz_id: demo_quizzes[1].id,
    question_id: demo_questions[3].id
  },
])

demo_answers = Answer.create!([
  {
    body: "1",
    question_id: demo_questions[0].id,
    is_correct: false
  },
  {
    body: "2",
    question_id: demo_questions[0].id,
    is_correct: false
  },
  {
    body: "3",
    question_id: demo_questions[0].id,
    is_correct: false
  },
  {
    body: "4",
    question_id: demo_questions[0].id,
    is_correct: true
  },
  {
    body: "Abraham Lincoln",
    question_id: demo_questions[1].id,
    is_correct: false
  },
  {
    body: "George Washington",
    question_id: demo_questions[1].id,
    is_correct: true
  },
  {
    body: "Thomas Jefferson",
    question_id: demo_questions[1].id,
    is_correct: false
  },
  {
    body: "Ben Franklin",
    question_id: demo_questions[1].id,
    is_correct: false
  },
  {
    body: "Purple",
    question_id: demo_questions[2].id,
    is_correct: false
  },
  {
    body: "Green",
    question_id: demo_questions[2].id,
    is_correct: false
  },
  {
    body: "Red",
    question_id: demo_questions[2].id,
    is_correct: true
  },
  {
    body: "Blue",
    question_id: demo_questions[2].id,
    is_correct: false
  },
  {
    body: "Yellow",
    question_id: demo_questions[3].id,
    is_correct: false
  },
  {
    body: "Blue",
    question_id: demo_questions[3].id,
    is_correct: false
  },
  {
    body: "Red",
    question_id: demo_questions[3].id,
    is_correct: false
  },
  {
    body: "Black",
    question_id: demo_questions[3].id,
    is_correct: true
  },
])

