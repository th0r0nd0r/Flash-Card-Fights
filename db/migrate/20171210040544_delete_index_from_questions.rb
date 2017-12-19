class DeleteIndexFromQuestions < ActiveRecord::Migration[5.1]
  def change
    remove_index :questions, :course_id
  end
end
