class Api::AnswersController < ApplicationController

  def create
    @answer = Answer.create(answer_params)
    if @answer.save
      render "api/answers/show"
    else
      render @answer.errors.full_messages
    end
  end
  
  def show
    @answer = Answer.find(params[:id])
    if @answer
      render "api/answer/show"
    else
      render json: "Could not find answer"
    end
  end
  
  def destroy
    @answer = Answer.find(params[:id])
    if @answer
      Answer.destroy(@answer.id)
      render "api/answers/show"
    else
      render json: "Couldn't find answer to destroy"
    end
  end

  private

  def answers_params
    params.require(:answer).permit(:question_id, :body, :is_correct)
  end

end
