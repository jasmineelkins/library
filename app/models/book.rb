class Book < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :users, through: :reviews

  has_many :shelfspaces, dependent: :destroy
  has_many :shelves, through: :shelfspaces

  validates :image, :title, presence: true

  # def status
  #   reviews ? reviews.first.status : null
  # end
end
