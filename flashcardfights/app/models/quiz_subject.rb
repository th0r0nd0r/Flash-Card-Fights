# == Schema Information
#
# Table name: quiz_subjects
#
#  id         :integer          not null, primary key
#  quiz_id    :integer          not null
#  subject_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class QuizSubject < ApplicationRecord
  belongs_to :quiz
  belongs_to :subject
end
