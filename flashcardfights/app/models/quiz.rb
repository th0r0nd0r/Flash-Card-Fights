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
end
