class Api::SubjectsController < ApplicationController
  
  def index
    @subjects = Subject.all
    if @subjects
      render "api/subjects/index"
    else
      render json: ['Couldn\'t find any subjects']
    end
  end
end
