class Api::QuestionAttemptsController < ApplicationController

  def create
    @question_attempt = QuestionAttempt.create(question_attempt_params)
    if @question_attempt.save
      render "api/question_attempts/show"
    else
      render @question_attempt.errors.full_messages, status, 422
    end
  end

  def destroy
    @question_attempt = QuestionAttempt.find(params[:id])
    if @question_attempt
      QuestionAttempt.destroy(@question_attempt.id)
      render "api/question_attempts/show"
    else
      render json: "Could not destroy what was not found", status: 404
    end
  end

  def show
    @question_attempt = QuestionAttempt.find(params[:id])
    if @question_attempt
      render "api/question_attempts/show"
    else
      render json: "Couldn't find question attempt", status: 404
    end
  end

  private

  def question_attempt_params
    params.require(:question_attempt).permit(:question_id, :user_id, :score)
  end

end
