# == Schema Information
#
# Table name: question_attempts
#
#  id          :integer          not null, primary key
#  question_id :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  score       :float
#

require 'test_helper'

class QuestionAttemptTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
