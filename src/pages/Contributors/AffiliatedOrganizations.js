/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */

import React, { useState } from "react";
import { Dropdown } from "../../components/Dropdown";
import { ContributorThumbnail } from "../../components/ContributorThumbnail";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  thumbnailGrid:{
    paddingBottom:'24px',
  },
  affiliatedThumbnailsWrapper: {
    display:'flex',
    alignContent: 'center',
    alignItems: 'center',
    flexWrap:'wrap',
    justifyContent:'center',
    // width:'928px',
    margin:'auto',
    /*
     * [theme.breakpoints.down('sm')]: {
     *   width: '756px',
     * },
     * [theme.breakpoints.down('xs')]: {
     *   width: '473px',
     * },
     */

  },
  afflnThumbnails: {
    width: '375px',
    height:'64px',
    borderRadius: '6px',
    border: '1px solid #6D6E74',
    margin:'8px',
    [theme.breakpoints.down('md')]: {
      width: '270px',
      height: '60px',
      '& p': {
        fontSize:'20px',
        fontWeight:'500',
      },
    },
    [theme.breakpoints.down('sm')]: {
      width: '220px',
      height:'54px',
      '& p': {
        fontWeight:'500',
        fontSize:'14px',
      },
    },
  },
  button: {
    width: '211px',
    height: '44px',
    margin:'auto',
    borderRadius: '31px',
    border: '1px solid',
    borderColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.dark,
    fontSize: '16px',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: theme.palette.background.default,
    },
    [theme.breakpoints.down('md')]: {
      width: '118px',
      height: '31px',
    },
  },
}));

export const AffiliatedOrganizations = ({ organizations , inputValue, data, checkboxValue,handleClickArrow,arrow,affiliatedSepOpen }) => {

  const classes = useStyles();
  const parentfilterData = data;
  const [isChildThumbnail] = useState(true);
  const parentOrg =organizations['Code for All'].filter(item => item);
  const getParentData = () => {
    const parentdata = [];
    let flag = false;

    parentOrg.forEach((data)=>{
      if (data.depth === 3){
        data['childNodes'] = [];
        data['isOpen'] = false;
        parentdata.push(data);
      }
      if (data.depth === 4){
        let obj =  parentdata.find((d)=> (data.path).includes(d.path));
        if (inputValue !== '')
        {
          const newobj =  parentfilterData.find((d)=> data.path.includes(d.path) && d.depth === 3);
          flag = true;
          const exist = parentdata.find((d)=> newobj.path === d.path);
          if (!exist){
            newobj['childNodes'] = [];
            newobj['isOpen'] = false;
            obj = newobj;
            parentdata.push(obj)
          } else {
            obj = exist;
          }
        }

        if (obj){
          if (checkboxValue && data['cti_contributor']){
            obj.childNodes.push(data);
          }
          if (!checkboxValue){
            obj.childNodes.push(data);
          }

        }
        else
        {
          data['childNodes'] = [];
          data['isOpen'] = false;
          parentdata.push(data);
        }
      }

    })
    if (flag){
      inputValue = '';
    }
    return parentdata
  }


  const [currentThumbnails, setCurrentThumbnails] = useState(getParentData);

  const getChildrenLength = (org) => {
    if (org.childNodes.length > 0) {
      return org.childNodes.length;
    } else {
      return 0;
    }
  };

  if (currentThumbnails &&  inputValue.length === 0) {
    return (
      <Grid className={classes.thumbnailGrid} dropdownlength={currentThumbnails.length}>
        {currentThumbnails.map((org, i) => {
          const childNode = org.isOpen ?  org.childNodes : org.childNodes.slice(0,8)
          return (
            <Dropdown organization={org} key={`affiliatedThumbnailsWrapper_${i}`} dropdownLength={getChildrenLength(org)} isOpen={org.childNodes.length > 0 ? true : false}>
              <Grid container alignItems='center' style={{ margin:'auto' }} >
                {childNode.length > 0 ? (
                  <Grid item container xs={10} className={classes.affiliatedThumbnailsWrapper}>
                    {childNode.map((child, idx) => {
                      return <Grid item className={classes.afflnThumbnails} key={`affiliatedThumbnail_child_${i}_${idx}`}>
                        <ContributorThumbnail
                          organization={child}
                          isChildThumbnail= {isChildThumbnail}
                        ></ContributorThumbnail>
                      </Grid>
                    })}
                  </Grid>
                ) : null}
                {org.childNodes.length > 8 ? (
                  <Grid item container xs={10}  style={{ margin:'auto', paddingTop:'16px' }}>
                    <Button data-cy="viewBtnClick" id="viewAllButton" className={classes.button}  onClick={() => {
                      const data = [...currentThumbnails]
                      data[i].isOpen = data[i].isOpen ? false : true;
                      setCurrentThumbnails(data)
                    }}> View All </Button></Grid>
                ) : null}
              </Grid>
            </Dropdown>
          );

        })}
      </Grid>
    );

  }
  else if (currentThumbnails && inputValue !== null) {
    return (
      <Grid className={classes.thumbnailGrid} dropdownLength={currentThumbnails.length}>
        {currentThumbnails.map((searchDataItems, i) => {

          return (<Grid container className={classes.affiliatedThumbnailsWrapper} key={`affiliatedThumbnailsWrapper_${i}`}>
            <Grid className={classes.afflnThumbnails} key={i}>
              <ContributorThumbnail
                organization={searchDataItems}
                isChildThumbnail={isChildThumbnail} >
              </ContributorThumbnail>
            </Grid>
          </Grid>
          );
        })}
      </Grid>
    );
  }
}

