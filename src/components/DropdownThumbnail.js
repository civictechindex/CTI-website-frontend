import React from 'react';
import { names } from './data/orgs.js';

export const DropdownThumbnail = ({ organizations }) => {
    const styles = {
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
            maxWidth: '8rem'
        },
        image: {
            width: '4rem',
            height: '4rem',
            margin: '.5rem',
        },
        imagePlaceholderText: {
            color: '#004364',
            textAlign: 'center',
            padding: '.5rem'
        },
    }

    return (
        <div style={styles.thumbnailsContainer}>
            {organizations ? organizations.map((child, indexSubchild) => {
                let imageUrl;
                let orgUrl = child.links[0].url
                if (child.links) {
                    child.links.forEach(child => {
                        if (child.link_type === 'GitHub') {
                            let orgname = child.url.split('https://github.com/')[1].split('/')[0]
                            let org = orgname.replace(/\s/g, '').trim().toLowerCase();
                            let id = names.get(org);
                            imageUrl = `https://avatars1.githubusercontent.com/u/${id}?s=100&v=4`;
                            orgUrl = child.url;
                        } else {
                            imageUrl = child.image_url
                            orgUrl = child.url
                        }
                    })
                }
                return (
                    <div key={indexSubchild} style={styles.thumbnails}>
                        {
                            child.image_url ? <a href={orgUrl}><img src={imageUrl} style={styles.image} onError={() => console.log('error')} alt={child.name} loading='lazy' /></a> :
                                <a href={orgUrl}><p style={styles.imagePlaceholderText}>{child.name}</p></a>
                        }
                    </div>
                )
            }) : null}
        </div>)
}