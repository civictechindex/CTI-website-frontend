import React, { useState } from "react";
import { Dropdown } from "../../components/Dropdown";
import { ContributorThumbnail } from "../../components/ContributorThumbnail";
import { useStyles } from "./styles.js";
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export const AffiliatedOrganizations = ({ organizations }) => {
  const classes = useStyles();


  const parentOrg =organizations['Code for All'].filter(item => item);


  const getParentData = () => {
    const parentdata = [];
    parentOrg.forEach((data)=>{

      if (data.depth === 3){
        data['childNodes'] = [];
        data['isOpen'] = false;
        parentdata.push(data)


      }
      if (data.depth === 4){
        const obj =  parentdata.find((d)=> data.path.includes(d.path))
        obj.childNodes.push(data);
      }

    })
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



  if (currentThumbnails) {
    return (
      <Grid dropdownlength={currentThumbnails.length}>
        {currentThumbnails.map((org, i) => {
          const childNode = org.isOpen ?  org.childNodes : org.childNodes.slice(0,8)
          return (
            <Dropdown organization={org} key={i} dropdownLength={getChildrenLength(org)} isOpen={parentOrg.length < 3 ? true : false}>
              {childNode.length > 0 ? (
                <div className={classes.affiliatedThumbnailsWrapper}>
                  {childNode.map((child, idx) => (
                    <Typography className={classes.afflnThumbnails} key={idx}>
                      <ContributorThumbnail organization={child} />
                    </Typography>
                  ))}
                </div>
              ) : null}

              <Button data-cy="viewBtnClick" id="viewAllButton" className={classes.button}  onClick={() => {
                const data = [...currentThumbnails]
                data[i].isOpen = data[i].isOpen ? false : true;
                setCurrentThumbnails(data)
              }}> View All </Button>

            </Dropdown>
          );

        })}
      </Grid>
    );

  }  else {
    return null;
  }
}
