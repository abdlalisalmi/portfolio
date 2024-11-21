import Image from "next/image";

const Skeleton = () => (
  <div className="flex flex-1 w-full min-h-[8rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const ImageHeader = ({ src }) => (
  <div className="w-full h-48 rounded-xl overflow-hidden">
    <Image
      width={400}
      height={200}
      src={src}
      alt="Project Image"
      className="w-full h-full object-cover object-center"
    />
  </div>
);

export const openSourceProjects = [
  {
    title: "YouCan Pay Python SDK",
    description:
      "This project enables Python developers to seamlessly integrate and interact with the YouCan Pay API.",
    header: <ImageHeader src="/images/open-source/youcanpay.jpg" />,
    link: "https://github.com/abdlalisalmi/youcan-payment-python-sdk",
    stats: {
      stars: 7,
      forks: 0,
    },
  },
  {
    title: "Wistia Player Downloader",
    description: "Python script/GUI App to download from wistia hosted videos",
    header: <ImageHeader src="/images/open-source/wistia.png" />,
    link: "https://github.com/abdlalisalmi/wistia-downloader",
    stats: {
      stars: 37,
      forks: 9,
    },
  },
  {
    title: "Passwords Generator APP",
    description:
      "Password Generator, a full-featured Python application with a modern GUI designed to create secure and customizable passwords.",
    header: <ImageHeader src="/images/open-source/password.jpg" />,
    link: "https://github.com/abdlalisalmi/Passwords-Generator-python-modern-GUI",
    stats: {
      stars: 9,
      forks: 4,
    },
  },
  {
    title: "Personal Portfolio with Django",
    description:
      "A full-stack personal portfolio website built entirely with Django, utilizing its framework for the backend and incorporating CSS, JavaScript, and Bootstrap for the frontend design and functionality.",
    header: <ImageHeader src="/images/open-source/django-portfolio.png" />,
    link: "https://github.com/abdlalisalmi/DJANGO-Portfolio",
    stats: {
      stars: 84,
      forks: 50,
    },
  },
  {
    title: "Netwhat Trainer",
    description: "A simple python script for training on 42 netwhat project.",
    header: <ImageHeader src="/images/open-source/trainer.png" />,
    link: "https://github.com/abdlalisalmi/netwhat-trainer",
    stats: {
      stars: 5,
      forks: 2,
    },
  },
  {
    title: "Signage",
    description:
      "Open-source Django-based digital signage projects suitable for screens projection.",
    header: <ImageHeader src="/images/open-source/signage.webp" />,
    link: "https://github.com/abdlalisalmi/signage",
    stats: {
      stars: 1,
      forks: 0,
    },
  },
  {
    title: "This Portfolio",
    description: "Experience the thrill of bringing ideas to life.",
    header: <ImageHeader src="/images/open-source/nextjs-portfolio.png" />,
    link: "https://github.com/abdlalisalmi/portfolio",
    stats: {
      stars: 1,
      forks: 0,
    },
  },
];
