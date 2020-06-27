import React, { useEffect, useRef } from 'react'
import useStyles from './styles.js'

const RefineResults = ({ isDisplay, setIsDisplay }) => {
  const page = useRef(null)
  const progLangOption = useRef(null)
  const projLangOption = useRef(null)
  const affiliationOption = useRef(null)
  const openIssuesOption = useRef(null)
  const lastUpdatedOption = useRef(null)
  const createdInOption = useRef(null)
  const progLangOptionArrow = useRef(null)
  const projLangOptionArrow = useRef(null)
  const affiliationOptionArrow = useRef(null)
  const openIssuesOptionArrow = useRef(null)
  const lastUpdatedOptionArrow = useRef(null)
  const createdInOptionArrow = useRef(null)


  const classes = useStyles()

  const toggleResultsSection = (optionRef, arrowRef) => {
    if(optionRef.current.className === classes.refineResultsOptionsContainer) {
      optionRef.current.className = `${classes.refineResultsOptionsContainer} ${classes.closeOptionsDisplay}`
      arrowRef.current.className = `${classes.refineResultsArrow} ${classes.flipArrow}`
    } else {
      optionRef.current.className = classes.refineResultsOptionsContainer
      arrowRef.current.className = classes.refineResultsArrow
    }
  }

  useEffect(() => {
    if(isDisplay) {
      page.current.className = `${classes.refineResultsContainer} ${classes.display}`
    } else {
      page.current.className = classes.refineResultsContainer
    }
  }, [isDisplay])

  return (
    <div className={classes.refineResultsContainer} ref={page}>
      <div className={classes.pageContent}>
        <button className={classes.refineResultsButton} onClick={() => setIsDisplay(false)}>CLOSE</button>
        <h1 className={classes.refineResultsHeading}>Refine Results</h1>
        <div className={classes.refineResultsSection}>
          <div onClick={() => toggleResultsSection(progLangOption, progLangOptionArrow)} className={classes.refineResultsSubHeadingContainer}>
            <h3 className={classes.refineResultsSubHeading}>Programming Language(s) Used:</h3>
            <img className={classes.refineResultsArrow} ref={progLangOptionArrow} src='/images/arrow.png' alt='drop down arrow' />
          </div>
          <div className={classes.refineResultsOptionsContainer} ref={progLangOption}>
            <input className={classes.refineResultsSearch} placeholder='Search'/>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='language1'/>
              <label className={classes.refineResultsLabel}>Langauge 1</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='language2'/>
              <label className={classes.refineResultsLabel}>Langauge 2</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='language3'/>
              <label className={classes.refineResultsLabel}>Langauge 3</label>
            </div>
            <p className={classes.viewMore}>View More Languages</p>
          </div>
        </div>
        <div className={classes.refineResultsSection}>
          <div onClick={() => toggleResultsSection(projLangOption, projLangOptionArrow)} className={classes.refineResultsSubHeadingContainer}>
            <h3 className={classes.refineResultsSubHeading}>Project Language:</h3>
            <img className={classes.refineResultsArrow} ref={projLangOptionArrow} src='/images/arrow.png' alt='drop down arrow' />
          </div>
          <div className={classes.refineResultsOptionsContainer} ref={projLangOption}>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='English'/>
              <label className={classes.refineResultsLabel}>English</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='Spanish'/>
              <label className={classes.refineResultsLabel}>Español (Spanish)</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='French'/>
              <label className={classes.refineResultsLabel}>Français (French)</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='Simplified-Chinese'/>
              <label className={classes.refineResultsLabel}>体中文 (Simplified Chinese)</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='Japanese'/>
              <label className={classes.refineResultsLabel}>日本語 (Japanese)</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='Portugal'/>
              <label className={classes.refineResultsLabel}>Português (Portugal)</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='Russian'/>
              <label className={classes.refineResultsLabel}>Pусский (Russian)</label>
            </div>
            <p className={classes.viewMore}>View More Languages</p>
          </div>
        </div>
        <div className={classes.refineResultsSection}>
          <div onClick={() => toggleResultsSection(affiliationOption, affiliationOptionArrow)} className={classes.refineResultsSubHeadingContainer}>
            <h3 className={classes.refineResultsSubHeading}>Affiliation:</h3>
            <img className={classes.refineResultsArrow} ref={affiliationOptionArrow} src='/images/arrow.png' alt='drop down arrow' />
          </div>
          <div className={classes.refineResultsOptionsContainer} ref={affiliationOption}>
            <input className={classes.refineResultsSearch} placeholder='Search'/>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='Unaffiliated'/>
              <label className={classes.refineResultsLabel}>Unaffiliated</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='Code for All'/>
              <label className={classes.refineResultsLabel}>Code for All</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='Code for America'/>
              <label className={classes.refineResultsLabel}>Code for America </label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='Open Oakland'/>
              <label className={classes.refineResultsLabel}>Open Oakland</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='Hack for LA'/>
              <label className={classes.refineResultsLabel}>Hack for LA</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='Code for Canada'/>
              <label className={classes.refineResultsLabel}>Code for Canada</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='Code for Japan'/>
              <label className={classes.refineResultsLabel}>Code for Japan</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='Open Democracy Labs'/>
              <label className={classes.refineResultsLabel}>Open Democracy Labs</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='Yale Openlab'/>
              <label className={classes.refineResultsLabel}>Yale Openlab</label>
            </div>
            <p className={classes.viewMore}>View More Affiliations</p>
          </div>
        </div>
        <div className={classes.refineResultsSection}>
          <div onClick={() => toggleResultsSection(openIssuesOption, openIssuesOptionArrow)} className={classes.refineResultsSubHeadingContainer}>
            <h3 className={classes.refineResultsSubHeading}>Open Issues Count:</h3>
            <img className={classes.refineResultsArrow} ref={openIssuesOptionArrow} src='/images/arrow.png' alt='drop down arrow' />
          </div>
          <div className={classes.refineResultsOptionsContainer} ref={openIssuesOption}>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='0-10'/>
              <label className={classes.refineResultsLabel}>0 - 10</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='10-20'/>
              <label className={classes.refineResultsLabel}>10 - 20</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='20-50'/>
              <label className={classes.refineResultsLabel}>20 - 50</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='50+'/>
              <label className={classes.refineResultsLabel}>50 +</label>
            </div>
          </div>
        </div>
        <div className={classes.refineResultsSection}>
          <div onClick={() => toggleResultsSection(lastUpdatedOption, lastUpdatedOptionArrow)} className={classes.refineResultsSubHeadingContainer}>
            <h3 className={classes.refineResultsSubHeading}>Last Updated:</h3>
            <img className={classes.refineResultsArrow} ref={lastUpdatedOptionArrow} src='/images/arrow.png' alt='drop down arrow' />
          </div>
          <div className={classes.refineResultsOptionsContainer} ref={lastUpdatedOption}>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='last 24 hours'/>
              <label className={classes.refineResultsLabel}>Within the last 24 hours</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='last week'/>
              <label className={classes.refineResultsLabel}>Within the last week</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='last 30 days'/>
              <label className={classes.refineResultsLabel}>Within the last 30 days</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='1-6 months'/>
              <label className={classes.refineResultsLabel}>1 - 6 months</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='6-12 months'/>
              <label className={classes.refineResultsLabel}>6 months - 12 months</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='year+'/>
              <label className={classes.refineResultsLabel}>More than a year ago</label>
            </div>
          </div>
        </div>
        <div className={classes.refineResultsSection}>
          <div onClick={() => toggleResultsSection(createdInOption, createdInOptionArrow)} className={classes.refineResultsSubHeadingContainer}>
            <h3 className={classes.refineResultsSubHeading}>Created In:</h3>
            <img className={classes.refineResultsArrow} ref={createdInOptionArrow} src='/images/arrow.png' alt='drop down arrow' />
          </div>
          <div className={classes.refineResultsOptionsContainer} ref={createdInOption}>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='North America'/>
              <label className={classes.refineResultsLabel}>North America</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='South America'/>
              <label className={classes.refineResultsLabel}>South America</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='Africa'/>
              <label className={classes.refineResultsLabel}>Africa</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='Asia'/>
              <label className={classes.refineResultsLabel}>Asia</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='Europe'/>
              <label className={classes.refineResultsLabel}>Europe</label>
            </div>
            <div className={classes.refineResultsOptionContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='Australia'/>
              <label className={classes.refineResultsLabel}>Australia</label>
            </div>
          </div>
        </div>
        <button className={classes.refineResultsResetButton}>Reset Filters</button>
      </div>
    </div>
  )
}

export default RefineResults