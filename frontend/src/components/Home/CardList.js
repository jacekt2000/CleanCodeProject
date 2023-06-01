import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import ShowPosts from '../Post/ShowPosts';
import axios from 'axios';


const URL = "http://localhost:8000";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  // function fetchPosts() {
  //   dat axios.get(URL, )
  // }


  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export default function CardList() {
  const windowSize = useWindowSize();
  const [itemData, setItemData] = useState([""]);

  const Data = [
    {
      "id": 1,
      "title": "tytuł",
      "description": "opis",
      "create_date": "2023-06-01",
      "image": "/images/githubFlow2.jpeg",
      "like_count": 3,
      "dislike_count": 3,
      "user": 1,
      "tag": 1
    },
    {
      "id": 2,
      "title": "kerimt król",
      "description": "desc2ads",
      "create_date": "2023-05-16",
      "image": "/images/kermit-gd8dd1b747_640.jpg",
      "like_count": 0,
      "dislike_count": 0,
      "user": 1,
      "tag": 2
    },
    {
      "id": 3,
      "title": "post3",
      "description": "desc3",
      "create_date": "2023-05-16",
      "image": "/images/trout-g3411df3b3_640.jpg",
      "like_count": 0,
      "dislike_count": 0,
      "user": null,
      "tag": 2
    },
    {
      "id": 4,
      "title": "post4",
      "description": "desc4",
      "create_date": "2023-05-16",
      "image": "/images/everest-g61cb06e6c_640.png",
      "like_count": 0,
      "dislike_count": 0,
      "user": 1,
      "tag": 1
    },
    {
      "id": 5,
      "title": "post5",
      "description": "desc5",
      "create_date": "2023-05-11",
      "image": "/images/goku-g75ed774fb_640.png",
      "like_count": 0,
      "dislike_count": 0,
      "user": null,
      "tag": 1
    }
  ];


  useEffect(() => {
    axios.get(URL + "/api/posts/")
      .then((response) => {
        // handle success
        console.log(response.data[0]);
        setItemData(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
  }, []);

  return (
    <Box sx={{ width: windowSize.width - 20, height: 450, }}>
      <ImageList variant="masonry" cols={7} gap={8} >

        {itemData.map((item) => (
          <ImageListItem key={item.id + item.title}>
            <img
              src={URL + item.image}
              // style={{width: 200}}
              loading="lazy"
            />
            <ImageListItemBar position="bottom" title={item.title}
              actionIcon={<ThumbUpIcon sx={{ position: "absolute", right: 30, top: 5, fontSize: 15 }} />}
              subtitle={item.like_count}
              sx={{
                "& .MuiImageListItemBar-title": { position: "absolute", left: 10, top: 0, fontSize: "1em", },
                "& .MuiImageListItemBar-subtitle": { position: "absolute", right: 10, top: 7, }
              }} />

          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

