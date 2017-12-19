# == Schema Information
#
# Table name: course_subjects
#
#  id         :integer          not null, primary key
#  course_id  :integer          not null
#  subject_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CourseSubject < ApplicationRecord

  belongs_to :course
  belongs_to :subject

end
