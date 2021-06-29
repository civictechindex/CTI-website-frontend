/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */

import React, { useState } from "react";
import { Dropdown } from "../../components/Dropdown";
import { ContributorThumbnail } from "../../components/ContributorThumbnail";
import { useStyle } from "./styles.js";
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";

export const AffiliatedOrganizations = ({ organizations , inputValue, data, checkboxValue }) => {

  const classes = useStyle();
  const parentfilterData = data;
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
      <Grid dropdownlength={currentThumbnails.length}>
        {currentThumbnails.map((org, i) => {
          const childNode = org.isOpen ?  org.childNodes : org.childNodes.slice(0,8)

          return (
            <Dropdown organization={org} key={`affiliatedThumbnailsWrapper_${i}`} dropdownLength={getChildrenLength(org)} isOpen={org.childNodes.length > 0 ? true : false}>
              {childNode.length > 0 ? (
                <Box className={classes.affiliatedThumbnailsWrapper}>
                  {childNode.map((child, idx) => {
                    return <Typography className={classes.afflnThumbnails} key={`affiliatedThumbnail_child_${i}_${idx}`}>
                      <ContributorThumbnail organization={child} />
                    </Typography>
                  })}
                </Box>
              ) : null}


              {org.childNodes.length > 8 ? (
                <Button data-cy="viewBtnClick" id="viewAllButton" className={classes.button}  onClick={() => {
                  const data = [...currentThumbnails]
                  data[i].isOpen = data[i].isOpen ? false : true;
                  setCurrentThumbnails(data)
                }}> View All </Button>
              ) : null}
            </Dropdown>
          );

        })}
      </Grid>
    );

  }
  else if (currentThumbnails && inputValue !== null) {

    return (
      <Grid dropdownLength={currentThumbnails.length}>
        {currentThumbnails.map((searchDataItems, i) => {

          return (<div className={classes.affiliatedThumbnailsWrapper} key={`affiliatedThumbnailsWrapper_${i}`}>
            <Typography className={classes.afflnThumbnails} key={i}>
              <ContributorThumbnail organization={searchDataItems} />
            </Typography>
          </div>
          );
        })}
      </Grid>
    );
  }
}

