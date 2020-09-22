import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LambdaPic from './img/new-lambda-pic.jpg';
import Frame from './img/framemotion-pic.jpg';
import './Blog.css';
import { faChevronLeft, faTimes, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';


const Blog = () => {

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




  return (

    <motion.div
    variants={variantsContainerFirst}
    initial='hidden'
    animate='visible'
    transition={{ delay: .1, duration: .1, type: 'tween'}}

    exit='exit'
    className='blog-container'
    >
      <div className='post-container'>
        <h1 className='blog-header'>Is Lambda School any good?</h1>
        <div className='medium-about'>
          <p className='blog-about'>By Jamison Blackwell</p>
          <a href='https://medium.com/@blackwellj1040/is-lambda-school-any-good-3fb6395cacf2' className='blog-medium'>Published here on Medium</a>
        </div>
        <img className='blog-img' src={LambdaPic} />
        <p className='blog-body'>I started part-time at Lambda School in March of 2019. I was excited and skeptical before beginning. However, I felt safe in my decision because I did not have to pay a dime until I found a job in tech. The loss of time was the greatest risk but for a chance to get into web development I felt like it was worth it at the time. I was surprised at the class size and it seems that most people can get through the enrollment process. It makes sense I guess since there is little difference in teaching an online class to 10 people as opposed to 100. You’ll just get more questions. After a few months, I noticed that students pretty much weed out themselves. Most likely they find that this is not the career path for them or the tasks seem too daunting. Either way, I saw a huge decline in my cohort’s size in a matter of a few months. They also allow students to jump to a cohort that started after if they fall behind. And from the looks of it, they do everything to get you up to speed.
The part-time cohorts consist of two 2–3-hour lectures a week and in between those lectures, you’ll be working on your projects. This is where you will implement what you learned in the lectures. At the end of every other week, you’ll have to take some nerve-racking “sprint-challenges”. At least they were for me. You are timed and if you can’t pass you may have to go back a cohort. Passing these sprint challenges gives you a huge sigh of relief but also a sense of accomplishment which is important to motivate you along. What I always find amazing is going through the lessons at the beginning of the week and feeling overwhelmed. The code would always look so foreign. This is where having a no-quitting attitude helps. If you devote the time to the lesson you will understand the material and after a few months of this, you will feel more confident at the start of each week and just know beforehand that you’ll get the work done. This confidence will spill over to life in general and will change how you approach tasks.</p>

<p className='blog-body'>Before you hop in, try learning to code yourself. At least for a short time so you can see if this path is right for you and because the information they teach is out there but it may take a while to get it all in. Although, the quality at which you get that information will not match up to Lambda in the least. They have a strong community and there is always someone to help. From students to instructors. If you post something in most of their Slack channels it’ll be answered within 30 minutes. The structure of the curriculum and beyond is amazing, especially for being a relatively new organization. If you’re sociable you will make friends and it only makes sense that networking in Lambda may even help you find your first web dev job. This school is great and I think the pay when you get a job approach gives them the incentive to teach you employable skills.</p>
      </div>
      <div className='post-container'>
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
      <div className='post-container'>
        <h1 className='blog-header'>Script tags inside a react component</h1>
        <div className='medium-about'>
          <p className='blog-about'>By Jamison Blackwell</p>
          <a href='https://medium.com/@blackwellj1040/script-tags-inside-a-react-component-5ec686ae5064' className='blog-medium'>Published here on Medium</a>
        </div>
        <img className='blog-img' src={Frame} />
        <p className='blog-body'>I ran into this problem when I was trying to use some vanilla javascript code I found on codepen in a react project. I didn’t want to refactor it and wanted to just plop it right into my component. Luckily react has a ScriptTag feature that solves this.
All you need to do is type npm install react-script-tag into the terminal.
Then type — import ScriptTag from ‘react-script-tag’ — on the top of the component.
Slap it in your code. Just use ScriptTag in place for script and for type put it equal to text/javascript
And you’re ready to go. It’s that easy.</p>
      </div>

      <Link style={{ textDecoration: 'none' }}  to='/dashboard' > <div >
    {<FontAwesomeIcon className='arrow-left' icon={faChevronLeft}/> }

    </div></Link>

    </motion.div>
  )
}

export default Blog;