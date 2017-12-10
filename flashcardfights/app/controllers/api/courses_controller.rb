class Api::CoursesController < ApplicationController
  
  def create
    @course = Course.create(course_params)
    if @course.save!
      render "api/courses/show"
    else
      render @course.errors.full_messages, status: 422
    end
  end
  
  def index
    @courses = Course.all
    render "api/courses/index"
  end
  
  def show
    @course = Course.find(params[:id])
    if @course
      render "api/courses/show"
    else
      render json: ['Could not find course'], status: 404
    end
  end
  
  def destroy
    @course = Course.find(params[:id])
    if @course
      Course.destroy(@course.id)
      render "api/courses/show"
    else
      render json: ['Can\'t delete what doesn\'t exist'], status:404
    end
  end
  
  def update
    @course = Course.find(params[:id])
    if @course.update(course_params)
      render "api/courses/show"
    else
      render json: @course.errors.full_messages, status:401
    end
  end
  
  private
  
  def course_params
    params.require(:course).permit(:title, :educator_id)
  end
  
end
