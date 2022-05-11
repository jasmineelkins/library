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
      'https://books.google.com/books/content?id=DpGEQgAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71k32jUiXyHYmr83qbcFYs-71Vz9BKqDwnniPMc-LuLpKk1uNnI54-tRMZitg5ppeX1x-Dx-wYTVOkjh9ACtr5eWPR12GP2lJQ6x7MaEMQdbhicihXRBuoZhezdepw8T8gwnmOm',
    description:
      'A much-loved classic, The Very Hungry Caterpillar has won over millions of readers with its vivid and colourful collage illustrations and its deceptively simply, hopeful story. With its die-cut pages and finger-sized holes to explore, this is a richly satisfying book for children.',
    pages: 26,
    genre: 'Picture book',
  )

b2 =
  Book.create(
    title: 'Neal Stephenson ',
    author: 'Neal Stephenson',
    image:
      'https://books.google.com/books/publisher/content?id=0VWdBAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U3z5oH0w_OEVoyiIA7PX20-YD5jvg&w=1280',
    description:
      'What would happen if the world were ending?

A catastrophic event renders the earth a ticking time bomb. In a feverish race against the inevitable, nations around the globe band together to devise an ambitious plan to ensure the survival of humanity far beyond our atmosphere, in outer space.',
    pages: 880,
    genre: 'Science fiction',
  )

b3 =
  Book.create(
    title: 'Oathbringer',
    author: 'Brandon Sanderson',
    image:
      'https://books.google.com/books/publisher/content?id=VsT3DQAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U3-n1ZsZRkXo6a77rgIqBD-CCwAEg&w=1280',
    description:
      'In Oathbringer, the third volume of the New York Times bestselling Stormlight Archive, humanity faces a new Desolation with the return of the Voidbringers, a foe with numbers as great as their thirst for vengeance.',
    pages: 1248,
    genre: 'Fantasy',
  )

puts 'seeding users'
u1 = User.create(name: 'Jasmine', username: 'jas', password_digest: '')

puts 'seeding shelves'
s1 = Shelf.create(name: 'Currently Reading', book_id: b3.id, user_id: u1.id)
s2 = Shelf.create(name: 'Want to Read', book_id: b2.id, user_id: u1.id)
s3 = Shelf.create(name: 'Read', book_id: b1.id, user_id: u1.id)

puts 'finished seeding 📚'
