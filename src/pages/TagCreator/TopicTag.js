import React from 'react'
import Chip from '@material-ui/core/Chip'
import CopyPasteIcon from '../../icons/CopyPasteIcon'

const GeneratedTopicTag = ({ label }) => {
  return (
    <Chip clickable={false} label={label} />
  )
}

const ClickableTopicTag = ({ label }) => {
  const handleDelete = () => {
    // do nothing
  }
  return (
    <Chip clickable={false} label={label} onDelete={handleDelete} />
  )
}

const CopyPasteTopicTag = ({ label }) => {
  const handleDelete = () => {
    // do nothing
  }
  return (
    <Chip clickable={false} label={label} onDelete={handleDelete} deleteIcon={<CopyPasteIcon />} />
  )
}

const TopicTag = (props) => {
  const { label, variant } = props

  let Component = CopyPasteTopicTag;

  if (variant === 'generated') {
    Component = GeneratedTopicTag
  } else if (variant === 'clickable') {
    Component = ClickableTopicTag
  }

  return (
    <Component label={label} />
  )
  // return (
  //   <>
  //     { variant === 'generated' && <GeneratedTopicTag label={label} />}
  //     { variant === 'clickable' && <ClickableTopicTag label={label} />}
  //     { variant === 'copyandpaste' && <CopyPasteTopicTag label={label} />}
  //   </>
  // )
}

export default TopicTag;
