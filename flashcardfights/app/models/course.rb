# == Schema Information
#
# Table name: courses
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  educator_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Course < ApplicationRecord
end
