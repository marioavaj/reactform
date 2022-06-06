import React, { useState } from "react";


function Formular({ addNewMovie }) {
  const [movieName, movieNameChanged] = useState("");
  const [nick, nickChanged] = useState("");
  const [email, emailChanged] = useState("");
  const [review, reviewChanged] = useState("");
  const [date, dateChanged] = useState("");
  const [rating, ratingChanged] = useState("");
  

  return (
    <div id="formWrapper">
      <h1>Pridaj recenziu</h1>
      <form method="get">
        <p>
          <label className="label" htmlFor="fname">
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
          <label className="label" htmlFor="nick">
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
          <label className="label" htmlFor="email">
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
          <label className="label" htmlFor="recenzia">
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
          <label className="label" htmlFor="date">
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
          <label className="label" htmlFor="hodnotenie">
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
          <label htmlFor="thriller">Thriller</label>
          <br />
          <input type="radio" id="drama" name="drama" />
          <label htmlFor="drama">Dráma</label>
          <br />
          <input type="radio" id="komedia" name="komedia" />
          <label htmlFor="komedia">Komédia</label>
          <br />
          <input type="radio" id="romantika" name="romantika" />
          <label htmlFor="romantika">Romantika</label>
          <br />
          <input type="radio" id="horor" name="horor" />
          <label htmlFor="horor">Horor</label>
          <br />
          <input type="radio" id="rozpravka" name="rozpravka" />
          <label htmlFor="rozpravka">Rozprávka</label>
          <br />
        </p>
        <br />
        <button
          onClick={() => {
            addNewMovie((movies) => {
              let newReview = movies.concat({               
                "movieName": movieName,
                "nick": nick,
                "email": email,
                "review": review,
                "date": date,
                "rating": rating,
            });

              localStorage.setItem("movies", JSON.stringify(newReview));

              return newReview;
            });
          }}
        >
          Poslať
        </button>
      </form>
    </div>
  );
}

export default Formular;
