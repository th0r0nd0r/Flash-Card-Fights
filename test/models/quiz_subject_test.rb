# == Schema Information
#
# Table name: quiz_subjects
#
#  id         :integer          not null, primary key
#  quiz_id    :integer          not null
#  subject_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class QuizSubjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
