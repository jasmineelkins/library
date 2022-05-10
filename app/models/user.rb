class User < ApplicationRecord
  has_secure_password

  has_many :shelves, dependent: :destroy
  has_many :books, through: :shelves

  validates :username, :name, presence: true
  validates :username, uniqueness: true
end
