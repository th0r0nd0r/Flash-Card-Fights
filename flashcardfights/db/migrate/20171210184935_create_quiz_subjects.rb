class CreateQuizSubjects < ActiveRecord::Migration[5.1]
  def change
    create_table :quiz_subjects do |t|
      t.integer :quiz_id, null: false
      t.integer :subject_id, null: false
      t.timestamps
    end
  end
end
