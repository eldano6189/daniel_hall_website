import Head from "../components/models/Head";
import Uniform from "../components/models/Uniform";
import MeSkills from "../components/models/MeSkills";

export const AboutMe = [
  {
    header: "Who am I?",
    text: [
      "My names Daniel Hall and i am a junior front-end react developer.",
      "I have spent the last 4 years learning and implementing my skills on small projects for an array of companys and friends.",
      "I enjoy the thrill of problem solving, with a high attention to the finer details.",
    ],
    model: <Head />,
  },
  {
    header: "So what skills do i have?",
    text: [
      "Majority of my time is spent using React and NextJS.",
      "I prefure to use standard CSS to deepen my knowledge and understanding for the core concepts of styling.",
      "Git is my weapon of choice for version control.",
      "I also have a base knowledge of AWS Cognito, GSAP, Framer & ThreeJS,",
    ],
    model: <MeSkills />,
  },
  {
    header: "My hobbies.",
    text: [
      "I am an avid sportsman! I love to play an array of sports including football, squash, rugby, MMA and the list goes on.",
      "Also i'm a husband and father of two, who i love to spend my time with.",
      "I am also a serving British soldier. I get the opportunity to see amazing places all over the globe and meet interesting people.",
    ],
    model: <Uniform />,
  },
];
