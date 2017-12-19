class CreateQuizQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :quiz_questions do |t|
      t.integer :quiz_id, null: false
      t.integer :question_id, null: false
      t.timestamps
    end
    add_index :quiz_questions, :quiz_id
    add_index :quiz_questions, :question_id
  end
end
