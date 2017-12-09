# == Schema Information
#
# Table name: question_attempts
#
#  id          :integer          not null, primary key
#  question_id :integer          not null
#  user_id     :integer          not null
#  score       :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class QuestionAttempt < ApplicationRecord
end
