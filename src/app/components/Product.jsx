import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CartContext } from "../context/cart.context";
import {FaShoppingCart} from 'react-icons/fa'

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
    '&:hover':{
      color:'black',
     }
  }
}

 const Product = ({product}) => {
  const {addItemToCart} = React.useContext(CartContext) 
  return (
    <Card className='product' sx={{...styles.product, maxWidth: '350px', width:'350px', height:'520px', margin:'15px', }}>
      <CardMedia
        sx={{ height: 280, backgroundSize:'contain', backgroundPosition:'center',margin:'5px'}}
        image={product && product.image}
        title={product && product.title}
        alt={product && product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" data-testid="title">
           {product && product.title.substr(0,20)}
        </Typography>
        <Typography data-testid="description">
          {product && product.description.substr(0,90)}
        </Typography>
        <Typography data-testid="price">
           ${product && product.price}
        </Typography>
      </CardContent>
      <CardActions className='flex flex-row'>
        <Button 
          className='product-btn'
          variant='outline'
          sx={{
            ...styles.button
          }}onClick={() => addItemToCart(product)}>           
            Add To Cart
           <FaShoppingCart style={{marginLeft:'10px', }}/>
        </Button>
        
      </CardActions>
    </Card>
  );
}

export default Product