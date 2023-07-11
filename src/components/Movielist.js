import React from "react";
import Movie from "./Movie";
import { MDBRow } from "mdbreact";

const MovieList = () => {
  const movies = [
    {
      id: 1,
      title: "Spirited Away",
      image: require("../images/SpiritedAway.jpeg").default,
      synopsis:
        "10-year-old Chihiro (Daveigh Chase) moves with her parents to a new home in the Japanese countryside. After taking a wrong turn down a wooded path, Chihiro and her parents discover an amusement park with a stall containing an assortment of food. To her surprise, Chihiro's parents begin eating and then transform into pigs. In this supernatural realm, Chihiro encounters a host of characters and endures labor in a bathhouse for spirits, awaiting a reunion with her parents.",
      genre: ["Fantasy", "Adventure", "Animation"],
      releaseDate: 2002,
      rating: 0,
      review: "",
    },

    {
      id: 2,
      title: "Princess Mononoke",
      image: require("../images/PrincessMononoke.jpeg").default,
      synopsis:
        "In Muromachi Japan, an Emishi village is attacked by a demon. The last Emishi prince, Ashitaka, kills it before it reaches the village, but its corruption curses his arm in the process. The curse gives him strength in the short term, but is slowly killing him, so he must travel far to the west for a cure. Ashitaka arrives at Irontown, where Lady Eboshi is engaged in a perpetual war against the forest and its gods, including the wolf-goddess Moro and her human daughter San.",
      genre: ["Animation", "Adventure", "Fantasy"],
      releaseDate: 1997,
      rating: 0,
      review: "",
    },
    {
      id: 3,
      title: "Grave of the Fireflies",
      image: require("../images/GraveoftheFireflies.jpeg").default,
      synopsis:
        "In the final months of World War II, 14-year-old Seita and his 4-year-old sister Setsuko are orphaned after their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, the siblings move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.",
      genre: ["Animation", "Drama", "War"],
      releaseDate: 1988,
      rating: 0,
      review: "",
    },
    {
      id: 4,
      title: "Ponyo",
      image: require("../images/Ponyo.jpeg").default,
      synopsis:
        "A young boy named Sosuke rescues a goldfish named Ponyo, and they embark on a fantastic journey of friendship and discovery before Ponyo's father, a powerful sorcerer, forces her to return to her home in the sea. But Ponyo is determined to become human and be with Sosuke.",
      genre: ["Animation", "Adventure", "Family"],
      releaseDate: 2008,
      rating: 0,
      review: "",
    },
    {
      id: 5,
      title: "Kiki's Delivery Service",
      image: require("../images/KikisDeliveryService.jpeg").default,
      synopsis:
        "Kiki, a young witch-in-training, must spend a year on her own in a distant town in order to become a full-fledged witch. With her talking cat Jiji, she sets up a flying delivery service and discovers her unique abilities.",
      genre: ["Animation", "Adventure", "Drama"],
      releaseDate: 1989,
      rating: 0,
      review: "",
    },
    {
      id: 6,
      title: "Nausicaä of the Valley of the Wind",
      image: require("../images/NausicaaValleyoftheWind.jpeg").default,
      synopsis:
        "In the far future, a thousand years after a global war, Earth is mostly a desert wasteland, with pockets of human civilization. Princess Nausicaä, the heir to the throne of the Valley of the Wind, seeks to understand and restore the ecological balance in a world overrun by giant insects called Ohms.",
      genre: ["Animation", "Adventure", "Fantasy"],
      releaseDate: 1984,
      rating: 0,
      review: "",
    },
    {
      id: 7,
      title: "Castle in the Sky",
      image: require("../images/CastleintheSky.jpeg").default,
      synopsis:
        "Pazu, an engineer's apprentice, finds a young girl, Sheeta, floating down from the sky wearing a glowing pendant. Together, they discover both are searching for Laputa, a legendary floating castle, and vow to unravel the mystery of the castle in the sky.",
      genre: ["Animation", "Adventure", "Fantasy"],
      releaseDate: 1986,
      rating: 0,
      review: "",
    },
    {
      id: 8,
      title: "Whisper of the Heart",
      image: require("../images/WhisperoftheHeart.jpeg").default,
      synopsis:
        "Shizuku, a young girl with a passion for reading, discovers that all the books she has checked out of the library were previously checked out by a boy named Seiji. As she searches for Seiji and writes her own story, Shizuku discovers her true self and her aspirations.",
      genre: ["Animation", "Drama", "Family"],
      releaseDate: 1995,
      rating: 0,
      review: "",
    },
    {
      id: 9,
      title: "The Secret World of Arrietty",
      image: require("../images/SecretWorldofArrietty.jpeg").default,
      synopsis:
        "Arrietty, a tiny teenager, lives with her parents beneath the floorboards of a suburban home. When 12-year-old Shawn discovers Arrietty, their friendship sets off a series of events that force Arrietty's family to make a difficult choice.",
      genre: ["Animation", "Adventure", "Family"],
      releaseDate: 2010,
      rating: 0,
      review: "",
    },
    {
      id: 10,
      title: "Howl's Moving Castle",
      image: require("../images/HowlsMovingCastle.jpeg").default,
      synopsis:
        "Sophie, a young girl cursed with an old body by a witch, seeks the help of the mysterious wizard Howl. As she becomes embroiled in Howl's magical world, Sophie's own dormant abilities begin to awaken.",
      genre: ["Animation", "Adventure", "Family"],
      releaseDate: 2004,
      rating: 0,
      review: "",
    },
    {
      id: 11,
      title: "My Neighbor Totoro",
      image: require("../images/MyNeighborTotoro.jpeg").default,
      synopsis:
        "Sisters Mei and Satsuki move with their father to a new home in the countryside to be closer to their ailing mother. They soon encounter Totoro, a friendly forest spirit, and embark on magical adventures.",
      genre: ["Animation", "Family", "Fantasy"],
      releaseDate: 1988,
      rating: 0,
      review: "",
    },
  ];
  return (
    <>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4" id="cardSpacing">
        {movies.map((movie, index) => {
          return <Movie key={index} {...movie} />;
        })}
      </MDBRow>
    </>
  );
};

export default MovieList;
