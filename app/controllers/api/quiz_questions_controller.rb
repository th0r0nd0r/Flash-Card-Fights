class Api::QuizQuestionsController < ApplicationController

  def create
    @quiz_question = QuizQuestion.create(quiz_question_params)
    if @quiz_question.save
      render "api/quiz_questions/show"
    else
      render @quiz_questions.errors.full_messages
    end
  end
  
  def destroy
    @quiz_question = QuizQuestion.find(params[:id])
    if @quiz_question
      QuizQuestion.destroy(@quiz_question.id)
      render "api/quiz_questions/show"
    else
      render json: "Could not find quiz question to destroy", status: 404
    end
  end

  def show
    @quiz_question = QuizQuestion.find(params[:id])
    if @quiz_question
      render "api/quiz_questions/show"
    else
      render json: "Could not find quiz question to show", status: 404
    end
  end

  private
  
  def quiz_question_params
    params.require(:quiz_question).permit(:quiz_id, :question_id)
  end

end
