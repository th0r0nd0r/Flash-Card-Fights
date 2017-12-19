# == Schema Information
#
# Table name: quiz_attempts
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  quiz_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  score      :float
#

require 'test_helper'

class QuizAttemptTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
