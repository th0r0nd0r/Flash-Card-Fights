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
  
  def create
    @course = Course.create(course_params)
    if @course.save!
      render "api/courses/show"
    else
      render @course.errors.full_messages, status: 422
    end
    
  end
  
  private
  
  def course_params
    params.require(:course).permit(:title, :educator_id)
  end
  
  
end
