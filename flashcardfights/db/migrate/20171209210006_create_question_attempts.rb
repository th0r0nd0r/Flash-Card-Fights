class CreateQuestionAttempts < ActiveRecord::Migration[5.1]
  def change
    create_table :question_attempts do |t|
      t.integer :question_id, null: false
      t.integer :user_id, null: false
      t.integer :score
      t.timestamps
    end
    add_index :question_attempts, :question_id
    add_index :question_attempts, :user_id
  end
end
