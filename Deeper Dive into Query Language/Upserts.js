let detail = {
  "title": "The Martian",
  "year": 2020,
  "rated": "PG-13",
  "relesead": ISODate("2020-01-02T04:00:00Z"),
  "runtime": 144,
  "countries": ["USA", "UK"],
  "genres": ["Aventure", "Drama", "Sci-fi"],
  "director": "Ridley Scott",
  "writers": ["Drew Goddard", "Andy Weir"],
  "actors": ["Matt Damon", "Jessica Chastain", "Kristen Wiig"]

}

db.movieDetails.updateOne(
  {"imdb.id": detail.imdb.id},
{$set:
  detail
},
{upset: true}
)
