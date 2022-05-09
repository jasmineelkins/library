# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'seeding books'
b1 =
  Book.create(
    title: 'The Very Hungry Caterpillar',
    author: 'Eric Carle',
    image:
      'https://upload.wikimedia.org/wikipedia/en/b/b5/HungryCaterpillar.JPG',
    description:
      'The Very Hungry Caterpillar is a children’s picture book, designed, illustrated, and written by Eric Carle. The book features a voracious caterpillar eating foodstuff before pupating and emerging as a butterfly. ',
  )

puts 'seeding users'
u1 = User.create(name: 'Jasmine', username: 'jas', password_digest: '')

puts 'seeding shelves'
s1 = Shelf.create(name: 'Read', book_id: b1.id, user_id: u1.id)

puts 'finished seeding 📚'
