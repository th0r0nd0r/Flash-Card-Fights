class Api::CoursesController < ApplicationController
  
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
