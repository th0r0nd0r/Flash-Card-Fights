class Api::QuestionSubjectsController < ApplicationController

  def create
    @question_subject = QuestionSubject.create(question_subject_params)
    if @question_subject.save
      render "api/question_subjects/show"
    else
      render @question_subject.errors.full_messages
    end
  end
  
  def destroy
    @question_subject = QuestionSubject.find(params[:id])
    if @question_subject
      QuestionSubject.destroy(@question_subect.id)
      render "api/question_subjects/show"
    else
      render "Couldn't find question subject to destroy"
    end
  end
  
  def show
    @question_subject = QuestionSubject.find(params[:id])
    if @question_subject
      render "api/question_subjects/show"
    else
      render "Could not find question subject"
    end
  end

  private
  
  def question_subject_params
    params.require(:question_subject).permit(:question_id, :subject_id)
  end

end
