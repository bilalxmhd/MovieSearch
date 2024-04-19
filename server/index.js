import express from "express"; 
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


app.get('/api/movies', async (req, res) => {
  const searchTerm = req.query.search;
  const API_URL = 'http://www.omdbapi.com/?apikey=f28f01f2'; // Replace with your OMDb API key

  try {
    const response = await axios.get(`${API_URL}&s=${title}`);
    const data = response.data;
    if (data.Search) {
      const movies = data.Search.map((movie) => ({
        title: movie.Title,
        poster: movie.Poster,
        year: movie.Year,
      }));
      res.json(movies);
    } else {
      res.json([]); // Handle no results scenario
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching movie data' });
  }
});



app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
  });