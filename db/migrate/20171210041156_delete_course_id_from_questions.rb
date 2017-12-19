class DeleteCourseIdFromQuestions < ActiveRecord::Migration[5.1]
  def change
    remove_column :questions, :course_id
  end
end
