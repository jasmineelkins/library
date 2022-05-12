class Book < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :users, through: :reviews

  has_many :shelfspaces, dependent: :destroy
  has_many :shelves, through: :shelfspaces

  validates :image, :title, presence: true
end
