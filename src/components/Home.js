import React from 'react';
import CategoriesContainer from '../containers/CategoriesContainer'

const Home = () => {
    return (
      <>
      <div className='home-pg'>
        <h2>Welcome to CrimeTime Collection</h2> <br/>
        <h5> Lately it seems as through true crime documentaries and podcasts have skyrocketed in popularity. According to research published in 2010 by Amanda M. Vicary and R. Chris Fraley, women show a larger interest in true crime especially stories that provided tips for spotting danger and staying alive. On another note, human beings are naturally curious creatures and because of this you may be naturally drawn to getting a deeper look into those who completely disregard social norms. For others, they hope to help solve a decades old cold case and/or provide useful information. Whatever the reason may be use this site to learn more about cases. If you would like to add to the database feel free to add one through the case submission form.</h5>
      </div>
      < CategoriesContainer />
      </>
    )
}

export default Home;