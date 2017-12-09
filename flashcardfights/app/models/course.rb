# == Schema Information
#
# Table name: courses
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  educator_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Course < ApplicationRecord
  
belongs_to :educator,
  class_name: "User",
  foreign_key: :educator_id,
  primary_key: :id

has_many :course_subjects
has_many :subjects, through: :course_subjects

has_many :course_quizzes
has_many :quizzes, through: :course_quizzes
  
end
