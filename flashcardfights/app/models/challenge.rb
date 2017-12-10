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

class Challenge < ApplicationRecord
  belongs_to :challenger,
    class_name: "User",
    foreign_key: :challenger_id,
    primary_key: :id

  belongs_to :challengee,
    class_name: "User",
    foreign_key: :challengee_id,
    primary_key: :id

  has_one :quiz

end
