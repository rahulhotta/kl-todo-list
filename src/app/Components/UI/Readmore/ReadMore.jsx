import React, {useState} from 'react'
import './ReadMore.css'
function ReadMore({text, maxLength}) {
    const [isTruncated, setIsTruncated] = useState(true);
    const toggleTruncate = (event) => {
        event. stopPropagation()
        setIsTruncated((prev) => !prev)
    }

    const truncatedText = isTruncated ? text.slice(0, maxLength) : text;
  return (
    <div>
        <span className='truncated_text'>{truncatedText}</span>
      {text.length > maxLength && (
        <span onClick={toggleTruncate} className='readmore__dots'>
          ...
        </span>
      )}
    </div>
  )
}

export default ReadMore