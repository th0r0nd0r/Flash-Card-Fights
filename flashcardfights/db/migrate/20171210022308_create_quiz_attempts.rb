class CreateQuizAttempts < ActiveRecord::Migration[5.1]
  def change
    create_table :quiz_attempts do |t|
      t.integer :user_id
      t.integer :quiz_id
      t.integer :score
      t.timestamps
    end
    add_index :quiz_attempts, :user_id
    add_index :quiz_attempts, :quiz_id
  end
end
