class CreateCourses < ActiveRecord::Migration[5.1]
  def change
    create_table :courses do |t|
      t.string :title, null: false
      t.integer :educator_id, null: false
      t.timestamps
    end
    add_index :courses, :educator_id, unique: true
  end
end
