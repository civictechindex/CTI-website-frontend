import React, { useEffect, useState, useRef } from 'react'
import RefineResults from './RefineResults'
import useStyles from './styles.js'

const Search = () => {
  const [displaySortBy, setDisplaySortBy] = useState('')
  const [displayMobileRefineResults, setDisplayMobileRefineResults] = useState(false)

  const searchPage = useRef(null)
  const closeSortBy = useRef(null)
  const resultsPageIndex1 = useRef(null)
  const resultsPageIndex2 = useRef(null)
  const resultsPageIndex3 = useRef(null)
  const resultsPageIndex4 = useRef(null)
  const resultsPageIndex5 = useRef(null)

  const classes = useStyles()

  const sortBy = (option) => {
    setDisplaySortBy(option)
    closeSortBy.current.focus()
  }

  const pageIndex = idx => {
    resetIndex()
    switch(idx) {
      case 1:
        resultsPageIndex1.current.className = classes.highlightNum
        break
      case 2:
        resultsPageIndex2.current.className = classes.highlightNum
        break
      case 3:
        resultsPageIndex3.current.className = classes.highlightNum
        break
      case 4:
        resultsPageIndex4.current.className = classes.highlightNum
        break
      case 5:
        resultsPageIndex5.current.className = classes.highlightNum
        break
      default:
        resultsPageIndex1.current.className = classes.highlightNum
    }
  }

  const resetIndex = () => {
    resultsPageIndex1.current.className = ''
    resultsPageIndex2.current.className = ''
    resultsPageIndex3.current.className = ''
    resultsPageIndex4.current.className = ''
    resultsPageIndex5.current.className = ''
  }

  useEffect(() => {
    if(displayMobileRefineResults) {
      searchPage.current.className = classes.page
    } else {
      searchPage.current.className = `${classes.page} ${classes.display}`
    }
  }, [displayMobileRefineResults])

  return (
    <>
    <div className={`${classes.page} ${classes.display}`} ref={searchPage}>
      <div className={classes.content}>
        <p className={classes.link}>About / Search</p>
        <h1 className={classes.heading}>Search Projects</h1>
        <input className={classes.search} placeholder='Search the Civic Tech Index'/>
        {/* ADD REFINE RESULTS */}
        <div className={classes.projectSection}>
          <div className={classes.textAndSelectContainer}>
            <div className={classes.resultsTextContainer}>
              <p className={classes.results}>Showing X of X Results matching:</p>
              <p className={classes.resultsFor}>"Hack for LA"</p>
            </div>
            <div className={classes.selectContainer}>
              <div onClick={() => setDisplayMobileRefineResults(true)} className={classes.select} tabIndex='0'>
                <p className={classes.centerText}>Refine Results</p>
                <img className={classes.arrow} src='/images/arrow.png' alt='drop down arrow'/>
              </div>
              <span ref={closeSortBy} tabIndex='0'></span>
              <div className={classes.select} tabIndex='0'>
                {
                  displaySortBy ?
                  <>
                    <p className={classes.cornerText}>Sort By:</p>
                    <p className={classes.displaySortBy}>{displaySortBy}</p>
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
            <p className={classes.highlightNum} ref={resultsPageIndex1} onClick={() => pageIndex(1)}>1</p>
            <p ref={resultsPageIndex2} onClick={() => pageIndex(2)}>2</p>
            <p ref={resultsPageIndex3} onClick={() => pageIndex(3)}>3</p>
            <p ref={resultsPageIndex4} onClick={() => pageIndex(4)}>4</p>
            <p ref={resultsPageIndex5} onClick={() => pageIndex(5)}>5</p>
            <img className={`${classes.indexArrow} ${classes.rightArrow}`} src='/images/arrow.png' alt='left arrow to go back one page for displaying projects'/>
          </div>
        </div>
      </div>
    </div>
    <RefineResults
      isDisplay={displayMobileRefineResults}
      setIsDisplay={setDisplayMobileRefineResults}
    />
    </>
  )
}

export default Search