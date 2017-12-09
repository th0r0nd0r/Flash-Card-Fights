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

class CourseQuiz < ApplicationRecord
  belongs_to :course
  belongs_to :quiz
end
