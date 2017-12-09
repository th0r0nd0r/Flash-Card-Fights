class Api::QuizQuestionsController < ApplicationController

  def create
    @quiz_question = QuizQuestion.create(quiz_question_params)
    if @quiz_question.save
      render "api/quiz_questions/show"
    else
      render @quiz_questions.errors.full_messages
    end
  end

  private
  
  def quiz_question_params
    params.require(:quiz_question).permit(:quiz_id, :question_id)
  end

end
