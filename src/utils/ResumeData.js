import React from 'react';
import PortfolioProject from '../assests/images/Portfolio Project.png';
import Ecommerce from '../assests/images/ecommerce.png';
import WorldCup from '../assests/images/fifacup2018.jpg';
import Recommender from '../assests/images/Recommender.jpg';
import Email from '../assests/images/email.jpg';
import Bulldozer from '../assests/images/bulldozer.jpg';
import Facebook from '../assests/images/facebook.jpg';
import Covid from '../assests/images/covid.jpg';

import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CodeIcon from '@material-ui/icons/Code';
import StorageIcon from '@material-ui/icons/Storage';
import InsertChartIcon from '@material-ui/icons/InsertChart';


// eslint-disable-next-line
export default  {
  name: 'Shahid Hassan Ansari',
  title: 'React Js Developer / Data Scientist',

  birthday: '12 July 1997',
  address : 'Narora, Bulandshahr, U.P',
  email: 'ansari.shah28@gmail.com',
  number: '8619180325',

  socials : {
    Facebook: {
      link: 'https://www.facebook.com/profile.php?id=100005654111460',
      icon: <FacebookIcon />
    },
    Github: {
      link: 'https://github.com/iamshahid1997',
      icon: <GitHubIcon />
    },
    Twitter: {
      link: 'https://twitter.com/iamshahid1997',
      icon: <TwitterIcon />
    },
    LinkedIn: {
      link: 'https://www.linkedin.com/in/shahid-hassan-ansari-b19379149/',
      icon: <LinkedInIcon />
    },
  },

  about : "A technology enthusiast proficient in React JS to make industry-level websites with handsome knowledge in Data Science who takes pride in building models that translate data points into business insights and have used the required skills in several Kaggle competitions, now eager to apply the same knowledge to real-world business problems.",

  educations : [
    {
      id: "1",
      title: 'JAIPUR ENGINEERING COLLEGE AND RESEARCH CENTER',
      date: '2016 - 2020',
      field: 'Bachelor of Technology',
      course: 'Electronics and Communication',
      aggregate: 'Aggregate : 74.6%'
    },
    {
      id: "2",
      title: 'ATOMIC ENERGY CENTRAL SCHOOL NARORA',
      date: '2014 - 2016',
      field: 'Sr. Secondary Education',
      course: '',
      aggregate: 'Aggregate : 91%'
    }
  ],

  experiences : [
    {
      id: "3",
      title: 'APICON SOLUTIONS PRIVATE LIMITED',
      date: 'Dec 20 – Feb 21',
      field: 'Machine Learning Intern',
      description: 'Worked on a project that generates Graphs with speech search.\nThe project helps to generate different graphs on voice commands unlike the conventional way of manually presenting it. '
    }
  ],

  services : [
    {
      id: "4",
      title: 'Front-End Web Developer',
      description : 'Can develop responsive websites using React JS.',
      icon: <CodeIcon />
    },
    {
      id: "5",
      title: 'Data Scientist',
      description : 'Ability to understand the real-world business problems and thus preprocess, clean and handle large amount of data to create useful models.',
      icon : <StorageIcon />
    },
    {
      id: "6",
      title: 'Data Visualisation',
      description : 'Can create reports and dashboards to give data-insights using Tableau or Google Data Studio.',
      icon : <InsertChartIcon />
    }
  ],
  skills : [
    {
      id: "7",
      title: 'Front-End',
      description : [
        "React JS",
        "Redux",
        "Javascript ES6",
        "Bootstrap",
        "Material UI",
      ], 
    },
    {
      id: "8",
      title : "Data Science",
      description : [
        "Python",
        "Supervised Learning",
        "Unsupervised Learning",
        "NLP",
        "Computer Vision",
        "Time Series",
        "Deep Learning",
        "Statistics"
      ],
    },
    {
      id: "9",
      title : "Data Visualistaion",
      description : [
        "Tableau",
        "Google Data Studio",
        "Python"
      ],
    },
    {
      id: "10",
      title : "Tools/Technology",
      description : [
        'Google Colob',
        'Jupter Notebook',
        'Visual Studio',
        'Git/Github'
      ]
    }
  ],

  projects : [
    {
      id: "11",
      tag: 'React',
      img : PortfolioProject,
      title : "Porfolio Website",
      description  : 'A portfolio website to showcase my skills and projects.',
      links :[
       {
        link :'' , icon : <GitHubIcon/>
       } 
      ] 
    },
    {
      id: "12",
      tag: 'React',
      img : Ecommerce,
      title : "E-Commerce Website",
      description  : 'An E-Commerce website which allows to shop various products similar to Amazon.',
      links :[
        {
         link :'' , icon : <GitHubIcon/>
        } 
       ] 
    },
    {
      id: "13",
      tag: 'Machine Learning',
      img : WorldCup,
      title : "FIFA World Cup 2018 Winner Prediction",
      description  : 'Predict the outcome of each round of FIFA World Cup 2018 according to the previous rankings, matches played and points difference',
      links :[
        {
          link : 'https://github.com/iamshahid1997/Projects/tree/main/Predicting%20FIFA%20World%20Cup%20Winner' , icon : <GitHubIcon/>
        } 
       ] 
      
    },
    {
      id: "14",
      tag: 'Machine Learning',
      img : Recommender,
      title : "Recommender System",
      description  : 'Item-based collaborative filtering is one kind of recommendation method which looks for similar items based on the items users have already liked or positively interacted with just like Amazon or Netflix.',
      links :[
        {
         link :'https://github.com/iamshahid1997/advanced_projects/tree/master/5.%20Project%205' , icon : <GitHubIcon/>
        } 
       ] 
    },
    {
      id: "15",
      tag: 'Machine Learning',
      img : Email,
      title : "Spam/Ham Email Classifier",
      description  : 'Implemented NLP and Nave Bayes to predict whether an email is spam or a ham.',
      links :[
        {
         link :'https://github.com/iamshahid1997/advanced_projects/tree/master/7.%20Project%207' , icon : <GitHubIcon/>
        } 
       ] 
    },
    {
      id: "16",
      tag: 'Machine Learning',
      img : Bulldozer,
      title : "Blue Book for Bulldozers",
      description  : 'Predicts the auction sale price for a piece of heavy equipment to create a blue book for bulldozers using Regression techniques.',
      links :[
        {
          link : 'https://github.com/iamshahid1997/advanced_projects/tree/master/8.%20Project%208' , icon : <GitHubIcon/>
        } 
       ] 
      
    },
    {
      id: "17",
      tag: 'Machine Learning',
      img : Facebook,
      title : "Facebook Prophet",
      description  : 'Predicts future Chicago Crime Rates using Facebook Prophet.',
      links :[
        {
          link : 'https://github.com/iamshahid1997/advanced_projects/tree/master/2.%20Project%202' , icon : <GitHubIcon/>
        } 
       ] 
    },
    {
      id: "18",
      tag: 'Data Analysis',
      img : Covid,
      title : "Covid-19 Data Analysis",
      description  : 'Provides complete overview of Covid-19.',
      links :[
        {
         link : 'https://github.com/iamshahid1997/Projects/tree/main/Covid%2019%20data%20Analysis' , icon : <GitHubIcon/>
        } 
       ] 
    },
  ]
}

 
