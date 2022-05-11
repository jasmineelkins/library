class Shelf < ApplicationRecord
  belongs_to :user

  has_many :shelfspaces, dependent: :destroy
  has_many :books, through: :shelfspaces
end
