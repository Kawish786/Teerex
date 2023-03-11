import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Product.css'


function Product(props) {
  return (
    <>
        <div className='card'>
          {
            props.data.map((user)=>(
              <Card className='insidecard' sx={{ maxWidth: 350 }} key={user.id}>
      <CardActionArea style={{backgroundColor:'#E9DF99'}}>
      <CardMedia
        component="img"
        height="140"
        image={user.imageURL}
        alt="green iguana"
        className='image'
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          {user.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
          Rs:{user.price}
      </Typography>
      </CardContent>
      </CardActionArea>
    <CardActions style={{backgroundColor:'#D1BF67'}}>
      <Button className='btn' size="small"  sx={{ color: 'white' }}>
        Add to Cart
      </Button>
    </CardActions>
  </Card>
          ))
            }           
        </div>
    </>
  )
}

export default Product;