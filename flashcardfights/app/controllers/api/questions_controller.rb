class Api::QuestionsController < ApplicationController
  
  def create
    @question = Question.create(course_params)
    if @question.save!
      render "api/courses/show"
    else
      render @question.errors.full_messages, status: 422
    end
  end
  
  private
  
  def question_params
    params.require(:question).permit(:body, :author_id, :course_id)
  end
  
end
