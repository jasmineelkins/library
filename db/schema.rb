# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_05_11_180055) do
  create_table "books", force: :cascade do |t|
    t.string "title"
    t.string "author"
    t.string "image"
    t.string "description"
    t.string "genre"
    t.string "pages"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.string "content"
    t.integer "book_id"
    t.integer "user_id"
    t.integer "rating"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "shelfspaces", force: :cascade do |t|
    t.integer "book_id"
    t.integer "shelf_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "shelves", force: :cascade do |t|
    t.string "name"
    t.string "book_id"
    t.string "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password_digest"
    t.string "image"
    t.string "about"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
