import React, { useState, useRef } from 'react'
import useStyles from './styles.js'

const Search = () => {
  const [displayOption, setDisplayOption] = useState('')
  const closeDisplayOption = useRef(null)
  const num1 = useRef(null)
  const num2 = useRef(null)
  const num3 = useRef(null)
  const num4 = useRef(null)
  const num5 = useRef(null)

  const classes = useStyles()

  const sortBy = (option) => {
    setDisplayOption(option)
    closeDisplayOption.current.focus()
  }

  const pageIndex = idx => {
    resetIndex()
    switch(idx) {
      case 1:
        num1.current.className = classes.highlightNum
        break
      case 2:
        num2.current.className = classes.highlightNum
        break
      case 3:
        num3.current.className = classes.highlightNum
        break
      case 4:
        num4.current.className = classes.highlightNum
        break
      case 5:
        num5.current.className = classes.highlightNum
        break
      default:
        num1.current.className = classes.highlightNum
    }
  }

  const resetIndex = () => {
    num1.current.className = ''
    num2.current.className = ''
    num3.current.className = ''
    num4.current.className = ''
    num5.current.className = ''
  }

  return (
    <div className={classes.page}>
      <div className={classes.content}>
        <p className={classes.link}>About / Search</p>
        <h1 className={classes.heading}>Search Projects</h1>
        <input className={classes.search} placeholder='Search the Civic Tech Index'/>
        <div className={classes.refineResultsContainer}>
          <h1 className={classes.refineResultsHeading}>Refine Results</h1>
          <div className={classes.refineResultsSection}>
            <div className={classes.refineResultsSubHeadingContainer}>
              <h3 className={classes.refineResultsSubHeading}>Programming Language(s) Used:</h3>
              <img className={classes.refineResultsArrow} src='/images/arrow.png' alt='drop down arrow' />
            </div>
            <div className={classes.refineResultsOptionsContainer}>
              <input className={classes.refineResultsSearch} placeholder='Search'/>
              <input className={classes.refineResultsOption} type='checkbox' value='language1'/>
              <label>Langauge 1</label>
              <input className={classes.refineResultsOption} type='checkbox' value='language2'/>
              <label>Langauge 2</label>
              <input className={classes.refineResultsOption} type='checkbox' value='language3'/>
              <label>Langauge 3</label>
              <p className={classes.viewMore}>View More Languages</p>
            </div>
          </div>
          <div className={classes.refineResultsSection}>
            <div className={classes.refineResultsSubHeadingContainer}>
              <h3 className={classes.refineResultsSubHeading}>Project Language:</h3>
              <img className={classes.refineResultsArrow} src='/images/arrow.png' alt='drop down arrow' />
            </div>
            <div className={classes.refineResultsOptionsContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='English'/>
              <label>English</label>
              <input className={classes.refineResultsOption} type='checkbox' value='Spanish'/>
              <label>Español (Spanish)</label>
              <input className={classes.refineResultsOption} type='checkbox' value='French'/>
              <label>Français (French)</label>
              <input className={classes.refineResultsOption} type='checkbox' value='Simplified-Chinese'/>
              <label>体中文 (Simplified Chinese)</label>
              <input className={classes.refineResultsOption} type='checkbox' value='Japanese'/>
              <label>日本語 (Japanese)</label>
              <input className={classes.refineResultsOption} type='checkbox' value='Portugal'/>
              <label>Português (Portugal)</label>
              <input className={classes.refineResultsOption} type='checkbox' value='Russian'/>
              <label>Pусский (Russian)</label>
              <p className={classes.viewMore}>View More Languages</p>
            </div>
          </div>
          <div className={classes.refineResultsSection}>
            <div className={classes.refineResultsSubHeadingContainer}>
              <h3 className={classes.refineResultsSubHeading}>Affiliation:</h3>
              <img className={classes.refineResultsArrow} src='/images/arrow.png' alt='drop down arrow' />
            </div>
            <div className={classes.refineResultsOptionsContainer}>
              <input className={classes.refineResultsSearch} placeholder='Search'/>
              <input className={classes.refineResultsOption} type='checkbox' value='Unaffiliated'/>
              <label>Unaffiliated</label>
              <input className={classes.refineResultsOption} type='checkbox' value='Code for All'/>
              <label>Code for All</label>
              <input className={classes.refineResultsOption} type='checkbox' value='Code for America'/>
              <label>Code for America </label>
              <input className={classes.refineResultsOption} type='checkbox' value='Open Oakland'/>
              <label>Open Oakland</label>
              <input className={classes.refineResultsOption} type='checkbox' value='Hack for LA'/>
              <label>Hack for LA</label>
              <input className={classes.refineResultsOption} type='checkbox' value='Code for Canada'/>
              <label>Code for Canada</label>
              <input className={classes.refineResultsOption} type='checkbox' value='Code for Japan'/>
              <label>Code for Japan</label>
              <input className={classes.refineResultsOption} type='checkbox' value='Open Democracy Labs'/>
              <label>Open Democracy Labs</label>
              <input className={classes.refineResultsOption} type='checkbox' value='Yale Openlab'/>
              <label>Yale Openlab</label>
              <p className={classes.viewMore}>View More Affiliations</p>
            </div>
          </div>
          <div className={classes.refineResultsSection}>
            <div className={classes.refineResultsSubHeadingContainer}>
              <h3 className={classes.refineResultsSubHeading}>Open Issues Count:</h3>
              <img className={classes.refineResultsArrow} src='/images/arrow.png' alt='drop down arrow' />
            </div>
            <div className={classes.refineResultsOptionsContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='0-10'/>
              <label>0 - 10</label>
              <input className={classes.refineResultsOption} type='checkbox' value='10-20'/>
              <label>10 - 20</label>
              <input className={classes.refineResultsOption} type='checkbox' value='20-50'/>
              <label>20 - 50</label>
              <input className={classes.refineResultsOption} type='checkbox' value='50+'/>
              <label>50 +</label>
            </div>
          </div>
          <div className={classes.refineResultsSection}>
            <div className={classes.refineResultsSubHeadingContainer}>
              <h3 className={classes.refineResultsSubHeading}>Last Updated:</h3>
              <img className={classes.refineResultsArrow} src='/images/arrow.png' alt='drop down arrow' />
            </div>
            <div className={classes.refineResultsOptionsContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='last 24 hours'/>
              <label>Within the last 24 hours</label>
              <input className={classes.refineResultsOption} type='checkbox' value='last week'/>
              <label>Within the last week</label>
              <input className={classes.refineResultsOption} type='checkbox' value='last 30 days'/>
              <label>Within the last 30 days</label>
              <input className={classes.refineResultsOption} type='checkbox' value='1-6 months'/>
              <label>1 - 6 months</label>
              <input className={classes.refineResultsOption} type='checkbox' value='6-12 months'/>
              <label>6 months - 12 months</label>
              <input className={classes.refineResultsOption} type='checkbox' value='year+'/>
              <label>More than a year ago</label>
            </div>
          </div>
          <div className={classes.refineResultsSection}>
            <div className={classes.refineResultsSubHeadingContainer}>
              <h3 className={classes.refineResultsSubHeading}>Created In:</h3>
              <img className={classes.refineResultsArrow} src='/images/arrow.png' alt='drop down arrow' />
            </div>
            <div className={classes.refineResultsOptionsContainer}>
              <input className={classes.refineResultsOption} type='checkbox' value='North America'/>
              <label>North America</label>
              <input className={classes.refineResultsOption} type='checkbox' value='South America'/>
              <label>South America</label>
              <input className={classes.refineResultsOption} type='checkbox' value='Africa'/>
              <label>Africa</label>
              <input className={classes.refineResultsOption} type='checkbox' value='Asia'/>
              <label>Asia</label>
              <input className={classes.refineResultsOption} type='checkbox' value='Europe'/>
              <label>Europe</label>
              <input className={classes.refineResultsOption} type='checkbox' value='Australia'/>
              <label>Australia</label>
            </div>
          </div>
        </div>
        <p className={classes.results}>Showing X of X Results matching:</p>
        <p className={classes.resultsFor}>"Hack for LA"</p>
        <div className={classes.selectContainer}>
          <div className={classes.select} tabIndex='0'>
            <p className={classes.centerText}>Refine Results</p>
            <img className={classes.arrow} src='/images/arrow.png' alt='drop down arrow'/>
          </div>
          <span ref={closeDisplayOption} tabIndex='0'></span>
          <div className={classes.select} tabIndex='0'>
            {
              displayOption ?
              <>
                <p className={classes.cornerText}>Sort By:</p>
                <p className={classes.displayOption}>{displayOption}</p>
              </>
              :
              <>
                <p className={classes.centerText}>Sort By:</p>
              </>
            }
            <div className={classes.optionsContainer}>
              <div onClick={() => sortBy('Best Match')} className={classes.option}><p className={classes.optionText}>Best Match</p></div>
              <div onClick={() => sortBy('Last Updated')} className={classes.option}><p className={classes.optionText}>Last Updated</p></div>
              <div onClick={() => sortBy('Stargazer Count')} className={classes.option}><p className={classes.optionText}>Stargazer Count</p></div>
              <div onClick={() => sortBy('New Issues Count')} className={classes.option}><p className={classes.optionText}>New Issues Count</p></div>
              <div onClick={() => sortBy('Good First Issue(s)')} className={classes.option}><p className={classes.optionText}>Good First Issue(s)</p></div>
            </div>
            <img className={classes.arrow} src='/images/arrow.png' alt='drop down arrow'/>
          </div>
        </div>
        <div className={classes.projectContainer}>
          <p className={classes.project}>Project Result</p>
        </div>
        <div className={classes.projectContainer}>
          <p className={classes.project}>Project Result</p>
        </div>
        <div className={classes.projectContainer}>
          <p className={classes.project}>Project Result</p>
        </div>
        <div className={classes.projectContainer}>
          <p className={classes.project}>Project Result</p>
        </div>
        <div className={classes.indexContainer}>
          <img className={`${classes.indexArrow} ${classes.leftArrow}`} src='/images/arrow.png' alt='left arrow to go back one page for displaying projects'/>
          <p className={classes.highlightNum} ref={num1} onClick={() => pageIndex(1)}>1</p>
          <p ref={num2} onClick={() => pageIndex(2)}>2</p>
          <p ref={num3} onClick={() => pageIndex(3)}>3</p>
          <p ref={num4} onClick={() => pageIndex(4)}>4</p>
          <p ref={num5} onClick={() => pageIndex(5)}>5</p>
          <img className={`${classes.indexArrow} ${classes.rightArrow}`} src='/images/arrow.png' alt='left arrow to go back one page for displaying projects'/>
        </div>
      </div>
    </div>
  )
}

export default Search