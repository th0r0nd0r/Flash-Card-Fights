class QuizSubject < ApplicationRecord
  belongs_to :quiz
  belongs_to :subject
end
