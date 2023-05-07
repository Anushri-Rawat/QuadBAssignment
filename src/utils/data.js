import { BsBrowserSafari } from "react-icons/bs";
import { HiTrendingUp } from "react-icons/hi";
import { MdVideoSettings } from "react-icons/md";
import { RiPlayListFill, RiUserFollowLine } from "react-icons/ri";

export const browseArray = [
  {
    title: "Browse",
    img: <BsBrowserSafari />,
  },
  {
    title: "Trending",
    img: <HiTrendingUp />,
  },
  { title: "Following", img: <RiUserFollowLine /> },
  { title: "Your Videos", img: <MdVideoSettings /> },
  { title: "Playlist", img: <RiPlayListFill /> },
];

export const categories = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentry",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Thriller",
  "Science Fiction",
];
