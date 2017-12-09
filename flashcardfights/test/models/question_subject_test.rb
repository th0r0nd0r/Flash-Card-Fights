# == Schema Information
#
# Table name: question_subjects
#
#  id          :integer          not null, primary key
#  question_id :integer          not null
#  subject_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class QuestionSubjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
