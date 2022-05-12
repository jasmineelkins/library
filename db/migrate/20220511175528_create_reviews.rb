class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :content
      t.integer :book_id
      t.integer :user_id
      t.integer :rating
      t.string :status

      t.timestamps
    end
  end
end
