class CreateQuestionSubjects < ActiveRecord::Migration[5.1]
  def change
    create_table :question_subjects do |t|
      t.integer :question_id, null: false
      t.integer :subject_id, null: false
      t.timestamps
    end
    add_index :question_subjects, :question_id
    add_index :question_subjects, :subject_id
  end
end
