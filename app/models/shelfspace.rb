class Shelfspace < ApplicationRecord
  belongs_to :book
  belongs_to :shelf
end
