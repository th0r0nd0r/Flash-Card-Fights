class Api::QuizzesController < ApplicationController

  def create
    @quiz = Quiz.create(quizzes_params)
    if @quiz.save
      render "api/quizzes/show"
    else
      render @quiz.errors.full_messages
    end
  end

  private
  
  def quizzes_params
    params.require(:quiz).permit(:name)
  end

end
