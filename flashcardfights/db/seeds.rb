# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo_users = User.create([
  {
    username: 'Captain Kirk',
    password: 'captainslog',
    img_url: 'http://pixel.nymag.com/imgs/daily/vulture/2015/07/26/26-Kirk.w529.h529.jpg'
  },
  {
    username: 'Jack Sparrow',
    password: 'whynorum',
    img_url: 'https://lumiere-a.akamaihd.net/v1/images/bluesteel_d0f846ee.jpeg?region=0%2C0%2C1580%2C880'
  },
  {
    username: 'John Madden',
    password: 'football',
    img_url: 'https://cbssanfran.files.wordpress.com/2010/09/johnmadden01-250.jpg?w=318&h=318&crop=1'
  },
  {
    username: 'Whoopee Goldberg',
    password: 'crazydrinks',
    img_url: 'http://www.treknews.net/wp-content/uploads/2016/08/whoopi-goldberg-guinan-star-trek-tng.jpg'
  }
])

demo_courses = Course.create([
  {
    title: "Captain Kirk's Math Class",
    educator_id: 1,
  },
  {
    title: "4th Grade Algebra",
    educator_id: 2
  },
  {
    title: "5th Grade Calculus",
    educator_id: 2
  },
  {
    title: "Mysteries of Paint",
    educator_id: 2
  },
  {
    title: "Identifying Wood",
    educator_id: 2
  },
  {
    title: "Kanye 101",
    educator_id: 1
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
    course_id: demo_users[2].id,
    student_id: demo_courses[0].id
  },
  {
    course_id: demo_users[2].id,
    student_id: demo_courses[1].id
  },
  {
    course_id: demo_users[2].id,
    student_id: demo_courses[2].id
  },
  {
    course_id: demo_users[2].id,
    student_id: demo_courses[3].id
  },
  {
    course_id: demo_users[2].id,
    student_id: demo_courses[4].id
  },
  {
    course_id: demo_users[2].id,
    student_id: demo_courses[5].id
  },
  {
    course_id: demo_users[3].id,
    student_id: demo_courses[0].id
  },
  {
    course_id: demo_users[3].id,
    student_id: demo_courses[1].id
  },
  {
    course_id: demo_users[3].id,
    student_id: demo_courses[2].id
  },
  {
    course_id: demo_users[3].id,
    student_id: demo_courses[3].id
  },
  {
    course_id: demo_users[3].id,
    student_id: demo_courses[4].id
  },
])