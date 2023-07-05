import { ImageList, ImageListItem } from '@mui/material';
import image from '../../assets/image.jpeg';

const itemData = [
  {
    img: image,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
];
 
export const ImageGallery = () => {
  
  return (
    <ImageList sx={{with: '100%', height: 500}} cols={4} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols}>
          <img src={item.img} alt={item.title} loading='lazy'/>
        </ImageListItem>
      ))}
    </ImageList>  
  );
}
