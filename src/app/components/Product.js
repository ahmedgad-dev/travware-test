import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const styles = {
  product:{
    boxShadow: '1px 1px 10px rgba(0,0,0,0.4)',
    position:'relative',
    '&:hover':{}
  },
  button:{
    // width: '120px',
    height: '40px',
    padding: '15px',
    color: 'white',
    backgroundColor: '#2D6F6C',
    borderRadius:'20px',
    transform:'translateX(-2000px)',
    '&:hover':{
      color:'black',
     }
  }
}

 const Product = ({card}) => {
  return (
    <Card className='product' sx={{...styles.product, maxWidth: '350px', width:'350px', height:'460px', margin:'15px', }}>
      <CardMedia
        sx={{ height: 280, backgroundSize:'cover', backgroundPosition:'center'}}
        image={card.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           {card.title}
        </Typography>
        <Typography>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, sint.
        </Typography>
        <Typography>
           {card.price}
        </Typography>
      </CardContent>
      <CardActions className='flex-row'>
        <Button 
          className='product-btn'
          variant='outline'
          sx={{
            ...styles.button
        }}>Add To Cart</Button>
      </CardActions>
    </Card>
  );
}

export default Product