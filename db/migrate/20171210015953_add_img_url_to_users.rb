class AddImgUrlToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :img_url, :string, null: false, default: "http://food.fnr.sndimg.com/content/dam/images/food/editorial/talent/guy-fieri/FN-TalentAvatar-Guy-Fieri-800x800.jpg.rend.hgtvcom.616.616.suffix/1457720995801.jpeg"
  end
end
