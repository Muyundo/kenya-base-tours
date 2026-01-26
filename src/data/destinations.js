// src/data/destinations.js
import maraImg from "../assets/images/masai-mara.jpg";
import amboseliImg from "../assets/images/amboseli.jpg";
import lakeNakuruImg from "../assets/images/lake-nakuru.jpg";
import mountKenyaImg from "../assets/images/mount-kenya.jpg";
import samburuImg from "../assets/images/samburu.jpg";
import coastImg from "../assets/images/coast.jpg";

const destinations = [
  {
    id: "masai-mara",
    name: "Masai Mara",
    short: "World-famous reserve known for the Great Wildebeest Migration and abundant big cats.",
    image: maraImg,
    bestMonths: "July - October - Great Wildebeest Migration",
    highlights: ["Great Migration", "Big Five", "River Crossings", "Balloon Safaris"],
    detail: `Masai Mara National Reserve is Kenya’s most famous park — a vast savannah home to large populations of lions, cheetahs, elephants and the annual wildebeest migration. Expect thrilling predator-prey action and classic African panoramas.`
  },
  {
    id: "amboseli",
    name: "Amboseli",
    short: "Iconic views of Kilimanjaro and large elephant herds in open plains.",
    image: amboseliImg,
    bestMonths: "All year.",
    highlights: ["Mount Kilimanjaro views", "Elephant herds", "Birdwatching"],
    detail: `Amboseli National Park offers spectacular views of Mount Kilimanjaro and a high chance of close elephant sightings. It’s ideal for photographers and first-time safari-goers.`
  },
  {
    id: "lake-nakuru",
    name: "Lake Nakuru",
    short: "Shallow soda lake famous for millions of flamingos and rhino sanctuaries.",
    image: lakeNakuruImg,
    bestMonths: "All year, best in cooler months",
    highlights: ["Flamingos", "Rhinos", "Birdwatching"],
    detail: `Lake Nakuru is a birdwatcher’s paradise and home to both black and white rhinos. The alkaline lake often hosts thousands (sometimes millions) of flamingos.`
  },
  {
    id: "mount-kenya",
    name: "Mount Kenya",
    short: "Kenya’s highest peak — trekking, scenic highlands and cool mountain air.",
    image: mountKenyaImg,
    bestMonths: "January - March, July - October",
    highlights: ["Hiking", "Photography", "Cool Highlands"],
    detail: `Mount Kenya offers scenic hiking routes, from day-walks to technical climbs. The surrounding highlands host unique flora and fauna as well as community conservancies.`
  },
  {
    id: "samburu",
    name: "Samburu",
    short: "Northern Kenya with unique species and vivid cultural experiences.",
    image: samburuImg,
    bestMonths: "Throughout the year.",
    highlights: ["Reticulated giraffe", "Grevy's zebra", "Samburu culture"],
    detail: `Samburu National Reserve showcases species not commonly found in the south and offers intimate cultural experiences with Samburu communities.`
  },
  {
    id: "coast",
    name: "Kenya Coast (Diani/Watamu)",
    short: "White-sand beaches, coral reefs and Swahili culture on the Indian Ocean.",
    image: coastImg,
    bestMonths: "December - March, July - October",
    highlights: ["Beaches", "Snorkeling", "Water sports"],
    detail: `Kenya’s coast combines relaxed beach time with vibrant Swahili culture. Diani and Watamu offer coral reefs, boat trips, and excellent seafood.`
  }
];

export default destinations;
