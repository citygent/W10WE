var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose 
seeder.connect('mongodb://localhost:27017/i-like-angular-js', function() {
  // Load Mongoose models, one directory up because of where called from in npm start!
  seeder.loadModels(['./models/postModel.js']);
  // Clear specified collections 
  seeder.clearModels(['Post'], function() {
    // Callback to populate DB once collections have been cleared 
    seeder.populateModels(data);
  });
});

// Data array containing seed data - documents organized by Model 
var data = [
  { 
    'model': 'Post',
    'documents': [
      {
        'author': 'Rob Holloway',
        'content': 'I love Angular because it means more escaping from SQL!',
        'authorAvatar': 'someURL',
        'thumb': 'someURL',
        'upvotes': 8,
        'time': ''
      },
      {
        'author': 'Yao Yuan',
        'content': 'I am already working on Angular 3.0',
        'authorAvatar': 'someURL',
        'thumb': 'someURL',
        'upvotes': 6,
        'time': ''
      },
      {
        'author': 'Mike Jones',
        'content': 'I love Angular more than the Army, wahwahwah sobsob',
        'authorAvatar': 'someURL',
        'thumb': 'someURL',
        'upvotes': 7,
        'time': ''
      },
      {
        'author': 'Denis Doan',
        'content': 'I don\'t get it, is Angular an API?',
        'authorAvatar': 'someURL',
        'thumb': 'someURL',
        'upvotes': 5,
        'time': ''
      },
      {
        'author': 'Jack Somerville',
        'content': 'As soon as Jen did it all for me, I fell in love with how easy Angular is.',
        'authorAvatar': 'someURL',
        'thumb': 'someURL',
        'upvotes': 3,
        'time': ''
      },
      {
        'author': 'Niall Wallace',
        'content': 'Neewayyy man, I cannae get enough of this angyella y\'kna?',
        'authorAvatar': 'someURL',
        'thumb': 'someURL',
        'upvotes': 4,
        'time': ''
      },
      {
        'author': 'Alberto Ittaliano',
        'content': 'Ohh noo, no more JakeWeeeeeeeeeaaaarri!',
        'authorAvatar': 'someURL',
        'thumb': 'someURL',
        'upvotes': 2,
        'time': ''
      },
      {
        'author': 'Jake Weary',
        'content': 'Seriously what the fuck, guys? I thought we were cool now? :\'(',
          'authorAvatar': 'someURL',
        'thumb': 'someURL',
        'upvotes': 1,
        'time': ''
      },
      {
        'author': 'Guillaume Perrin',
        'content': 'Deburgers are great, but you don\'t see many of them in Angular. This is a shame non?',
        'authorAvatar': 'someURL',
        'thumb': 'someURL',
        'upvotes': 9,
        'time': ''
      },
      {
        'author': 'Ambar Sehti',
        'content': 'Disrupting James in class is my favourite thing to do. Angular enables me to be more productive at disrupting James so I think it\'s a winner!',
        'authorAvatar': 'someURL',
        'thumb': 'someURL',
        'upvotes': 8,
        'time': ''
      },
      {
        'author': 'Xzibit Nathanial',
        'content': 'Yo dawg, we heard you like callbacks, so we put an angular in your front-end, a node in the back, and a mongoDB for lulz. Now you can callback whilst you callback in your callbacking callback callbacker! fuction(callback){callback()}.then(callback)',
        'authorAvatar': 'someURL',
        'thumb': 'someURL',
        'upvotes': 7,
        'time': ''
      }
    ]
  }
];  
