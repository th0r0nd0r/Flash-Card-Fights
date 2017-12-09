class Api::QuestionSubjectsController < ApplicationController

  def create
    @question_subject = QuestionSubject.create(question_subject_params)
    if @question_subject.save
      render "api/question_subjects/show"
    else
      render @question_subject.errors.full_messages
    end
  end

  private
  
  def question_subject_params
    params.require(:question_subject).permit(:question_id, :subject_id)
  end

end
