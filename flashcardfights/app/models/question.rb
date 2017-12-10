# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord
  has_many :answers

  belongs_to :author,
  class_name: "User",
  foreign_key: :author_id,
  primary_key: :id

  has_many :quiz_questions
  has_many :quizzes, through: :quiz_questions

  has_many :question_attempts

  def average_score
    num_attempts = self.question_attempts.count
    return 50 if num_attempts == 0
    total = 0
    self.question_attempts.each do |attempt|
      total += attempt.score 
    end
    total / num_attempts
  end

end
