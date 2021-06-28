import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

export const DropdownThumbnail = ({ organizations }) => {
  const styles  = makeStyles(theme => ({
    thumbnailsContainer: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    thumbnails: {
      display: 'flex',
      textAlign: 'center',
      backgroundColor: 'white',
      borderRadius: '2px',
      margin: '1rem 0.5rem',
      boxShadow: '0.1rem 0.1rem 10px #e0dede ',
      maxWidth: '8rem',
    },
    image: {
      width: '4rem',
      height: '4rem',
      margin: '.5rem',
    },
    imagePlaceholderText: {
      color: theme.palette.secondary.dark,
      textAlign: 'center',
      padding: '.5rem',
    },
  }));
  return (
    <div style={styles.thumbnailsContainer}>
      {organizations ? organizations.map((child, indexSubchild) => {
        return (
          <div key={indexSubchild} style={styles.thumbnails}>
            {
              // eslint-disable-next-line no-console
              child.image_url ? <a href={child.links[0].url}><img src={child.image_url} style={styles.image} onError={() => console.log('error')} alt={child.name} loading='lazy'/></a> :
                <a href={child.links[0].url}><p style={styles.imagePlaceholderText}>{child.name}</p></a>
            }
          </div>
        )
      }) : null}
    </div>)
}
