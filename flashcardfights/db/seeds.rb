# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo_users = User.create([
  {
    username: 'Captain Kirk',
    password: 'captainslog',
    img_url: 'http://pixel.nymag.com/imgs/daily/vulture/2015/07/26/26-Kirk.w529.h529.jpg'
  },
  {
    username: 'Jack Sparrow',
    password: 'whynorum',
    img_url: 'https://lumiere-a.akamaihd.net/v1/images/bluesteel_d0f846ee.jpeg?region=0%2C0%2C1580%2C880'
  },
  {
    username: 'John Madden',
    password: 'football',
    img_url: 'https://cbssanfran.files.wordpress.com/2010/09/johnmadden01-250.jpg?w=318&h=318&crop=1'
  },
  {
    username: 'Whoopee Goldberg',
    password: 'crazydrinks',
    img_url: 'http://www.treknews.net/wp-content/uploads/2016/08/whoopi-goldberg-guinan-star-trek-tng.jpg'
  }
])

