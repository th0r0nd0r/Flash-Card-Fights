# == Schema Information
#
# Table name: quiz_attempts
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  quiz_id    :integer
#  score      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class QuizAttempt < ApplicationRecord
end
