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

require 'test_helper'

class CourseStudentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
