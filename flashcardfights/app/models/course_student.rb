# == Schema Information
#
# Table name: course_students
#
#  id         :integer          not null, primary key
#  course_id  :integer          not null
#  student_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CourseStudent < ApplicationRecord
  belongs_to :enrolled_course,
    class_name: "Course",
    foreign_key: :course_id,
    primary_key: :id

  belongs_to :student,
    class_name: "User",
    foreign_key: :student_id,
    primary_key: :id
end
