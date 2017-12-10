# == Schema Information
#
# Table name: quizzes
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Quiz < ApplicationRecord
  has_many :quiz_questions
  has_many :questions, through: :quiz_questions
  has_many :quiz_attempts
  has_many :quiz_subjects
  has_many :subjects, through: :quiz_subjects

  def average_score
    num_attempts = self.quiz_attempts.count
    return 50 if num_attempts == 0
    total = 0
    self.quiz_attempts.each do |attempt|
      total += attempt.score 
    end
    total / num_attempts
  end
end
