class Api::CourseSubjectsController < ApplicationController

  def create
    @course_subject = CourseSubject.create(course_subject_params)
    if @course_subject.save
      render "api/course_subjects/show"
    else
      render @course_subject.errors.full_messages
    end
  end

  private
  
  def course_subject_params
    params.require(:course_subject).permit(:course_id, :subject_id)
  end

end
