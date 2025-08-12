import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/nehu2007",
  },
  {
    icon: <FaLinkedinIn />,
    path: "linkedin.com/in/neha-kumbhar2007",
  },
  {
    icon: <FaYoutube />,
    path: "",
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/nehakumbha65755/media",
  },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((media, index) => {
        return (
          <Link key={index} href={media.path} className={iconStyles}>
            {media.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
