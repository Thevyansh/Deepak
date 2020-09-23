import React from "react";
import {motion} from 'framer-motion'
import "./styles.css";
const imageBaseUrl= "https://image.tmdb.org/t/p/w500/";
const movies = [
  {
    id: 337401,
    title: 'Mulan',
    original_title: 'Mulan',
    backdrop_path: '/zzWGRw277MNoCs3zhyG3YmYQsXv.jpg',
    overview:
      'When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the title of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.',
    poster_path: '/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg',
  },
  {
    id: 499932,
    title: 'The Devil All the Time',
    original_title: 'The Devil All the Time',
    backdrop_path: '/rUeqBuNDR9zN6vZV9kpEFMtQm0E.jpg',
    overview:
      'In Knockemstiff, Ohio and its neighboring backwoods, sinister characters converge around young Arvin Russell as he fights the evil forces that threaten him and his family.',
    poster_path: '/7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg',
  },
  {
    original_title: 'The Boys',
    id: 76479,
    title: 'The Boys',
    poster_path: '/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg',
    backdrop_path: '/mGVrXeIjyecj6TKmwPVpHlscEmw.jpg',
    overview:
      'A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.',
  },
  {
    original_title: 'Raised by Wolves',
    id: 85723,
    title: 'Raised by Wolves',
    poster_path: '/mTvSVKMn2Npf6zvYNbGMJnYLtvp.jpg',
    backdrop_path: '/na2xUduK8HviOFT97TiFG2MkJmY.jpg',
    overview:
      'After Earth is ravaged by a great religious war, an atheistic android architect sends two of his creations, Mother and Father, to start a peaceful, godless colony on the planet Kepler-22b. Their treacherous task is jeopardized by the arrival of the Mithraic, a deeply devout religious order of surviving humans.',
  },
  {
    id: 577922,
    title: 'Tenet',
    original_title: 'Tenet',
    backdrop_path: '/wzJRB4MKi3yK138bJyuL9nx47y6.jpg',
    overview:
      'Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
    poster_path: '/k68nPLbIST6NP96JmTxmZijEvCA.jpg',
  },
  {
    original_title: 'Ratched',
    id: 81354,
    title: 'Ratched',
    poster_path: '/cDNxOIm6K5D2W21QyJWZ95sJzQt.jpg',
    backdrop_path: '/zx3m4iW6CsM7yuMEUyvSkvbwaip.jpg',
    overview:
      "An origins story, beginning in 1947, which follows Ratched's journey and evolution from nurse to full-fledged monster tracking her murderous progression through the mental health care system.",
  },
  {
    id: 623491,
    title: 'The Babysitter: Killer Queen',
    original_title: 'The Babysitter: Killer Queen',
    backdrop_path: '/naUJGskMlDg2HZ0FhsaMG5xPF2K.jpg',
    overview:
      "Two years after defeating a satanic cult led by his babysitter Bee, Cole's trying to forget his past and focus on surviving high school. But when old enemies unexpectedly return, Cole will once again have to outsmart the forces of evil.",
    poster_path: '/yx7akzfwbPCLlxKgZ1NycThFC92.jpg',
  },
  {
    id: 627290,
    title: 'Antebellum',
    original_title: 'Antebellum',
    backdrop_path: '/5Pa914tmQH0OXZvENKUi9HxZkNY.jpg',
    overview:
      "Successful author Veronica finds herself trapped in a horrifying reality and must uncover the mind-bending mystery before it's too late.",
    poster_path: '/wRPxVAIRS0i3O6yYuKcVsuvl5vQ.jpg',
  },
  {
    id: 701175,
    title: 'The Paramedic',
    original_title: 'El practicante',
    backdrop_path: '/ggTmRBvZ6ZzgMLVCnmQCUoITVhl.jpg',
    overview:
      'Unable to face his new reality in a wheelchair, Ángel develops a deadly obsession with the woman who left him and unleashes a sinister revenge plot.',
    poster_path: '/l9ruFmHoUws4A45s8FBZuMNC6Mu.jpg',
  },
  {
    id: 500840,
    title: "I'm Thinking of Ending Things",
    original_title: "I'm Thinking of Ending Things",
    backdrop_path: '/x3NqAzuTWvnron4pXXyFGkyTFo7.jpg',
    overview:
      'Nothing is as it seems when a woman experiencing misgivings about her new boyfriend joins him on a road trip to meet his parents at their remote farm.',
    poster_path: '/5ynWWapdl45hJXUh0KIevxSG9JQ.jpg',
  },
  {
    id: 613504,
    title: 'After We Collided',
    original_title: 'After We Collided',
    backdrop_path: '/r5srC0cqU36n38azFnCyReEksiR.jpg',
    overview:
      'Tessa finds herself struggling with her complicated relationship with Hardin; she faces a dilemma that could change their lives forever.',
    poster_path: '/kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg',
  },
  {
    original_title: 'Lovecraft Country',
    id: 82816,
    title: 'Lovecraft Country',
    poster_path: '/fz7bdjxPColvEWCGr5Kiclzc86d.jpg',
    backdrop_path: '/qx7qy2GJOc7yGY6WENyBU3OVv7A.jpg',
    overview:
      'The anthology horror series follows 25-year-old Atticus Freeman, who joins up with his friend Letitia and his Uncle George to embark on a road trip across 1950s Jim Crow America to find his missing father. They must survive and overcome both the racist terrors of white America and the malevolent spirits that could be ripped from a Lovecraft paperback.',
  },
  {
    id: 539885,
    title: 'Ava',
    original_title: 'Ava',
    backdrop_path: '/hP1BYEj0uukHcYyKPxaRjI4GBOe.jpg',
    overview:
      'A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.',
    poster_path: '/tBhlPrHPRxxAkDVWGVS6lB9yKD5.jpg',
  },
  {
    original_title: 'Jurassic World: Camp Cretaceous',
    id: 93741,
    title: 'Jurassic World: Camp Cretaceous',
    poster_path: '/jWTDtbp2TnUGw1OJoDqq2O9IS0M.jpg',
    backdrop_path: '/ogAoaYiqwkV7Qm2JFvUKMSihmIL.jpg',
    overview:
      'Six teens attending an adventure camp on the opposite side of Isla Nublar must band together to survive when dinosaurs wreak havoc on the island.',
  },
  {
    id: 638134,
    title: 'Pets United',
    original_title: 'Pets United',
    backdrop_path: '/ePkagE11fpUbTasJ2udxTJHuaWU.jpg',
    overview:
      'When Roger (a Robin Hood-esque, stray dog) and Belle (an elegant yet spoilt pet cat) are thrown together amidst the chaos of a robot take-over of their home city, they must push all their preconceptions aside in order to survive, as they embark on a high-stakes, action-packed adventure.',
    poster_path: '/gtwqIYSOCRwEndZTg9s6iWjEZc1.jpg',
  },
  {
    original_title: 'The Third Day',
    id: 90259,
    title: 'The Third Day',
    poster_path: '/rNx7hgp3Cs6YPeBgvE6enNmR1Xz.jpg',
    backdrop_path: '/yEvcaFO2nz8QdGVsqyVK93iLPp3.jpg',
    overview:
      'A unique story told over two distinct halves, "Summer" follows Sam, a man drawn to a mysterious island off the British coast where he encounters a group of islanders set on preserving their traditions at any cost. "Winter" follows Helen, a strong-willed outsider who comes to the island seeking answers, but whose arrival precipitates a fractious battle to decide its fate.',
  },
  {
    id: 501979,
    title: 'Bill & Ted Face the Music',
    original_title: 'Bill & Ted Face the Music',
    backdrop_path: '/oazPqs1z78LcIOFslbKtJLGlueo.jpg',
    overview:
      'Yet to fulfill their rock and roll destiny, the now middle-aged best friends Bill and Ted set out on a new adventure when a visitor from the future warns them that only their song can save life as we know it. Along the way, they are helped by their daughters, a new batch of historical figures and a few music legends—to seek the song that will set their world right and bring harmony to the universe.',
    poster_path: '/4V2nTPfeB59TcqJcUfQ9ziTi7VN.jpg',
  },
  {
    id: 299534,
    title: 'Avengers: Endgame',
    original_title: 'Avengers: Endgame',
    backdrop_path: '/orjiB3oUIsyz60hoEqkiGpy5CeO.jpg',
    overview:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    poster_path: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
  },
  {
    id: 581392,
    title: 'Peninsula',
    original_title: '반도',
    backdrop_path: '/gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg',
    overview:
      'A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula.',
    poster_path: '/sy6DvAu72kjoseZEjocnm2ZZ09i.jpg',
  },
  {
    original_title: 'Power Book II: Ghost',
    id: 97890,
    title: 'Power Book II: Ghost',
    poster_path: '/tN8HcetzKsNliez2xo4ymWOl8bd.jpg',
    backdrop_path: '/7pCIWCBrsgB8tLBb4WRdhp1OtR7.jpg',
    overview:
      'Picking up just days after the “Power” finale, this sequel series follows Tariq navigating his new life, in which his desire to shed his father’s legacy comes up against the mounting pressure to save his family.',
  },
];

export default function App() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="App">
      <ul>
      {movies.map((movie)=>(
        <motion.li onHoverStart={()=>setOpen(true)} onHoverEnd={()=>setOpen(false)}>
          <div className={`wrapper${open ? ' open' : ''}`}>
          <div className="content">
            <div className="image-container">
              <img src={imageBaseUrl + movie.image} alt="Post_1" className="image" />
            </div>
            <div className="text">
              <h3 className="title">{movie.title}</h3>
              <p className="description">{movie.overview}</p>
            </div>
          </div>
        </div>
        </motion.li>
      ))}
      </ul>
    </div>
  );
}

