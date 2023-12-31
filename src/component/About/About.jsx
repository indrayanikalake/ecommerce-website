import { Card, CardMedia, Typography,Grid } from '@material-ui/core';
import React from 'react';
import { story, indrayani } from '../../assets';
import useStyles from './styles';

const About = () => {
    const classes = useStyles();
  return (
    <>
    <Typography variant='h1' className={classes.aboutTitle}>About</Typography>
    <div className={classes.toolbar}/>
    <div className={classes.aboutContent}>
    <Grid container spacing={4} xs={12} sm={12} md={12} lg={12}>
    <Card className={classes.root}>
        <CardMedia className={classes.media} image={story} alt='about mission'/>
    </Card>
    <Typography className={classes.story} variant='body6'>Our Story
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.

Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.

Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</Typography>
</Grid>

    </div>
    <div className={classes.aboutContent}>
    <Grid container spacing={4} xs={12} sm={12} md={12} lg={12}>
    <Typography className={classes.mission} variant='body6'>Our Story

Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.

Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</Typography>
    <Card className={classes.rooot}>
        <CardMedia className={classes.media}  image={indrayani} alt='about mission'/>
    </Card>
    
</Grid>
</div>
    </>
  )
}

export default About
