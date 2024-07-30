const express= require('express');
const dotenv = require('dotenv');
const app= express();
const mongoose= require('mongoose');
dotenv.config()

app.use(express.json())
app.use("/api",require("./routes/userRoutes"))

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("database connected"))
.catch((err)=> console.error ("err",err))




/*
// Routes
app.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json( {message: err.message} );
    }
  });
  
  app.post('/users', async (req, res) => {
    try {
      const user = new User(req.body);
      const savedUser = await user.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  app.put('/users/:id', async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedUser);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  app.delete('/users/:id', async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      res.json(deletedUser);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });*/






  const PORT=process.env.PORT
  app.listen(PORT,()=> console.log("my server is running on port:",PORT))