class Api::QuestionsController < ApplicationController
  
  def create
    @question = Question.create(course_params)
    if @question.save!
      render "api/courses/show"
    else
      render @question.errors.full_messages, status: 422
    end
  end
  
  def show
    @quiz = Quiz.find(params[:id])
    render "api/quizzes/show"
  end

  def update
    @question = Quiz.find(params[:id])
    if @question.update(questions_params)
      render "api/questions/show"
    else
      render json: @question.errors.full_messages, status: 401
    end
  end
  
  def destroy
    @question = Question.find(params[:id])
    if @question
      Question.destroy(@question.id)
    else
      render json: ['Can\'t delete what doesn\'t exist']
    end
  end

  private
  
  def question_params
    params.require(:question).permit(:body, :author_id, :course_id)
  end
  
end
