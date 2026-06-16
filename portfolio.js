import stephRound from "./src/assets/compressed/stephMarziano/stephRound.webp";
import stephLandscape from "./src/assets/compressed/stephMarziano/stephLandscape.webp";
import stephlandscapeAlt from "./src/assets/compressed/stephMarziano/stephLandscapeAlt.webp";
import stephModal from "./src/assets/compressed/stephMarziano/stephModal.webp";
import stephModalAlt from "./src/assets/compressed/stephMarziano/stephModalAlt.webp";
import stephMobile from "./src/assets/compressed/stephMarziano/stephMobile.webp";
import stephMobileAlt from "./src/assets/compressed/stephMarziano/stephMobileAlt.webp";

import prolificaRound from "./src/assets/compressed/prolifica/prolificaRound.webp";
import prolificaLandscape from "./src/assets/compressed/prolifica/prolificaLandscape.webp";
import prolificaLandscapeAlt from "./src/assets/compressed/prolifica/prolificaLandscapeAlt.webp";
import prolificaModal from "./src/assets/compressed/prolifica/prolificaModal.webp";
import prolificaModalAlt from "./src/assets/compressed/prolifica/prolificaModalAlt.webp";
import prolificaMobile from "./src/assets/compressed/prolifica/prolificaMobile.webp";
import prolificaMobileAlt from "./src/assets/compressed/prolifica/prolificaMobileAlt.webp";

import burntToastRound from "./src/assets/compressed/burntToast/burntToastRound.png";
import burntToastLandscape from "./src/assets/compressed/burntToast/burntToastLandscape.webp";
import burntToastLandscapeAlt from "./src/assets/compressed/burntToast/burntToastLandscapeAlt.webp";
// import burntToastModal from "./src/assets/compressed/burntToast/burntToastModal.webp";
// import burntToastModalAlt from "./src/assets/compressed/burntToast/burntToastModalAlt.webp";
// import burntToastMobile from "./src/assets/compressed/burntToast/burntToastMobile.webp";
// import burntToastMobileAlt from "./src/assets/compressed/burntToast/burntToastMobileAlt.webp";

import ldnRound from "./src/assets/compressed/ldnElectrik/ldnElectrikRound.webp";
import ldnLandscape from "./src/assets/compressed/ldnElectrik/ldnElectrikLandscape.webp";
import ldnLandscapeAlt from "./src/assets/compressed/ldnElectrik/ldnElectrikLandscapeAlt.webp";
import ldnModal from "./src/assets/compressed/ldnElectrik/ldnElectrikModal.webp";
import ldnModalAlt from "./src/assets/compressed/ldnElectrik/ldnElectrikModalAlt.webp";
import ldnMobile from "./src/assets/compressed/ldnElectrik/ldnElectrikMobile.webp";
import ldnMobileAlt from "./src/assets/compressed/ldnElectrik/ldnElectrikMobileAlt.webp";

import rhysLewisRound from "./src/assets/compressed/rhysLewis/rhysRound.avif";
import rhysLewisLandscape from "./src/assets/compressed/rhysLewis/rhysLandscape.avif";
import rhysLewisLandscapeAlt from "./src/assets/compressed/rhysLewis/rhysLandscapeAlt.avif";
import rhysVideo from "./src/assets/compressed/rhysLewis/rhysLoop-1.2x.mp4";

import rhysMobileAlt from "./src/assets/compressed/rhysLewis/rhysMobileAlt.avif";
import rhysMobileAltTwo from "./src/assets/compressed/rhysLewis/rhysMobileAltTwo.avif";

