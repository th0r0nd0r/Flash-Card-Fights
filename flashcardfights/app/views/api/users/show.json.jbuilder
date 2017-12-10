json.partial! "api/users/user", user: @user

json.courses do
  @user.courses.each do |course|
    json.partial! "api/courses/course", course: course
  end
end