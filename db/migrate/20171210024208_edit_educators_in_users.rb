class EditEducatorsInUsers < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :is_educator, :boolean, default: false
  end
end
