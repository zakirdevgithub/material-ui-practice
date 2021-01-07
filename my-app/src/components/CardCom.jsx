import React from "react";
import {Card,CardHeader,CardContent,CardActions,CardMedia, CardActionArea,
     Typography, Button, Container, Grid, Box, Avatar, IconButton} from "@material-ui/core";

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CardCom=()=>{
    return(
        <React.Fragment>
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={3}>
                        <Card component={Box} p={2}>
                            <CardActionArea>
                            <CardHeader 
                            avatar={<Avatar>ZH</Avatar>}
                            title="Zakir Hossain" 
                            subheader="posted on new year"
                            action={
                                <IconButton>
                                <ShoppingCartIcon/>
                                </IconButton>
                            }
                            />
                            <CardMedia
                            component="img"
                            image="https://1.bp.blogspot.com/-6CYCnVtD51A/XzyTDF0AHwI/AAAAAAAAAMk/w8EEJD1D-8s0Gx4UqgGVTKQYE9h2Gdi3QCLcBGAsYHQ/s640/mountain%2B%25282%2529.jpg"
                            />
                            <CardContent>
                                <Typography variant="body1" color="initial">
                                Hello programmers. How are you all. I think all are very well
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Button variant="contained" color="primary">
                              Read More
                            </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item lg={3}>
                        <Card component={Box} p={2}>
                            <CardActionArea>
                            <CardHeader 
                            avatar={<Avatar>ZH</Avatar>}
                            title="Zakir Hossain" 
                            subheader="posted on new year"
                            action={
                                <IconButton>
                                <ShoppingCartIcon/>
                                </IconButton>
                            }
                            />
                            <CardMedia
                            component="img"
                            image="https://1.bp.blogspot.com/-6CYCnVtD51A/XzyTDF0AHwI/AAAAAAAAAMk/w8EEJD1D-8s0Gx4UqgGVTKQYE9h2Gdi3QCLcBGAsYHQ/s640/mountain%2B%25282%2529.jpg"
                            />
                            <CardContent>
                                <Typography variant="body1" color="initial">
                                Hello programmers. How are you all. I think all are very well
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Button variant="contained" color="primary">
                              Read More
                            </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item lg={3}>
                        <Card component={Box} p={2}>
                            <CardActionArea>
                            <CardHeader 
                            avatar={<Avatar>ZH</Avatar>}
                            title="Zakir Hossain" 
                            subheader="posted on new year"
                            action={
                                <IconButton>
                                <ShoppingCartIcon/>
                                </IconButton>
                            }
                            />
                            <CardMedia
                            component="img"
                            image="https://1.bp.blogspot.com/-6CYCnVtD51A/XzyTDF0AHwI/AAAAAAAAAMk/w8EEJD1D-8s0Gx4UqgGVTKQYE9h2Gdi3QCLcBGAsYHQ/s640/mountain%2B%25282%2529.jpg"
                            />
                            <CardContent>
                                <Typography variant="body1" color="initial">
                                Hello programmers. How are you all. I think all are very well
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Button variant="contained" color="primary">
                              Read More
                            </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item lg={3}>
                        <Card component={Box} p={2}>
                            <CardActionArea>
                            <CardHeader 
                            avatar={<Avatar>ZH</Avatar>}
                            title="Zakir Hossain" 
                            subheader="posted on new year"
                            action={
                                <IconButton>
                                <ShoppingCartIcon/>
                                </IconButton>
                            }
                            />
                            <CardMedia
                            component="img"
                            image="https://1.bp.blogspot.com/-6CYCnVtD51A/XzyTDF0AHwI/AAAAAAAAAMk/w8EEJD1D-8s0Gx4UqgGVTKQYE9h2Gdi3QCLcBGAsYHQ/s640/mountain%2B%25282%2529.jpg"
                            />
                            <CardContent>
                                <Typography variant="body1" color="initial">
                                Hello programmers. How are you all. I think all are very well
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Button variant="contained" color="primary">
                              Read More
                            </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default CardCom;