import bodyBalancingRound from "./src/assets/compressed/bodyBalancing/bodyBalancingRound.webp";
import bodyBalancingLandscape from "./src/assets/compressed/bodyBalancing/bodyBalancingLandscape.webp";
import bodyBalancingLandscapeAlt from "./src/assets/compressed/bodyBalancing/bodyBalancingLandscapeAlt.webp";
import bodyBalancingModal from "./src/assets/compressed/bodyBalancing/bodyBalancingModal.webp";
import bodyBalancingModalAlt from "./src/assets/compressed/bodyBalancing/bodyBalancingModalAlt.webp";
import bodyBalancingMobile from "./src/assets/compressed/bodyBalancing/bodyBalancingMobile.webp";
import bodyBalancingMobileAlt from "./src/assets/compressed/bodyBalancing/bodyBalancingMobileAlt.webp";

import daydreamRound from "./src/assets/compressed/daydream/daydreamRound.webp";
import daydreamLandscape from "./src/assets/compressed/daydream/daydreamLandscape.webp";
import daydreamLandscapeAlt from "./src/assets/compressed/daydream/daydreamLandscapeAlt.webp";
import daydreamModal from "./src/assets/compressed/daydream/daydreamModal.webp";
import daydreamModalAlt from "./src/assets/compressed/daydream/daydreamModalAlt.webp";
import daydreamMobile from "./src/assets/compressed/daydream/daydreamMobile.webp";
import daydreamMobileAlt from "./src/assets/compressed/daydream/daydreamMobileAlt.webp";
const portfolio = [
  {
    title: "Burnt Toast",
    id: "burntToast",
    glow: "#c8b15e",
    description:
      "Producer and Engineering Management company based in london representing recording music producers and mix engineers.",
    round: burntToastRound,
    landscape: burntToastLandscape,
    landscapeAlt: burntToastLandscapeAlt,
    // modalImage: burntToastModal,
    // modalImageAlt: burntToastModalAlt,
    // mobileImage: burntToastMobile,
    // mobileAlt: burntToastMobileAlt,

    link: "https://burnttoastmgmt.com/",

    overview:
      "Prolifica are a london based music management company with a large roster of artists. I really wanted to elevate the creative feel with this design whilst still maintaining a simple and effective layout. They have a bold, cimematic logo so I framed it in a way that mimics the black letterbox seen in cinemas. Behind the logo, cursor movement is tracked to animte between a full screen sized selection artist press shots. I think this really gives the home page an elegant and cinematic feel.",
    objectives: [
      "Primary objective is to create a portfolio site that displays Prolifica’s roster of artists and link to all their respective social media accounts.",
      "Capture the bold and creative identity of the Prolifica branding while keeping the user experience simple.",
      "Bring the site to life with scroll and hover animations that feel high end without being distracting.",
      "Ensure the website is easily updatable moving forwards as new artists join the roster.",
    ],
    design: [
      "Extra smooth scrolling with Lenis to give the site more weight and a luxurious feel",
      "A cinematic, letterbox-style landing page that frames the content and gives a sense of movement and excitement.",
      "A mason style grid layout that allows for different aspect ratio images to be displayed without reframing them",
      "A simple modal that displays each artists press shot in full screen and links to all of their social media accounts",
      "Finally a simple contact section with Prolifica's contact details and a link to their own socials.",
    ],
    technical: [
      "Built with React and Next Js using Vite for fast performance.",
      "Custom cursor animations using the GSAP animation library for a more cinematic feel.",
      "Responsive design to remove all CPU intensive animations on smaller devices.",
      "Optimized for all devices with responsive layouts and compressed assets to ensure fast loading on mobile and desktop.",
    ],
  },
  {
    title: "Prolifica MGMT",
    id: "prolifica",
    glow: "#f2ebed",
    description:
      "Music Management company based in london representing recording artists and producers.",
    round: prolificaRound,
    landscape: prolificaLandscape,
    landscapeAlt: prolificaLandscapeAlt,
    modalImage: prolificaModal,
    modalImageAlt: prolificaModalAlt,
    mobileImage: prolificaMobile,
    mobileAlt: prolificaMobileAlt,

    link: "https://prolificamanagement.co.uk/",

    overview:
      "Prolifica are a london based music management company with a large roster of artists. I really wanted to elevate the creative feel with this design whilst still maintaining a simple and effective layout. They have a bold, cimematic logo so I framed it in a way that mimics the black letterbox seen in cinemas. Behind the logo, cursor movement is tracked to animte between a full screen sized selection artist press shots. I think this really gives the home page an elegant and cinematic feel.",
    objectives: [
      "Primary objective is to create a portfolio site that displays Prolifica’s roster of artists and link to all their respective social media accounts.",
      "Capture the bold and creative identity of the Prolifica branding while keeping the user experience simple.",
      "Bring the site to life with scroll and hover animations that feel high end without being distracting.",
      "Ensure the website is easily updatable moving forwards as new artists join the roster.",
    ],
    design: [
      "Extra smooth scrolling with Lenis to give the site more weight and a luxurious feel",
      "A cinematic, letterbox-style landing page that frames the content and gives a sense of movement and excitement.",
      "A mason style grid layout that allows for different aspect ratio images to be displayed without reframing them",
      "A simple modal that displays each artists press shot in full screen and links to all of their social media accounts",
      "Finally a simple contact section with Prolifica's contact details and a link to their own socials.",
    ],
    technical: [
      "Built with React and Next Js using Vite for fast performance.",
      "Custom cursor animations using the GSAP animation library for a more cinematic feel.",
      "Responsive design to remove all CPU intensive animations on smaller devices.",
      "Optimized for all devices with responsive layouts and compressed assets to ensure fast loading on mobile and desktop.",
    ],
  },
  {
    title: "Rhys Lewis",
    glow: "#e59aea",
    id: "rhysLewis",
    description:
      "Rhys Lewis is a British singer-songwriter and multi-instrumentalist signed to Decca Records.",
    round: rhysLewisRound,
    landscape: rhysLewisLandscapeAlt,
    landscapeAlt: rhysLewisLandscape,
    modalVideo: rhysVideo,
    mobileImage: rhysMobileAltTwo,
    mobileAlt: rhysMobileAlt,

    link: "https://rhyslewisofficial.com/",

    overview:
      "Rhys Lewis is a British singer-songwriter and multi-instrumentalist signed to Decca Records. His latest album campaign centered around a collection of beautiful, hand drawn stop motion animation videos. We wanted to find a way to incorporate these into the design of the website and Rhys came up with the idea of playing through the videos as the user scolls through the page. I had never experimented with this idea before so I was really excited to try it out and the result is fantastic. The initial frame of the video appears to be drawn in as the page loads before playing through and fading out to reveal the website when the user scrolls down. This creates a smooth, unique and engaging initial experience of the website.",
    objectives: [
      "Design and build a website that reflects the hand-drawn aesthetic of Rhys's latest campaign.",
      "Incorporate stop-motion animation videos into the site and link them to the page scroll position for a dynamic user experience",
      "Immediately drive traffic to Rhys's mailing list and Spotify channel at the top of the page.",
      "Single page layout featuring: landing page promoting Rhys's mailing list and latest single, embedded Spotify and custom Youtube players, tour dates and a link to Rhys's external merch store.",
    ],
    design: [
      "Hand crafted and lo-fi feel that reflects the stop-motion animation style of Rhys's latest videos.",
      "Using background images taken from video elements as well as grainy textures across the site lends a tactile, analog feel to the design.",
      "Simple color scheme with a soft pink navigation bar that sits above the grainy background images and black text for maximum readability.",
    ],
    technical: [
      "Built with React and Next Js using Vite for fast performance.",
      "Video compression and frame-rate optimisation to serve different files across multiple devices, screen sizes and browsers.",
      "Responsive design so that scroll animations work across larger and smaller devices and the page sections re-order themselves depending on the current content.",
      "Optimized for all devices with responsive layouts and compressed assets to ensure fast loading on mobile and desktop.",
    ],
  },
  {
    title: "Steph Marziano",
    glow: "#f03f50",
    id: "stephMarziano",
    description:
      "A music producer and songwriter with a bold, colorful creative identity.",
    round: stephRound,
    landscape: stephLandscape,
    landscapeAlt: stephlandscapeAlt,
    modalImage: stephModal,
    modalImageAlt: stephModalAlt,
    mobileImage: stephMobile,
    mobileAlt: stephMobileAlt,

    link: "https://stephmarziano.com/",

    overview:
      "Steph Marziano is an American producer, songwriter, and musician based in East London whose work spans a wide range of genres and collaborations. The goal for this project was to design a portfolio site that feels bold and energetic without sacrificing clarity — something that reflects both her creative personality and her professional accomplishments.",
    objectives: [
      "Create a digital portfolio that highlights Steph’s past projects and collaborations in a clear, engaging way.",
      "Capture her love of bold color and expressive design without overwhelming the user experience.",
      "Incorporate interactive elements and subtle animations to bring the site to life and reflect her dynamic creative process.",
      "Ensure the site is easily updatable so that it grows alongside her evolving body of work.",
    ],
    design: [
      "A clean, minimal layout built around strong typography and generous use of white space, allowing the vibrant color palette to pop.",
      "Navigation is kept intentionally simple and intuitive, letting the content shine while encouraging exploration.",
      "Visual storytelling is key — large, responsive images and dynamic section breaks give each page rhythm and energy.",
    ],
    technical: [
      "Built with React using Vite for fast performance and scalable structure.",
      "Custom animations crafted with Framer Motion and CSS to add playful, responsive interactions without compromising speed.",
      "Optimized for all devices with responsive layouts and compressed assets to ensure fast loading on mobile.",
      "Easy and on going manual updates as Steph’s portfolio expands.",
    ],
  },
  // {
  //   title: "LDN Electrik",
  //   id: "ldnElectrik",
  //   description:
  //     "A musical director and electronic music creative based in London.",
  //   round: ldnRound,
  //   landscape: ldnLandscape,
  //   landscapeAlt: ldnLandscapeAlt,
  //   modalImage: ldnModal,
  //   modalImageAlt: ldnModalAlt,
  //   mobileImage: ldnMobile,
  //   mobileAlt: ldnMobileAlt,

  //   link: "https://ldn-elektric-demo.web.app/",

  //   overview:
  //     "LDN Electrik is a London-based musical director and live show designer working at the intersection of electronic music and performance. The brief was to create a portfolio site that felt more like a visual mixtape than a traditional portfolio — something with edge, personality, and motion. We leaned into his creative identity with a high-contrast aesthetic, a custom image grid, and a bold mix of grainy textures and color-drenched photography.",
  //   objectives: [
  //     "Build a visually expressive portfolio that communicates both the technical and creative scope of LDN Electrik’s work.",
  //     "Create a custom image grid to showcase live shows, collaborations, and behind-the-scenes moments in a way that feels curated yet organic.",
  //     "Craft concise, impactful copy that reflects the artist's vision and role in projects without overwhelming the visuals.",
  //     "Ensure the site feels immersive and smooth, with just the right amount of interaction to elevate the experience.",
  //   ],
  //   design: [
  //     "Sleek, modern layout with a strong emphasis on contrast — balancing monochrome textures with vibrant visual highlights.",
  //     "Custom photography grid with unpredictable rhythms and layered textures to reflect the dynamism of live electronic performance.",
  //     "Minimal UI, allowing the imagery and motion to carry the creative tone.",
  //   ],
  //   technical: [
  //     "Fully responsive layout with custom breakpoints to ensure the grid behaves fluidly across devices.",
  //     "Lightweight build with optimized image assets to maintain visual quality without slowing the experience.",
  //     "Accessible structure with foundational SEO applied for discoverability.",
  //     "Fast, static deployment with Firebase Hosting for a smooth user experience.",
  //   ],
  // },
  // {
  //   title: "Daydream Cafe",
  //   id: "daydreamCafe",
  //   description:
  //     "A ficticious cafe in east london serving speciality coffees and italian deli food",
  //   round: daydreamRound,
  //   landscape: daydreamLandscape,
  //   landscapeAlt: daydreamLandscapeAlt,
  //   modalImage: daydreamModal,
  //   modalImageAlt: daydreamModalAlt,
  //   mobileImage: daydreamMobile,
  //   mobileAlt: daydreamMobileAlt,

  //   link: "https://daydreamcafe.netlify.app/",
  //   overview:
  //     "I wanted to create a site for a different kind of business after working primarily with music-related clients. Daydream is the kind of cafe my friend and I have always talked about opening — warm, welcoming, and full of character — so it made the perfect concept for a portfolio piece. I used this opportunity to explore playful branding, immersive visuals, and creative scroll animations.",
  //   objectives: [
  //     "Design a bold and visually rich website that reflects the personality of a lively independent cafe.",
  //     "Showcase the food, drink, and interior atmosphere through vibrant photography and thoughtful layout.",
  //     "Include subtle interactivity and animation that enhances user experience without overwhelming the design.",
  //   ],
  //   design: [
  //     "I experimented with a fixed sidebar layout, which anchors the navigation and gives the site a unique visual identity on desktop.",
  //     "Navigation items trigger background color transitions, giving the UI a dynamic, reactive feel.",
  //     "Typography is bold and playful, complementing the colorful imagery and giving the brand a strong personality.",
  //     "The Gallery uses a GSAP-powered scroll animation to fade images in smoothly, emphasizing the visual storytelling.",
  //   ],
  //   technical: [
  //     "Built with React and hosted on Netlify, using a modular component structure for clean, scalable code.",
  //     "Implemented GSAP and ScrollTrigger for animations tied to scroll position and user interaction.",
  //     "Responsive design with custom layouts for mobile and tablet, ensuring the site feels intentional on all screen sizes.",
  //     "Optimized images with modern formats (WebP, AVIF) and preloading to reduce layout shift and improve performance.",
  //     "Session-aware loading animation that only plays once per visit to enhance the first impression without getting in the way.",
  //   ],
  // },
];

