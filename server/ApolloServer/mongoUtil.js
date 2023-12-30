import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const myDB =
  'mongodb+srv://zapata124:zapata124@cluster0.xhq33z5.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(myDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'To-Dos',
});
const restaurantEmployeeSchema = new Schema({
  name: String,
  age: Number,
  position: String,
  timeSheet: []
})

const DB = process.env.MONGO_URI || myDB;

const Model = mongoose.model('User', new Schema({}, { strict: false }));
// const Model = mongoose.model('test', restaurantEmployeeSchema);

export default Model;
