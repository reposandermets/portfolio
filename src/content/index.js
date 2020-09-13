import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import fxlogo from './fxlogo.png';
import sander from './sander.png';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: 'Sander Mets',
  description: "Software engineer. Passionate about scalable & cost efficient cloud based IT solutions.",
  image: sander,
};

const featuredPostsWork = [
  {
    title: 'Farmx, Senior software engineer',
    date: '07.2020 - ...',
    description:
      'Working on interactive map application. React, Leaflet, AWS.',
    image: fxlogo,
    imageText: 'Image Text',
    link: 'https://www.farmx.co'
  }, {
    title: 'Malwarebytes, Software engineer',
    date: '11.2018 - 07.2020',
    description:
      'Public Restful API layer for Malwarebytes business partners. AWS, Typescript Node, Java, PostgreSQL, DynamoDb.',
    image: 'data:image/png;base64,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',
    imageText: 'Image Text',
    link: 'https://www.malwarebytes.com'
  },
  {
    title: 'The Climate Corporation, Sr Software Engineer',
    date: '02.2017 - 10.2018',
    description:
      'Created micro frontends. Applied Full CI/CD. React, Jenkins, AWS.',
    image: 'https://s3.us-east-1.amazonaws.com/nea-website-bucket/images/company/logo-Climate_Corporation.jpg?mtime=20190321120135',
    imageText: 'Image Text',
    link: 'https://www.climate.com'
  },
  {
    title: 'Bind, fullstack Javascript engineer',
    date: '05.2015 - 02.2017',
    description:
      'Took part of developing fintech products like Credit24 & Onefi. Cordova, React Native, front-end, Node.js micorservices, MySQL, MongoDb',
    // image: 'https://s3.us-east-1.amazonaws.com/nea-website-bucket/images/company/logo-Climate_Corporation.jpg?mtime=20190321120135',
    imageText: 'Image Text',
    link: 'https://www.bind.ee'
  },
];

const featuredPostsProjects = [
  {
    title: 'Bot for automated trading',
    date: '2020',
    description:
      'Microservice takes position on crypto exchange is message via HTTP request gets received. Messages being queued using doubled linked list. Golang, Docker.',
    // image: fxlogo,
    imageText: 'Image Text',
    link: 'https://www.github.com/reposandermets/take-positions'
  }, {
    title: 'Go module',
    date: '2019',
    description:
      'State management for concurrent processes. Golang, Docker.',
    // image: fxlogo,
    imageText: 'Image Text',
    link: 'https://www.github.com/reposandermets/gostate'
  }, {
    title: 'Test task',
    date: '2018',
    description:
      'Scalable Node.js backend application allowing user to add product reviews. Node.js workers, Postgres, Redis, local message queue.',
    // image: fxlogo,
    imageText: 'Image Text',
    link: 'https://www.github.com/reposandermets/mbnp'
  }, {
    title: 'Solar info dashboard',
    date: '2018',
    description:
      'Application showing info from Solar Panels. Node.js, ReactJs, Docker.',
    // image: fxlogo,
    imageText: 'Image Text',
    link: 'https://www.bitbucket.org/sandermets/sp'
  }, {
    title: 'Bizweb',
    date: '2017',
    description:
      'Application allowing users to upload zipped html, which will be presented as a webpage. Angular4, Node.js, Docker.',
    // image: fxlogo,
    imageText: 'Image Text',
    link: 'https://www.bitbucket.org/sandermets/bizweb'
  }
];

export default function Content() {
  const classes = useStyles(theme);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{ marginTop: '3em' }}>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Typography
            component="h2"
            variant="h5"
            style={{ color: 'white', paddingBottom: '1em' }}
            align="left"
            noWrap
            className={classes.toolbarTitle}
          >
            Latest work experience
          </Typography>
          <Grid container spacing={4}>
            {featuredPostsWork.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>

          <Typography
            component="h2"
            variant="h5"
            style={{ color: 'white', paddingBottom: '1em', paddingTop: '1em' }}
            align="left"
            noWrap
            className={classes.toolbarTitle}
          >
            Hobby projects
          </Typography>
          <Grid container spacing={4}>
            {featuredPostsProjects.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}
