class Api::CourseQuizzesController < ApplicationController
  
  def create
    @course_quiz = CourseQuiz.create(course_quiz_params)
    if @course_quiz.save
      render "api/course_quizzes/show"
    else
      render @course_quiz.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @course_quiz = CourseQuiz.find(params[:id])
    if @course_quiz
      CourseQuiz.destroy(@course_quiz.id)
    else
      render json: ['Can\'t destroy what doesn\'t exist']
    end
  end
  
  def show
    @course_quiz = CourseQuiz.find(params[:id])
    if @course_quiz
      render "api/course_quizzes/show"
    else
      render json: ['Couldn\'t find course quiz'], status: 404
    end
  end
  
  private
  
  def course_quiz_params
    params.require(:course_quiz).permit(:course_id, :quiz_id)
  end
end
