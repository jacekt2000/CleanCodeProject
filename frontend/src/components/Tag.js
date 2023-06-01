import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Tag() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/tags/')
      .then(response => {
        const limitedTags = response.data.slice(0, 13);
        setTags(limitedTags)
        //   setTags(response.data); 
      })
      .catch(error => {
        console.error('Błąd połączenia z endpointem', error);
      });
  }, []);

  return (
    <div>

      {tags.map(tag => (
        <div className='category'> {tag.tag}</div>
      ))}

    </div>
  );
}

export default Tag;