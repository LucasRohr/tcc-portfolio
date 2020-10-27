import "./app.scss";
import goal from "./assets/goal.png";
import logo from "./assets/logo.svg";
import network from "./assets/network.svg";
import internet from "./assets/internet.svg";
import care from "./assets/care.svg";
import solution from "./assets/solution.svg";
import mediasPrototype from "./assets/medias_prototype.jpg";
import warningPrototype from "./assets/warning_prototype.jpg";

function App() {
  return (
    <div className="container">
      <div className="begin-container">
        <div className="begin-info-container">
          <img className="logo-icon" alt="Logo" src={logo} />

          <div>
            <span className="begin-title">
              Hello! This portfolio can help you understand about the digital heritage system
            </span>

            <span className="begin-subtitle">
              This TCC is being develop by the students Douglas Oliveira and Lucas Rohr
            </span>
          </div>
        </div>
      </div>

      <div className="goals-container">
        <img className="goal-image" alt="Goal" src={goal} />

        <div className="goal-explanation">
          This project can be fit in the number nine goal of sustainable development. Wich means that the main focus of
          the project is to develop a innovative solution for a problem.
          <span className="goal-inner-text">
            But what is our problem here? We choose to develop a system to help with the digital heritage challenge. And
            what is it? <br /> <br />
            Well, breafly, we all accumulate digital goods throughout or lives, but what happens to our most valuable
            components of the digital patrimony when we pass away?
          </span>
        </div>
      </div>

      <div className="observe-container">
        <div className="observe-explanation">
          <h2 className="observe-title"> What have we observed so far? </h2>

          <span className="observe-inner-text">
            In a research made in the month of April 2020, we have discovered that most people never thought about what
            happens to their data when they die.
            <br />
            <br />
            Is it removed from databases? Is it protected? And what if I had the wish to pass to a loved one some
            important documents and medias, like photos and videos?
            <br />
            <br />
            When we explained that the digital heritage, when integrated in a well designed system, can ensure a safe
            passage of data from an owner to his/her heirs, people immediatly answered that the digital heritage
            question is important.
            <br />
            <br />
            And in fact it is. We live in a world full of more digital data everyday. And a lot of it, without
            destination, can be a huge problem, from servers delays to people trying to access data that is protected by
            the deceased credentials that they might do not have.
          </span>
        </div>

        <div className="observe-images-container">
          <img alt="Network" src={network} />
          <img alt="Internet" src={internet} />
        </div>
      </div>

      <div className="people-container">
        <h1>So, who are the people that face this problem?</h1>
        <h2>Is this challenge really a thing?</h2>

        <div className="people-cards-container">
          <div className="people-card">
            Apart from being a matter that most people didn't ever thought about, the digital heritage problem may
            affect all of us. This can be sure as we all are technology users, we can observe this in each other
            everyday, in our routines
          </div>

          <div className="people-card">
            So our problem is very concrete and present all around us, and can impact everyone who has precious and
            important data on their devices and online storages (what most of us have)
          </div>

          <div className="people-card">
            We should immediatly design a way to help, but we have to design it clearly and most importantly: with
            security and integrity. That is a truth, because none of us want a system with security issues to handle
            data that describes who we were in life, such sensible content
          </div>

          <div className="people-card">
            In the end, everyone of us can be a digital heritage system user, because, as already said, we all have what
            this matter is really about, the digital patrimony: photos, videos, documents and many more
          </div>
        </div>
      </div>

      <div className="care-container">
        <div className="care-explanation">
          <h1>Why to trust our solution?</h1>

          <span>
            We understand that asking for confidence in such a delicate challenge can be complicated. But we really want
            to make a change in the digital heritage scenario. We want this because is a growing problem, that can
            affect people in many ways, including the emotional way.
          </span>

          <span>
            The fact that so many memories and unremarkable moments are within our digital patrimony, we want to offer a
            system that can enable a digital heritage process in a secure and agile way, a way that everyone can trust
            and make the best of.
          </span>

          <span>This is what moves us, this is what makes us really care.</span>
        </div>

        <img className="care-illustration" src={care} alt="Problem Illustration" />
      </div>

      <div className="solution-container">
        <div className="solution-illustration-container">
          <img className="solution-illustration" src={solution} alt="Solution Illustration" />
        </div>

        <div className="solution-explanation">
          <h1>But what have we done so far?</h1>

          <span>
            We defined our goal to be the development of a system that can enable the totally online process of the
            digital heritage. In out solution, a user can act as an owner, who uploads his/her digital patrimony to be
            storaged in the system.
          </span>

          <span>
            The solution ensures security and integrity of data while handling the heritage, using a criptographic keys
            system to store all types of information in a encrypted way. That been said, only users with the right
            permissions are allowed to see heritage items. This includes the owner and the selected heirs that the owner
            can choose.
          </span>

          <span>
            This selection if free, from parents to friends. When an owner passes away, one of his/her heirs can use the
            system to upload a Digital Decease Certificate code, so the system can validate it using a public and secure
            platform (Registro Civil). If the digital document is in fact official and the owner is deceased, the heirs
            can access their digital heritage.
          </span>

          <span>
            It is important to say that the system is descentralized, using the Blockchain technology for integrity and
            data immutability. The solution also uses the Smart Contract system inside a Blockchain, for the Digital
            Decease Certificate validation without the need of third parties, like lawers.
          </span>
        </div>
      </div>

      <div className="protypes-container">
        <h1>Here are some already developed screen prototypes</h1>

        <div className="prototype-row">
          <div className="prototype-row-content">
            <span>Medias management</span>
            <img src={mediasPrototype} alt="Solution Illustration" />
          </div>
        </div>

        <div className="prototype-row">
          <div className="prototype-row-content-warning">
            <img src={warningPrototype} alt="Solution Illustration" />
            <span>Deceased owner Digital Certificate validation</span>
          </div>
        </div>
      </div>

      <div className="end-container">
        <h1>And what's next?</h1>

        <div className="end-info-wrapper">
          <div className="end-info-container">
            <span>
              The project finds itself in the software development phase, after it's done, user tests with the system
              are planned, followed by the solution's validation
            </span>

            <span>Thank you for your attention and stay tuned!</span>
          </div>

          <span>Digital Heritage team</span>
        </div>
      </div>
    </div>
  );
}

export default App;
