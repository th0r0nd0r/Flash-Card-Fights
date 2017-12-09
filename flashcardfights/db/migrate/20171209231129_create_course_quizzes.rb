class CreateCourseQuizzes < ActiveRecord::Migration[5.1]
  def change
    create_table :course_quizzes do |t|
      t.integer :course_id, null: false
      t.integer :quiz_id, null: false
      t.timestamps
    end
    add_index :course_quizzes, :course_id
    add_index :course_quizzes, :quiz_id
  end
end
