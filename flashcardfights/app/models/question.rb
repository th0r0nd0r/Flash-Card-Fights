# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  author_id  :integer          not null
#  course_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord
  has_many :answers

  belongs_to :author,
  class_name: "User",
  foreign_key: :author_id,
  primary_key: :id

  belongs_to :course

  has_many :quiz_questions
  has_many :quizzes, through: :quiz_questions

end
