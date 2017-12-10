# == Schema Information
#
# Table name: course_quizzes
#
#  id         :integer          not null, primary key
#  course_id  :integer          not null
#  quiz_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class CourseQuizTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
