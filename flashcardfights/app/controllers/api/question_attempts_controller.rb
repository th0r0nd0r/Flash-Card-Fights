class Api::QuestionAttemptsController < ApplicationController

  def create
    @question_attempt = QuestionAttempt.create(question_attempt_params)
    if @question_attempt.save
      render "api/question_attempts/show"
    else
      render @question_attempt.errors.full_messages
    end
  end

  private
  
  def question_attempt_params
    params.require(:question_attempt).permit(:question_id, :user_id, :score)
  end

end
