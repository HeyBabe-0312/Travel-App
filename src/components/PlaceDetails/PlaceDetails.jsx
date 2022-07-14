import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles'

const PlaceDetails = ({places,selected,refProp}) => {
  const classes = useStyles();

  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <Card elevation={6}>
      <CardMedia 
        style={{height: 350}}
        image={places.photo ? places.photo.images.large.url: 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={places.name}
      />
       <CardContent>
          <Typography gutterBottom variant="h5">{places.name}</Typography>
          <Box display='flex' justifyContent='space-between'>
            <Rating value={Number(places.rating)} readOnly/>
            <Typography gutterBottom variant="subtitle1">out of {places.num_reviews} reviews</Typography>
          </Box>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant="subtitle1">Price</Typography>
            <Typography gutterBottom variant="subtitle1">{places.price_level?places.price_level:'No Price'}</Typography>
          </Box>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant="subtitle1">Ranking</Typography>
            <Typography gutterBottom variant="subtitle1">{places.ranking?places.ranking:'No Rank'}</Typography>
          </Box>
          {places?.awards?.map((award)=>(
            <Box my={1} display='flex' justifyContent='space-between' alignItems='center'>
              <img src={award.images.small} alt={award.display_name} className={classes.images}/>
              <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
            </Box>
          ))}
          {places?.cuisine?.map(({name})=>(
            <Chip key={name} size="small" label={name} className={classes.chip}></Chip>
          ))}
          {places?.address && (
            <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
              <LocationOnIcon style={{marginRight:"10px"}}/>{places.address}
            </Typography>
          )}
          {places?.phone && (
            <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
              <PhoneIcon style={{marginRight:"10px"}}/>{places.phone}
            </Typography>
          )}
          <CardActions>
              <Button size="small" color="primary" onClick={()=> window.open(places.web_url,'_blank')}>
                Trip Advisor
              </Button>
              <Button size="small" color="primary" onClick={()=> window.open(places.website,'_blank')}>
                Website
              </Button>
          </CardActions>
        </CardContent>

    </Card>
  )
}

export default PlaceDetails