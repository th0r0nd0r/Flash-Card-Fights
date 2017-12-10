json.partial! "api/courses/course", course: @course

json.students do
  @course.students.each do |student|
    json.set! student.id do
      json.partial! "api/users/user", user: student
    end
  end
end