export default portfolio;

/*

 {
    title: "Body Balancing",
    description:
      "A holistic therapy and counselling practice focused on health, wellness, and emotional wellbeing.",
    round: bodyBalancingRound,
    landscape: bodyBalancingLandscape,
    landscapeAlt: bodyBalancingLandscapeAlt,
    modalImage: bodyBalancingModal,
    modalImageAlt: bodyBalancingModalAlt,
    mobileImage: bodyBalancingMobile,
    mobileAlt: bodyBalancingMobileAlt,

    link: "https://body-balancing.co.uk/",
    overview:
      "Body Balancing is a practice that blends holistic therapy with counselling, offering a broad range of treatments for mind and body. The brief was to create a site that reflects the calm, professional, and nurturing energy of the practice while making a wide set of services easy to explore. The end result needs to present a space that feels both welcoming and informative.",
    objectives: [
      "Create a seamless flow between the two core offerings: counselling and holistic therapies.",
      "Craft a visual language that evokes calm, clarity, and warmth — mirroring the in-person experience.",
      "Write concise, reassuring copy that helps users understand the wide range of treatments available and how they can benefit from them.",
      "Implement a simple and intuitive online booking system to streamline client engagement and repeat visits.",
    ],
    design: [
      "Used a soft, earthy color palette to create a sense of tranquility and balance throughout the site.",
      "Prioritized clarity with open layouts, clean typography, and generous spacing to avoid overwhelm while presenting detailed information.",
      "Subtle UI animations and microinteractions add a sense of polish while maintaining a slow, gentle rhythm consistent with the brand tone.",
    ],
    technical: [
      "Fully responsive and mobile-first design, with optimized image loading and clean layout adjustments across breakpoints.",
      "SEO-conscious build with structured content, performance tuning, and custom meta tags to improve visibility and ranking.",
      "Custom email setup and domain configuration to ensure smooth business operations post-launch.",
      "Online booking system integration with clear client flow from information to action.",
    ],
  },*/
