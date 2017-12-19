class Api::QuizSubjectsController < ApplicationController
  def create
    @quiz_subject = QuizSubject.create(quiz_subject_params)
    if @quiz_subject.save
      render "api/quiz_subjects/show"
    else
      render @quiz.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @quiz_subject = QuizSubject.find(params[:id])
    if @quiz_subject.destroy
      render "api/quiz_subjects/show"
    else
      render @quiz_subject.errors.full_messages
    end
  end
  
  def show
    @quiz_subject = QuizSubject.find(params[:id])
    if @quiz_subject
      render "api/quiz_subjects/show"
    else
      render json: "No quiz subject found", status: 404
    end
  end

  private
  
  def quiz_subject_params
    params.require(:quiz_subject).permit(:quiz_id, :subject_id)
  end

end