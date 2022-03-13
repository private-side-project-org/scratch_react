import React from 'react';
import PhotoOne from './animationPhoto/PhotoOne';
import PhotoTwo from './animationPhoto/PhotoTwo';
import { useQuery } from 'react-query';

const instaEndPoint = process.env;
console.log(instaEndPoint);

const fetchData = async () => {
  return await fetch(instaEndPoint).then((res) => res.json());
};

const Photo = () => {
  const { data } = useQuery('planet', fetchData);
  const photos = data?.graphql.user.edge_owner_to_timeline_media.edges;
  const displayPhotos = photos?.map((photoData, index) => {
    const srcString = photoData?.node.thumbnail_src;
    return <img src={srcString} alt={`photo_${index}`} />;
  });
  return (
    <div className="photo-container">
      <div className="insta-image">{displayPhotos}</div>
      <PhotoOne />
      <PhotoTwo />
    </div>
  );
};

export default Photo;
