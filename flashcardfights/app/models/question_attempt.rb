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

class QuestionAttempt < ApplicationRecord
  belongs_to :user
  belongs_to :question
end
