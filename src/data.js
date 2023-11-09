import quiz from "./img/quiz.png";
import jungle from "./img/jungle.png";
import scheduler from "./img/scheduler.png";
import weatherapp from "./img/weatherapp.png";
import learningstation from "./img/learningstation.png";

export const projects = [
  {
    title: "LearningStation App ( PERN stack tutoring portal )",
    description:
      "LearningStation - Full-Stack React application where you can log in using secure Auth0 and find a tutor, book a class, make a payment, chat, make a video call or get help from AI playground.",
    code: "https://github.com/KShilina/LearningStation-Final/tree/deploy",
    demo: "https://learning-station.vercel.app/",
    img: learningstation,
  },
  {
    title: "Weather App using Next.js and Tailwind CSS",
    description:
      "Weather App is a single page application where user can check weather in any city in real time. Application build with NEXT JS, OpenWeatherMap API and Tailwind CSS for styling.",
    code: "https://github.com/KShilina/weatherapp/tree/main/weatherapp",
    demo: " ",
    img: weatherapp,
  },
  {
    title: "E-Commerce application built with Rails 6.1",
    description:
      "The Jungle is a Full-Stack shopping application using Rails with Stripe payment integration.",
    code: "https://github.com/KShilina/Jungle-Project",
    demo: "",
    img: jungle,
  },
  {
    title: "Scheduler (PERN Stack, WebSocket API, Cypress and Jest)",
    description:
      "Interview Scheduler is a single-page application (SPA) that allows users to book technical interviews between students and mentors.",
    code: "https://github.com/KShilina/scheduler",
    demo: "",
    img: scheduler,
  },
  {
    title: "Quiz (JavaScript, HTML, SAAS, Node/Express, PostgreSQL)",
    description: "A portal where users can create, take and share quizzes.",
    code: "https://github.com/KShilina/Quiz-App",
    // demo: "https://kshilina.github.io/quiz/",
    demo: "",
    img: quiz,
  },
];
