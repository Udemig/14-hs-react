import { AiFillHome } from "react-icons/ai";
import {
  MdHistory,
  MdWatchLater,
  MdOutlineWhatshot,
  MdOutlineSportsEsports,
  MdOutlineSettings,
  MdOutlineFlag,
  MdHelpOutline,
  MdOutlineFeedback,
} from "react-icons/md";
import { FaThumbsUp, FaMusic, FaTrophy } from "react-icons/fa";
import { RiPlayListLine } from "react-icons/ri";
import { BiSolidVideos } from "react-icons/bi";
import { PiRadioButtonBold } from "react-icons/pi";
import { BsLightningCharge } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";

export const navItems = [
  {
    title: null,
    items: [
      { icon: <AiFillHome />, name: "Ana Sayfa", path: "/" },
      { icon: <BsLightningCharge />, name: "Shorts", path: "/" },
      { icon: <BiSolidVideos />, name: "Abonelikler", path: "/" },
    ],
  },
  {
    title: "Siz",
    items: [
      { icon: <MdHistory />, name: "Geçmiş", path: "/" },
      { icon: <RiPlayListLine />, name: "Oynatma listeleri", path: "/" },
      { icon: <MdWatchLater />, name: "Daha sonra izle", path: "/" },
      { icon: <FaThumbsUp />, name: "Beğendiğim videolar", path: "/" },
    ],
  },
  {
    title: "Keşfet",
    items: [
      { icon: <MdOutlineWhatshot />, name: "Trendler", path: "/?category=trendler" },
      { icon: <FaMusic />, name: "Müzik", path: "/?category=müzik" },
      { icon: <PiRadioButtonBold />, name: "Canlı", path: "/?category=canlı" },
      { icon: <MdOutlineSportsEsports />, name: "Oyun", path: "/?category=oyun" },
      { icon: <FaTrophy />, name: "Spor", path: "/?category=spor" },
    ],
  },
  {
    title: "YouTube'dan daha fazla",
    items: [
      { icon: <BiSolidVideos className="text-red-500" />, name: "YouTube Premium", path: "/" },
      { icon: <FaMusic className="text-red-500" />, name: "YouTube Music", path: "/" },
      { icon: <BiSolidVideos className="text-red-500" />, name: "YouTube Kids", path: "/" },
    ],
  },
  {
    title: null,
    items: [
      { icon: <MdOutlineSettings />, name: "Ayarlar", path: "/" },
      { icon: <MdOutlineFlag />, name: "İçerik bildirme geç...", path: "/" },
      { icon: <MdHelpOutline />, name: "Yardım", path: "/" },
      { icon: <MdOutlineFeedback />, name: "Geri bildirim gönder", path: "/" },
    ],
  },
];

export const collapsedNavItems = [
  { icon: <AiFillHome />, name: "Ana Sayfa", path: "/" },
  { icon: <BsLightningCharge />, name: "Shorts", path: "/" },
  { icon: <BiSolidVideos />, name: "Abonelikler", path: "/" },
  { icon: <FaRegCircleUser />, name: "Siz", path: "/" },
];
