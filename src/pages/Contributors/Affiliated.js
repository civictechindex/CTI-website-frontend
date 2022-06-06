/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Dropdown } from '../../components/Dropdown';
import Grid from '@material-ui/core/Grid';
import { AffiliatedOrganizations } from './AffiliatedOrganizations';
import { makeStyles } from '@material-ui/core/styles';
import spectrum from '../../theme-spectrum';

// eslint-disable-next-line max-lines-per-function
const useStyles = makeStyles((theme) => ({
  titleStyle: {
    color: theme.palette.secondary.dark,
    fontSize: '28px',
    textAlign: 'center',
    padding: '32px 0',
  },
  dropDownGrid: {
    backgroundColor: spectrum.white,
    padding: '16px 32px 32px',
    [theme.breakpoints.down('md')]: {
      padding: '16px 16px',
    },
  },
}));
/* eslint complexity: [0, 0]*/
export const Affiliated = ({
  affiliatedCount,
  classes,
  expandedOrgs,
  setExpandedOrgs,
  inputValue,
  onOrgClick,
  organizations,
  organizationData,
  filtersActive,
  totalAffiliatedCount,
  showIndexContrib,
}) => {
  const classesLocal = useStyles();
  const [orgTree, setOrgTree] = useState([]);

  const findGrandParent = (org, orgTree) => {
    let grandparentObj = orgTree.find((d) => {
      return org.path.includes(d.path) && d.depth === 2;
    });
    if (!grandparentObj) {
      // find grandparent of depth 2 and add to orgTree
      grandparentObj = organizationData.find(
        (d) => org.path.includes(d.path) && d.depth === 2
      );
      grandparentObj['childNodes'] = [];
      orgTree.push(grandparentObj);
    }
    return grandparentObj;
  };

  const buildOrgTree = () => {
    const orgTree = [];
    let grandparentObj;
    let parentObj;

    organizations.forEach((org) => {
      switch (org.depth) {
        case 2:
          org['childNodes'] = [];
          orgTree.push(org);
          break;
        case 3:
          grandparentObj = findGrandParent(org, orgTree, organizationData);
          org['childNodes'] = [];
          grandparentObj.childNodes.push(org);
          break;
        case 4:
          grandparentObj = findGrandParent(org, orgTree, organizationData);

          // loop through grandparent to find parent
          parentObj = grandparentObj['childNodes'].find((d) =>
            org.path.includes(d.path)
          );

          if (!parentObj) {
            // find parent of depth 3 and assign as child of grandparent
            parentObj = organizationData.find(
              (d) => org.path.includes(d.path) && d.depth === 3
            );
            parentObj['childNodes'] = [];
            grandparentObj.childNodes.push(parentObj);
          }

          if (organizations.length === 1) {
            const expanded = [];
            expanded.push(parentObj.id.toString());
            setExpandedOrgs(expanded);
          }

          parentObj.childNodes.push(org);
          break;
        default:
      }
    });
    return orgTree;
  };

  useEffect(() => {
    setOrgTree(buildOrgTree());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [organizations]);

  return (
    <>
      <Typography variant='h4' className={classesLocal.titleStyle}>
        Affiliated Organizations
        <span style={{ paddingLeft: '9px' }}>
          {filtersActive
            ? `(${affiliatedCount}/${totalAffiliatedCount})`
            : `(${totalAffiliatedCount})`}
        </span>
      </Typography>
      {orgTree.map((org, i) => (
        <div key={org.path}>
          <Dropdown
            checkboxValue={showIndexContrib}
            dropdownLength={org.childNodes.reduce((count, item) => {
              const nodeCount =
                item.childNodes.length === 0 ? 1 : item.childNodes.length;
              return count + nodeCount;
            }, 0)}
            filtersActive={filtersActive}
            isOpen={filtersActive || expandedOrgs.includes(org.id.toString())}
            key={`affiliatedThumbnailsWrapper_${i}`}
            onClick={onOrgClick}
            organization={org}
          >
            {!organizations ? (
              !inputValue ? (
                <h3 className={classes.loaders}>Loading...</h3>
              ) : (
                <h3 className={classes.loaders}>No Results</h3>
              )
            ) : (
              <Grid item xs={12} className={classesLocal.dropDownGrid}>
                <AffiliatedOrganizations
                  expandedOrgs={expandedOrgs}
                  filtersActive={filtersActive}
                  inputValue={inputValue}
                  onOrgClick={onOrgClick}
                  orgTree={org.childNodes}
                  setOrgTree={setOrgTree}
                  showIndexContrib={showIndexContrib}
                />
              </Grid>
            )}
          </Dropdown>
        </div>
      ))}
    </>
  );
};

export default Affiliated;
