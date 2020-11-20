import React from "react";
import BookIcon from "../../assets/book.svg";
import AnalysisIcon from "../../assets/analysis.svg";

import "./persona-research.scss";

export default function PersonaResearch() {
  return (
    <div className="persona-research-container">
      <h1 className="persona-research-title">The persona research methodology</h1>

      <div className="persona-research-theme-wrapper">
        <div className="persona-research-theme">
          <h2>The subject and objectives</h2>

          <span>
            The focus of our work is the digital legacy, the destination of the digital patrimony that most people have,
            but many never thought about how to define its heirs.
          </span>

          <span>
            Our primary objective is to develop a software solution to enable the process of digital legacy in an agile 
            and practical way to our public. As a secondary objective, we aim to build this solution most securely, given
            the delicate subject that it handles.
          </span>
        </div>
      </div>

      <div className="persona-research-public-wrapper">
        <div className="persona-research-public">
          <h2>The target public</h2>

          <span>
            We have two types of target users: First, a group of people that possesses digital assets economically or
            emotionally valuable, which makes these people concerned about the fate of this property and wanting to keep
            them accessible. This is a digital owner user profile.
          </span>

          <span>
            On the other hand, we have people that are aware of the importance of both the economical and emotional value of
            the digital assets from their owners, they want to keep their legacy alive and accomplish their wishes. This
            is the heir user profile.
          </span>
        </div>
      </div>

      <div className="persona-research-existing-data-wrapper">
        <h2>Our strategy to research digital legacy data</h2>

        <div className="persona-research-existing-data">
          <span>
            We have made researches on existing scientific articles and researchers' papers surrounding the digital
            legacy subject. We focused on many works that people were involved in questionaries about how they feel and
            think about the digital patrimony and how they pass it to other people.
          </span>

          <img className="persona-research-existing-data-icon" src={BookIcon} alt="Existing data" />

          <span>
            We organized data and discussed the results that these researches had various types of people, like
            people of different ages, religions, and other particularities. From that, we have built our plan to
            acquire new data about the digital legacy and confirm or deny other authors conclusions based on their
            previous researches on the field.
          </span>
        </div>
      </div>

      <div className="persona-research-separator" />

      <div className="persona-research-new-data-wrapper">
        <h2>And how do we get new data?</h2>

        <div className="persona-research-new-data-header">
          <span>
            From previous researches on the field, we have built our questions to acquire new data about the digital
            legacy and confirm or deny other authors' results.
          </span>

          <span>
            Starting from the elaborated questions, we made an online opinion research. This research had the objective
            of collecting different potential users thoughts regarding the digital legacy and related systems that could
            afford a solution for it.
          </span>

          <span>
            The research is an online form with objective questions. However, some of them have open fields for
            additional answers. The form was shared on social media platforms, such as LinkedIn and Facebook.
          </span>
        </div>

        <div className="persona-research-new-data-body">
          <div className="persona-research-new-data-card">
            <h2>Who is our target?</h2>

            <span>
              Using an online form shared in a virtual environment, we plan to hit people connected to technology that
              could possibly be a digital legacy system user. We aimed for people that have access to the internet and are
              connected online, active on social media.
            </span>
          </div>

          <div className="persona-research-new-data-card">
            <h2>Where we do our research?</h2>

            <span>
              We plan to share the research on social media platforms, given that most users who have a digital
              patrimony use them. But we also plan to make a personal presentation of the theme for people in IFSul
              Sapucaia, so we can talk more effectively about the problem. After this presentation, we plan to present
              the form and ask them for answers.
            </span>
          </div>

          <div className="persona-research-new-data-card">
            <h2>When we do it?</h2>

            <span>
              We have already made an online research about the subject using the social media share strategy. But we
              plan to do another similar research when the system software is ready, with more specific questions about
              the solution itself, to see users' views.
            </span>

            <span>
              We plan to make the presential presentation and form discussion when classes at IFSul Sapucaia get
              back to normality.
            </span>
          </div>

          <div className="persona-research-new-data-card">
            <h2>How we defined our sample?</h2>

            <span>
              The sample group is composed of online users, especially most young people, as well as adults who are
              connected to social media. We estimated about 300 people as a total target number, including classes
              students from IFSul.
            </span>

            <span>
              That is a broader sample of participants than the examined researches from the digital legacy subject.
            </span>
          </div>
        </div>

        <div className="persona-research-new-data-questions">
          <h2>How are the questions of our research?</h2>

          <div className="persona-research-new-data-questions-header">
            <span>
              We have listed below the asked questions in the already made research. We are also showing the questions which will be asked in future surveys. The identities of all participants are anonymous.
            </span>
            <img src={AnalysisIcon} alt="Research analysis" />
          </div>

          <div className="persona-research-new-data-questions-body">
            <div className="persona-research-new-data-questions-wrapper">
              <h2>Demography</h2>

              <ul className="persona-research-new-data-questions-list">
                <li>How old are you?</li>
                <li>Do you follow a religion?</li>
                <li>How do you rank your familiarity with the technology? (1 to 5)</li>
                <li>
                  Which social networks do you use?
                  <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Twitter</li>
                    <li>Youtube</li>
                    <li>I don't use social networks</li>
                    <li>Other (open field)</li>
                  </ul>
                </li>
                <li>Do you think the Terms of Use of a online service/social media is important?</li>
              </ul>
            </div>

            <div className="persona-research-new-data-questions-wrapper">
              <h2>Digital Legacy</h2>

              <ul className="persona-research-new-data-questions-list">
                <li>
                  Have you thought about what will happen to your digital data and various information about you that
                  are on the Internet after you pass away?
                </li>
                <li>Do you know what Digital Legacy is?</li>
                <li>If so, describe in your words what it is. If not, describe what you think it is. (open field)</li>
                <li>Do you know or have you heard of any Digital Legacy system?</li>
                <li>Do you consider a system that enable Digital Legacy important?</li>
                <li>
                  Would you use a Digital Legacy service that could have access to the personal data of applications you
                  use? (example: Access your Facebook)
                </li>
                <li>
                  Would you like to give your heirs digital content in addition to access to your social networks?
                  (examples: document files, photos and videos)
                </li>
              </ul>
            </div>

            <div className="persona-research-new-data-questions-wrapper">
              <h2>Laws and testament</h2>

              <ul className="persona-research-new-data-questions-list">
                <li>Do you know or have you heard about any legislation that handles Digital Legacy?</li>
                <li>
                  In a Digital Legacy system, how should the person's death be indicated?
                  <ul>
                    <li>Physical death certificate document</li>
                    <li>Digital death certificate document</li>
                    <li>Communication from family members or trusted people</li>
                    <li>User without accessing the system for a certain time</li>
                    <li>I don't know</li>
                    <li>Other (open field)</li>
                  </ul>
                </li>

                <li>Do you consider that a digital will has the same relevance as a physical will?</li>
              </ul>
            </div>

            <div className="persona-research-new-data-questions-wrapper">
              <h2>Digital Legacy system functionalities</h2>

              <ul className="persona-research-new-data-questions-list">
                <li>
                  In a Digital Legacy system, would you assign your social media credentials (such as email and
                  password) to heirs previously chosen by you?
                </li>

                <li>
                  Check which of the features below you find relevant in a Digital Legacy system:
                  <ul>
                    <li>Choice of heirs</li>
                    <li>Partial deletion of accounts and digital assets</li>
                    <li>Total deletion of accounts and digital assets</li>
                    <li>Manage online accounts after death</li>
                    <li>Transmission of files of different types to heirs (images, videos, etc.)</li>
                    <li>Instructions for what to do with digital assets</li>
                    <li>Creation of digital memorials for the deceased</li>
                    <li>Other (open field)</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="persona-research-new-data-questions-wrapper">
              <h2>Acceptability</h2>

              <ul className="persona-research-new-data-questions-list">
                <li>
                  What are the odds that you would use a system to leave your digital legacy to someone else? (1 to
                  5)
                </li>
                <li>What are the odds that you would use a system to inherit someone’s digital legacy? (1 to 5)</li>
                <li>Would you recommend a Digital Legacy system to an acquaintance?</li>
                <li>How comfortable are you at addressing the issue of death and digital data? (1 to 5)</li>
                <li>
                  How much do you think your beliefs related to death can influence the functionalities and usage of a
                  Digital Heritage system?
                  <ul>
                    <li>They do not influence</li>
                    <li>They partially influence</li>
                    <li>They totally influence</li>
                    <li>Other (open field)</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="persona-research-new-data-guidelines">
          <h2>What are our guidelines and observations?</h2>

          <div className="persona-research-new-data-guidelines-card">
            First, we want to know demography data to make correlations, for example, the age ranges of people who are
            active with technology
          </div>

          <div className="persona-research-new-data-guidelines-card">
            We aim to discover if most people know about Digital Legacy and what they think about the subject
          </div>

          <div className="persona-research-new-data-guidelines-card">
            Another crucial point is to observe what is the best way people can think of when death validation is the
            concern
          </div>

          <div className="persona-research-new-data-guidelines-card">
            We want to know the most valuable functionalities of a digital legacy system for these people, what truly
            matters to them in a software solution for it
          </div>

          <div className="persona-research-new-data-guidelines-card">
            Also, we have the goal to know the degree of acceptability for a digital legacy system and if people would
            use it, as well as if their beliefs affect them when interacting with this system
          </div>
        </div>
      </div>
    </div>
  );
}
