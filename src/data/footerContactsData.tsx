import {
  IconBrandGithub,
  IconBrandFacebook,
  IconWorldWww,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

type FooterData = {
  id: number;
  name: string;
  icon: JSX.Element;
  url: string;
};

const FooterData: FooterData[] = [
  {
    id: 1,
    name: "My Portfolio Website",
    icon: <IconWorldWww />,
    url: "https://brent-portfolio.vercel.app/",
  },

  {
    id: 2,
    name: "Facebook",
    icon: <IconBrandFacebook />,
    url: "https://www.facebook.com/codename9.5brentokloy429/",
  },
  {
    id: 3,
    name: "Github",
    icon: <IconBrandGithub />,
    url: "https://github.com/AnonymouseHucker29",
  },
  {
    id: 4,
    name: "LinkedIn",
    icon: <IconBrandLinkedin />,
    url: "https://www.linkedin.com/in/brent-baylon-18066b234/",
  },
  {
    id: 5,
    name: "Twitter",
    icon: <IconBrandTwitter />,
    url: "https://twitter.com/brentokloy_0429",
  },
];

export default FooterData;
