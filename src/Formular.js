import React, { useState } from "react";


function Formular({ addNewMovie }) {
  const [movieName, movieNameChanged] = useState("");
  const [nick, nickChanged] = useState("");
  const [email, emailChanged] = useState("");
  const [review, reviewChanged] = useState("");
  const [date, dateChanged] = useState("");
  const [rating, ratingChanged] = useState("");
  //genre, genreChanged

  return (
    <>
      <h1>Pridaj recenziu</h1>
      <form method="get">
        <p>
          <label className="label" for="fname">
            <i className="fa fa-file-movie-o"></i> Názov filmu:*
          </label>
          <input
            value={movieName}
            onChange={(e) => {
              movieNameChanged(e.target.value);
            }}
            className="pole"
            type="text"
            id="fname"
            name="fname"
            required
          />
          <br />
        </p>
        <p>
          <label className="label" for="nick">
            <i className="fa fa-user-circle-o"></i> Meno/nick:
          </label>
          <input
            value={nick}
            onChange={(e) => {
              nickChanged(e.target.value);
            }}
            className="pole"
            type="text"
            id="nick"
            name="nick"
          />
          <br />
        </p>
        <p>
          <label className="label" for="email">
            <i className="fas fa-mail-bulk"></i> Email:*
          </label>
          <input
            value={email}
            onChange={(e) => {
              emailChanged(e.target.value);
            }}
            className="pole"
            type="email"
            id="email"
            name="email"
            required
          />
          <br />
        </p>
        <p>
          <label className="label" for="recenzia">
            <i className="fa fa-edit"></i> Recenzia:
          </label>
          <textarea
            value={review}
            onChange={(e) => {
              reviewChanged(e.target.value);
            }}
            className="pole"
            id="recenzia"
            name="recenzia"
          ></textarea>
        </p>
        <br />
        <p>
          <label className="label" for="date">
            <i className="fa fa-eye"></i> Videl som ho:
          </label>
          <input
            value={date}
            onChange={(e) => {
              dateChanged(e.target.value);
            }}
            className="poledate"
            type="date"
            id="date"
            name="date"
          />
          <br />
        </p>
        <br />
        <p>
          <label className="label" for="hodnotenie">
            <i className="fa fa-percent"></i> Hodnotenie: <br />
          </label>
          <input
            value={rating}
            onChange={(e) => {
              ratingChanged(e.target.value);
            }}
            className="poledate"
            type="range"
            id="hodnotenie"
            name="hodnotenie"
            min="0"
            max="100"
            step="10"
          />
          <br />
        </p>
        <br />
        <p>
          <label className="label">
            <i className="fa fa-bars"></i> Žáner:
          </label>

          <input type="radio" id="thriller" name="thriller" />
          <label for="thriller">Thriller</label>
          <br />
          <input type="radio" id="drama" name="drama" />
          <label for="drama">Dráma</label>
          <br />
          <input type="radio" id="komedia" name="komedia" />
          <label for="komedia">Komédia</label>
          <br />
          <input type="radio" id="romantika" name="romantika" />
          <label for="romantika">Romantika</label>
          <br />
          <input type="radio" id="horor" name="horor" />
          <label for="horor">Horor</label>
          <br />
          <input type="radio" id="rozpravka" name="rozpravka" />
          <label for="rozpravka">Rozprávka</label>
          <br />
        </p>
        <br />
        <button
          onClick={() => {
            addNewMovie((movies) => {

              let newReview = movies.concate({
                movieName: movieName,
                nick: nick,
                email: email,
                review: review,
                date: date,
                rating: rating,
              });

              localStorage.setItem("movies", JSON.stringify(newReview));

              return newReview;
            });
          }}
        >
          Poslať
        </button>
      </form>
    </>
  );
}

export default Formular;
