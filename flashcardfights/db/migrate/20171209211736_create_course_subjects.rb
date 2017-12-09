class CreateCourseSubjects < ActiveRecord::Migration[5.1]
  def change
    create_table :course_subjects do |t|
      t.integer :course_id, null: false
      t.integer :subject_id, null: false
      t.timestamps
    end
    add_index :course_subjects, :course_id
    add_index :course_subjects, :subject_id
  end
end
