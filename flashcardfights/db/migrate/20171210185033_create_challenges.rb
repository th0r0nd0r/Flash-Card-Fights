class CreateChallenges < ActiveRecord::Migration[5.1]
  def change
    create_table :challenges do |t|
      t.integer :challenger_id
      t.integer :quiz_id
      t.integer :challengee_id
      t.boolean :completed
      t.float :challenger_score
      t.float :challengee_score
      t.timestamps
    end
  end
end
