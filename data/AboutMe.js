import Head from "../components/models/Head";
import Uniform from "../components/models/Uniform";
import MeSkills from "../components/models/MeSkills";

export const AboutMe = [
  {
    header: "Who am I?",
    text: [
      "My names Daniel Hall and i am a junior front-end react developer.",
      "I have a serious passion for the build and completion of complex projects that push boundarys.",
      "I enjoy the thrill of problem solving, with a high attention to the finer details.",
    ],
    model: <Head />,
  },
  {
    header: "So what skills do i have?",
    text: [
      "I build responsive websites that are intuitive, fast and with the current cutting edge technologies.",
      // "I adapted my basic skills of HTML, CSS and Javascript to give me a firm grip, and essential knowledge to use the React framework.",
      "I use Github version control for all my projects, using the command terminal seemlessly to create new branches and commit my work with ease.",
      "I have also used Cognito from AWS for help with Auth0, which allowed users to loggin to secure areas with required passwords.",
      "I love to implement animations with the GSAP library or Framer.",
    ],
    model: <MeSkills />,
  },
  {
    header: "My hobbies.",
    text: [
      "I am an avid sportsman! I love to play an array of sports including football, squash, rugby, MMA, golf and the list goes on.",
      "I am also a husband and father of two, who i love to spend my time with molding them into the best humans they can be.",
      "I am still currently serving in the British Armed Forces where i get the opportunity to serve in some amazing places all over the globe and meet interesting people.",
    ],
    model: <Uniform />,
  },
];
