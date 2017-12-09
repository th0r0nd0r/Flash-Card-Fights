class Api::AnswersController < ApplicationController

  def create
    @answer = Answer.create(answer_params)
    if @answer.save
      render "api/answers/show"
    else
      render @answer.errors.full_messages
    end
  end

  private

  def answers_params
    params.require(:answer).permit(:question_id, :body, :is_correct)
  end

end
