db.movieDetails.updateOne({title: "Alien Abduction"},
{$set:
 {poster: "http://ia.media.com/images"}
})



db.movieDetails.updateOne({title: "Alien Abduction"},
{$set:{
  "awards":  {
    "wins": 8,
    "nominations": 14,
    "text": "Nominated for 3 Golden Globes."
  }
}})


db.movieDetails.updateOne({title: "Alien Abduction"},
{$inc:{
 "tomato.review": 3,
 "tomato.userReviews": 25
 }
})



let reviewText1 = [
  "Alien Abduction could have been a sad drama film, instead it was a",
  "hilarious film with a litle bit of drama added to it."
].join()
db.movieDetails.updateOne({title: "Alien Abduction"},
{$push:{
  "reviews": {
    "rating": 4.5,
    "date": ISODate("2020-01-12T09:00:00Z"),
    "reviewer": "Spencer H.",
    text: reviewText1
  }
}})




let reviewText2 = [
  "This novel-adaptation is humorous"
].join()

let reviewText3 = [
  "A declaration of love"
].join()

let reviewText4 = [
  "He supporting the cast may be among the strongest seen on the last film"
].join()

db.movieDetails.updateOne(
  {title: "Alien Abduction"},
{$push:
  {
    "reviews":
    {
      $each:[
        {
          "rating": 4.5,
          "date": ISODate("2020-01-12T07:00:00Z"),
          "reviewer": "Yabo A.",
          text: reviewText2
        },
        {
          "rating": 5,
          "date": ISODate("2020-01-12T09:00:00Z"),
          "reviewer": "Kristina Z.",
          text: reviewText3
        },
        {
          "rating": 2.5,
          "date": ISODate("2019-10-12T04:00:00Z"),
          "reviewer": "Math Samuel",
          text: reviewText4
        }]
    }
}})
