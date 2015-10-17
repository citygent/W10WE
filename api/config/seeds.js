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
        'content': 'I love Angular because it means more escaping from SQL!'
      },
      {
        'author': 'Yao Yuan',
        'content': 'I am already working on Angular 3.0'
      },
      {
        'author': 'Mike Jones',
        'content': 'I love Angular more than the Army, wahwahwah sobsob'
      },
      {
        'author': 'Denis Doan',
        'content': 'I don\'t get it, is Angular an API?'
      },
      {
        'author': 'Jack Somerville',
        'content': 'As soon as Jen did it all for me, I fell in love with how easy Angular is.'
      },
      {
        'author': 'Niall Wallace',
        'content': 'Neewayyy man, I cannae get enough of this angyella y\'kna?'
      },
      {
        'author': 'Alberto Ittaliano',
        'content': 'Ohh noo, no more JakeWeeeeeeeeeaaaarri!'
      },
      {
        'author': 'Jake Weary',
        'content': 'Seriously what the fuck, guys? I thought we were cool now? :\'('
      },
      {
        'author': 'Guillaume Perrin',
        'content': 'Deburgers are great, but you don\'t see many of them in Angular. This is a shame non?'
      },
      {
        'author': 'Ambar Sehti',
        'content': 'Disrupting James in class is my favourite thing to do. Angular enables me to be more productive at disrupting James so I think it\'s a winner!'
      },
      {
        'author': 'Xzibit Nathanial',
        'content': 'Yo dawg, we heard you like callbacks, so we put an angular in your front-end, a node in the back, and a mongoDB for lulz. Now you can callback whilst you callback in your callbacking callback callbacker! fuction(callback){callback()}.then(callback)'
      }
    ]
  }
];  
