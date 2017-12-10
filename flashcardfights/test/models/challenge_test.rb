# == Schema Information
#
# Table name: challenges
#
#  id               :integer          not null, primary key
#  challenger_id    :integer
#  quiz_id          :integer
#  challengee_id    :integer
#  completed        :boolean
#  challenger_score :float
#  challengee_score :float
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

require 'test_helper'

class ChallengeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
