class CreateAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :answers do |t|
      t.integer :question_id, null: false
      t.string :body
      t.boolean :is_correct
      t.timestamps
    end
    add_index :answers, :question_id
  end
end
