class Api::QuizAttemptsController < ApplicationController

  def create
    @quiz_attempt = QuizAttempt.create(quiz_attempt_params)
    if @quiz_attempt.save
      render "api/quiz_attempts/show"
    else
      render @quiz_attempt.errors.full_messages
    end
  end

  def destroy
    @quiz_attempt = QuizAttempt.find(params[:id])
    if @quiz_attempt
      QuizAttempt.destroy(@quiz_attempt.id)
      render "api/quiz_attempt/show"
    else
      render json: "Could not find quiz attempt to destroy"
    end
  end

  def show
    @quiz_attempt = QuizAttempt.find(params[:id])
    if @quiz_attempt
      QuizAttempt.destroy(@quiz_attempt.id)
      render "api/quiz_attempts/show"
    else
      render json: "Could not find quiz attempt to show"
    end
  end

  private

  def quiz_attempt_params
    params.require(:quiz_attempt).permit(:quiz_id, :user_id, :score)
  end
end
