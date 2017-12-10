class Api::QuizzesController < ApplicationController

  def create
    @quiz = Quiz.create(quizzes_params)
    if @quiz.save
      render "api/quizzes/show"
    else
      render @quiz.errors.full_messages
    end
  end

  def index
    @quizzes = Quiz.find_by(course_id: params[:course_id])
    if @quizzes
      render "api/quizzes/index"
    else
      render json: ['Could not find any quizzes'], status: 404
    end
  end

  def show
    @quiz = Quiz.includes(questions: [:answers]).find(params[:id])
    if @quiz
      render "api/quizzes/show"
    else
      render json: ['Could not find quiz'], status: 404
    end
  end

  def update
    @quiz = Quiz.find(params[:id])
    if @quiz.update(quiz_params)
      render "api/quizzes/show"
    else
      render json: @quiz.errors.full_messages, status:401
    end
  end

  def destroy
    @quiz = Quiz.find(params[:id])
    if @quiz
      Quiz.destroy(@quiz.id)
      render "api/quizzes/show"
    else
      render json: ['Can\'t delete what doesn\'t exist']
    end
  end

  private

  def quizzes_params
    params.require(:quiz).permit(:name)
  end

end
