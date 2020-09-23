import React, {useState, useEffect} from 'react';
import {  useHistory } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LambdaPic from './img/new-lambda-pic.jpg';
import Frame from './img/framemotion-pic.jpg';
import Script from './img/script-tag.jpg';
import Sick from './img/sick.jpg';
import {Link} from 'react-scroll';
import {faFacebookSquare, faGithubSquare, faLinkedin, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';


import './Blog.css';
import { faChevronLeft, faTimes, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import scrollElement from 'react-scroll/modules/mixins/scroll-element';



const Blog = () => {
  const [apple] = useState(false);

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});

  }, [])


  const variantsContainerFirst = {
    hidden: {
      opacity: 1
    },
    visible: {
      opacity: 1,
      transition: {
        delay: .1, duration: .1
      }
    },
    exit: {
      opacity: .8

      
    }

  }

  const variantsContainer = {
    hidden: {
      height: '2px', 
      width: '100%'
    },
    visible: {
      height: '2px', 
      width: '0%'
    },
    exit: {
      opacity: .8

      
    }

  }

  const history = useHistory();


  const toWork = (e) => {
    e.preventDefault();
    history.push('/dashboard')
    window.scrollTo({top: 0, behavior: 'smooth'});


  }




  return (

    <motion.div
    variants={variantsContainerFirst}
    initial='hidden'
    animate='visible'
    transition={{ delay: .1, duration: .1, type: 'tween'}}

    exit='exit'
    className='blog-container'
    >
              <div className='faIcons-dash'>
          
          <a href='https://www.facebook.com/jamison.blackwell.3/'>{<FontAwesomeIcon className='list-icon-dash' icon={faFacebookSquare}/> }</a>
            
            
          <a href='https://twitter.com/JamisonBlackw10'>{<FontAwesomeIcon className='list-icon-dash' icon={faTwitterSquare}/> }</a>
            
            
          <a href='https://github.com/jblack186'>{<FontAwesomeIcon className='list-icon-dash' icon={faGithubSquare}/> }</a>
            
            
          <a href='https://www.linkedin.com/in/jamison-blackwell/'>{<FontAwesomeIcon className='list-icon-dash' icon={faLinkedin}/> }</a>
            
  
          </div>
  
      <div className='article-list'>
            <div>
        <Link
        activeClass="active"
        to="lambda"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >Is Lamba School any good?</Link>
      </div>

      <div>
        <Link
        activeClass="active"
        to="beware"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >Beware of the code</Link>
      </div>
      <div>
        <Link
        activeClass="active"
        to="frame"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >Need help animating elements in react?</Link>
      </div>
      <div>
        <Link
        activeClass="active"
        to="scripts"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >Script tags inside a react component</Link>
      </div>
      </div>

      <div id='lambda' className='post-container'>
        <h1 className='blog-name'>THE CODE POST</h1>
        <h1 className='blog-header'>Is Lambda School any good?</h1>
        <div className='medium-about'>
          <p className='blog-about'>By Jamison Blackwell</p>
          <a href='https://medium.com/@blackwellj1040/is-lambda-school-any-good-3fb6395cacf2' className='blog-medium'>Published here on Medium</a>
        </div>
        <img className='blog-img' src={LambdaPic} />
        <p className='blog-body'>I started part-time at Lambda School in March of 2019. I was excited and skeptical before beginning. However, I felt safe in my decision because I did not have to pay a dime until I found a job in tech. The loss of time would have been the most risk, but for a chance to get into web development, I felt like it was worth it at the time. I was surprised at the class size, and it seems that most people can get through the enrollment process. It makes sense, I guess, because there is little difference in teaching an online class to 10 people as opposed to 100. You will only simply get more questions. After a few months, I noticed that students pretty much weed out themselves. Most likely, they find that this is not the career path for them or the tasks seem too daunting. Either way, I saw a significant decline in my class size in a matter of a few months. They also allow students to attend a class that started shortly after theirs if they fall behind. And from the looks of it, they do everything to get you up to speed. The part-time cohorts consist of two 2–3-hour lectures a week, and in between those lectures, you will be working on your projects. Here is where I implemented what I learned in the class. At the end of every other week, I had to take some nerve-racking sprint-challenges. At least they were in the beginning. They time the assessments, and if you can’t pass, you may have to go back to a later class. Passing these sprint challenges gave me a huge sigh of relief but also a sense of accomplishment, which helped to motivate me along. I always found myself going through the lessons at the beginning of the week and feeling overwhelmed. The code would always look so foreign. Having a no-quitting attitude has been essential in my coding journey. I learned that if I devote the time to the lesson, I would eventually understand the material, and after a few months of this, I felt more confident at the start of each week and knew beforehand that I would get the work done. This confidence spilled over to my life in general and changed the way I approach tasks.</p>
<p className='blog-body'>If your choosing to join a boot camp, first try learning to code by yourself. At least for a short time so you can see if this path is right for you and because the information they teach is out there, but it may take a while to get it all in. Although, I feel confident in saying that the quality at which you get that information will not match up to Lambda in the least. They have a strong community, and there is always someone to help. This support comes from both students to instructors. If you post something in most of their Slack channels, you will get an answer within 30 minutes. The structure of the curriculum and beyond is advanced, especially for being a relatively new organization. And if you are an extrovert, you will make friends, and it only makes sense that networking in Lambda may even help you find your first web dev job. I have no regrets in attending Lamba, and their pay when you get a job approach gives them the incentive to teach you employable skills.</p>



      </div>
      <div id="beware" className='post-container'>
        <h1 className='blog-header'>BEWARE OF THE CODE</h1>
        <div className='medium-about'>
          <p className='blog-about'>By Jamison Blackwell</p>
          <a href='https://medium.com/@blackwellj1040/beware-of-the-code-faec56d2ed53' className='blog-medium'>Published here on Medium</a>
        </div>
        <img className='blog-img' src={Sick} />
        <p className='blog-body'>Whether you are new to coding or you are working on a project that interests you, the excitement of coding can wreak havoc on your health. Unfortunately, I know this from personal experience. When I started coding, I was obsessed. About seven months in and I was in the worst shape of my life and became ill. I was not able to code for over a month. Up until that point, there had not been a day where I did not mess around with code. I have never been sicker in my life, and I believe this was from my lifestyle at the time. Fast food, energy drinks, no exercise, and less than 4 hours of sleep a day took me away from my passion for a time. The only good thing about getting sick was that I lost a bunch of weight. Which gave me a little head start with my health journey. Before being sick, and up until now, I have managed to lose around 60 pounds. I did this with a relatively small amount of exercise and a lot of healthy eating. Surprisingly this included pizza almost every day. I will give out the recipe in a later post. It is not as good as the real thing, but darn close. I also turned into a baker while on quarantine from COVID. I make cookies, brownies, and cake out of healthy low carb ingredients.</p>

<p className="blog-body">I can ramble on forever about things related to health thanks to that bout. You probably have been told this before, but it is paramount to take some time to give your body the attention it needs. If you choose not to, you may be face regret down the line. I think many developers get away with being obsessed with code because they are young. I was fortunate that I was not so lucky because this health journey has got me feeling great.
Excitement is not the only thing you have to keep on a checklist. Frustration from an unsolved problem can leave you hemmed up as well. The truth be told, you can feel like life can not continue until the issue is solved, but I cannot tell you how many times I have been working on a problem and merely took a short break and when I have gotten back to the issue, I find the solution in front of my face. Strategic breaks will be instrumental in your success as a developer. There are methods out there for handling this, but when I run into a problem, I refuse to let myself get frustrated and keep a positive, and sometimes comical mindset. “Here, we go again.”Once I feel I’ve been staring at the screen too long, I get up and do something that I enjoy or exercise to relax my mind. A short jog always does the trick. When I get back to the problem, I have an easier time than when I left. You’re going to run into many roadblocks as a developer, but don’t let that stop you from making your next meal, spending time with family and friends, and getting some exercise. The bottom line is, don’t let excitement or frustration get the better of your coding experience.


</p>
      </div>

      <div id="frame" className='post-container'>
        <h1 className='blog-header'>Need help animating elements in react?</h1>
        <div className='medium-about'>
          <p className='blog-about'>By Jamison Blackwell</p>
          <a href='https://medium.com/@blackwellj1040/need-help-animating-elements-in-react-f8263b0428f0' className='blog-medium'>Published here on Medium</a>
        </div>
        <img className='blog-img' src={Frame} />
        <p className='blog-body'>A powerful library that allows you to have control the way your element behaves.
First, open your terminal, and in your project folder type npm install framer-motion. Then in the component file that you want to implement animations import motion from ‘framer-motion’ on top.
Time to plug it in! Simply add ‘motion’ in front of the element’s table like so.
<motion.div></motion.div>
One important property that you will be using is animation.
Place a value here and you'll see that when the component mounts, your element will move in a corresponding manner to that value.
Now we’re moving! The element shifted vertically by 100 pixels. If you want to define sizings other than pixels you’ll have to wrap the value in quotes like “50% ”.
Two other properties that you’ll be using quite frequently are initial and transition. 
If “initial” is not set elements will automatically jump to the values set in “animate”. If you want them to start at some other value than use initial to do so. You can also use “transition” to delay animations and specify the duration.
Framermotion has excellent documentation https://www.framer.com/api/motion/. There is so much you can do with this tool. From cleaning up the code to animating an entire page when a component loads. We’ve barely scratched the surface here. Utilize this in your next project!</p>
      </div>
      <div id='scripts' className='post-container'>
        <h1 className='blog-header'>Script tags inside a react component</h1>
        <div className='medium-about'>
          <p className='blog-about'>By Jamison Blackwell</p>
          <a href='https://medium.com/@blackwellj1040/script-tags-inside-a-react-component-5ec686ae5064' className='blog-medium'>Published here on Medium</a>
        </div>
        <img className='blog-img' src={Script} />
        <p className='blog-body'>I ran into this problem when I was trying to use some vanilla javascript code I found on codepen in a react project. I didn’t want to refactor it and wanted to just plop it right into my component. Luckily react has a ScriptTag feature that solves this.
All you need to do is type npm install react-script-tag into the terminal.
Then type — import ScriptTag from ‘react-script-tag’ — on the top of the component.
Slap it in your code. Just use ScriptTag in place for script and for type put it equal to text/javascript
And you’re ready to go. It’s that easy.</p>
      </div>


      <div onClick={toWork} >
    {<FontAwesomeIcon className='arrow-left' icon={faChevronLeft}/> }

    </div>

    </motion.div>
  )
}

export default Blog;