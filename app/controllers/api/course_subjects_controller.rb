class Api::CourseSubjectController < ApplicationController

  def create
    @course_subject = CourseSubject.create(course_subject_params)
    if @course_subject.save
      render "api/course_subjects/show"
    else
      render @course.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @course_subject = CourseSubject.find(params[:id])
    if @course_subject.destroy
      render "api/course_subjects/show"
    else
      render @course_subject.errors.full_messages
    end
  end
  
  def show
    @course_subject = CourseSubject.find(params[:id])
    if @course_subject
      render "api/course_subjects/show"
    else
      render json: "No course subject found", status: 404
    end
  end

  private
  
  def course_subject_params
    params.require(:course_subject).permit(:course_id, :subject_id)
  end

end
