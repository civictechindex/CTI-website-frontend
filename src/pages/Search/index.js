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

  const selectOption = (option) => {
    setDisplayOption(option)
    closeDisplayOption.current.focus()
  }

  const changeIndex = idx => {
    resetNums()
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

  const resetNums = () => {
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
        <input className={classes.search} placeholder='Search the Civic Tech Index'></input>
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
              <div onClick={() => selectOption('Best Match')} className={classes.option}><p className={classes.optionText}>Best Match</p></div>
              <div onClick={() => selectOption('Last Updated')} className={classes.option}><p className={classes.optionText}>Last Updated</p></div>
              <div onClick={() => selectOption('Stargazer Count')} className={classes.option}><p className={classes.optionText}>Stargazer Count</p></div>
              <div onClick={() => selectOption('New Issues Count')} className={classes.option}><p className={classes.optionText}>New Issues Count</p></div>
              <div onClick={() => selectOption('Good First Issue(s)')} className={classes.option}><p className={classes.optionText}>Good First Issue(s)</p></div>
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
          <p className={classes.highlightNum} ref={num1} onClick={() => changeIndex(1)}>1</p>
          <p ref={num2} onClick={() => changeIndex(2)}>2</p>
          <p ref={num3} onClick={() => changeIndex(3)}>3</p>
          <p ref={num4} onClick={() => changeIndex(4)}>4</p>
          <p ref={num5} onClick={() => changeIndex(5)}>5</p>
          <img className={`${classes.indexArrow} ${classes.rightArrow}`} src='/images/arrow.png' alt='left arrow to go back one page for displaying projects'/>
        </div>
      </div>
    </div>
  )
}

export default Search