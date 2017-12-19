class ChangeScoreIntegersToFloats < ActiveRecord::Migration[5.1]
  def change
    remove_column :question_attempts, :score
    remove_column :quiz_attempts, :score
    add_column :question_attempts, :score, :float
    add_column :quiz_attempts, :score, :float
  end
end
