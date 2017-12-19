class RemoveUniquenessFromEducatorId < ActiveRecord::Migration[5.1]
  def change
    remove_index :courses, :educator_id
    add_index :courses, :educator_id
  end
end
