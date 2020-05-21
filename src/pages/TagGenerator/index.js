import React from 'react'
import useStyles from './styles.js'

const TagGenerator = () => {
  const classes = useStyles()

  return (
    <main className={classes.main}>
      <section className={classes.headingSection}>
        <div className={classes.headingContainer} >
          <p className={classes.url}>Home / Tag Generator</p>
          <h2>Civic Tech Index</h2>
          <h1>Tag Generator</h1>
        
        
        <h2>Is your project affliated with any organization?</h2>
        <label>
            <input type="radio" value="yes" />
            Yes
          </label>
          <label>
            <input type="radio" value="no" />
           No
          </label>
          </div>
          </section>
      
    </main>
  )
}

export default TagGenerator