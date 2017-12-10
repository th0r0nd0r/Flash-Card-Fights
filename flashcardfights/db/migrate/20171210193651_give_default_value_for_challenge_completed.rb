class GiveDefaultValueForChallengeCompleted < ActiveRecord::Migration[5.1]
  def change
    remove_column :challenges, :completed
    add_column :challenges, :completed, :boolean, default: false
    remove_column :challenges, :challenger_score
    add_column :challenges, :challenger_score, :float, default: nil
    remove_column :challenges, :challengee_score
    add_column :challenges, :challengee_score, :float, default: nil
  end
end
