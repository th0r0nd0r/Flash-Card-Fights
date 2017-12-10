class Api::ChallengesController < ApplicationController

  def index

  end

  def create
    @challenge = Challenge.create(challenge_params)
    if @challenge.save!
      render "api/challenges/show"
    else
      render @challenge.errors.full_messages, status: 422
    end
  end

  def show
    @challenge = Challenge.find(params[:id])
    render "api/challenges/show"
  end

  def update
    @challenge = Challenge.find(params[:id])
    if @challenge.update(challenges_params)
      render "api/challenges/show"
    else
      render json: @challenge.errors.full_messages, status: 401
    end
  end

  def destroy
    @challenge = Challenge.find(params[:id])
    if @challenge
      Challenge.destroy(@challenge.id)
    else
      render json: ['Can\'t delete what doesn\'t exist']
    end
  end

  private

  def challenge_params
    params.require(:challenge).permit(:challenger_id, :quiz_id, :challengee_id, :completed, :challenger_score, :challengee_score)
  end

end
