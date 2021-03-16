const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
console.log("CONNECTION OPEN!!!");
})
.catch(err => {
  console.log("OH NO ERROR!!!!");
  console.log(err);
})

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

// personSchema.virtual('fullName').get(function() {
//     return `${this.first} ${this.last}`
// })

personSchema.virtual('fullName').
  get(function() {
    return this.name.first + ' ' + this.name.last;
   }).
  set(function(v) {
    this.name.first = v.substr(0, v.indexOf(' '));
    this.name.last = v.substr(v.indexOf(' ') + 1);
  });

// axl.fullName = 'William Rose';
const Person = mongoose.model('Person', personSchema);
