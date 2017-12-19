# == Schema Information
#
# Table name: quiz_questions
#
#  id          :integer          not null, primary key
#  quiz_id     :integer          not null
#  question_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class QuizQuestionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
