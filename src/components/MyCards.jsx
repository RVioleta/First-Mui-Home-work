import {Card, CardMedia, CardContent, Typography, Grid} from "@mui/material";
import espresso from "../images/espresso.jpg"
import americano from "../images/amerikano.jpg"
import mocha from "../images/mocha.png"
import blackCoffee from "../images/blackCoffe.png"
import irishCoffee from "../images/irishCoffee.png"
import frappe from "../images/frappe.png"
import cappuccino from "../images/cappuccino.png"
import cafeAuLait from "../images/latte.png"
const MyCards = () => {
return (
    <Grid container spacing={5}>       
       <Grid item xs={12} sm={6} md={4} lg={4} xl={3}> 
             { <Card>
                <CardMedia 
                component="img"
                height="400"
                width="400"
                src={espresso}
                >                    
                </CardMedia>
                <CardContent> 
                    <Typography variant="h4">
                    Espresso
                    </Typography>
                </CardContent>

                <CardContent>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit dolor sit amet consectetur.
                    </Typography>
                </CardContent>
            </Card> }
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4} xl={3}> 
             { <Card>
                <CardMedia 
                component="img"
                height="400"
                width="400"
                src={blackCoffee}
                >                    
                </CardMedia>
                <CardContent> 
                    <Typography variant="h4">
                    Black Coffee
                    </Typography>
                </CardContent>

                <CardContent>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit dolor sit amet consectetur.
                    </Typography>
                </CardContent>
            </Card> }
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4} xl={3}> 
             { <Card>
                <CardMedia 
                component="img"
                height="400"
                width="400"
                src={mocha}>                    
                </CardMedia>
                <CardContent> 
                    <Typography variant="h4">
                    Mocha
                    </Typography>
                </CardContent>

                <CardContent>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit dolor sit amet consectetur.
                    </Typography>
                </CardContent>
            </Card> }
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4} xl={3}> 
             { <Card>
                <CardMedia 
                component="img"
                height="400"
                width="400"
                src={americano}
                >                    
                </CardMedia>
                <CardContent> 
                    <Typography variant="h4">
                    Americano
                    </Typography>
                </CardContent>

                <CardContent>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit dolor sit amet consectetur.
                    </Typography>
                </CardContent>
            </Card> }
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3}> 
            { <Card>
                <CardMedia 
                component="img"
                height="400"
                width="400"
                src={irishCoffee}
                >                    
                </CardMedia>
                <CardContent>
                    <Typography variant="h4">
                    Irish Coffee
                    </Typography>
                </CardContent>

                <CardContent>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit dolor sit amet consectetur.
                    </Typography>
                </CardContent>
            </Card> }
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4} xl={3}> 
            { <Card>
                <CardMedia 
                component="img"
                height="400"
                width="400"
                src={frappe}
                >                    
                </CardMedia>
                <CardContent>
                    <Typography variant="h4">
                    Frappe
                    </Typography>
                </CardContent>

                <CardContent>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit dolor sit amet consectetur.
                    </Typography>
                </CardContent>
            </Card> }
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4} xl={3}> 
            { <Card>
                <CardMedia 
                component="img"
                height="400"
                width="400"
                src={cappuccino}
                >                    
                </CardMedia>
                <CardContent>
                    <Typography variant="h4">
                    Cappuccino
                    </Typography>
                </CardContent>

                <CardContent>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit dolor sit amet consectetur.
                    </Typography>
                </CardContent>
            </Card> }
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3}> 
            { <Card >
                <CardMedia 
                component="img"
                height="400"
                width="400"
                src={cafeAuLait}
                >                    
                </CardMedia>
                <CardContent>
                    <Typography variant="h4">
                   Latte
                    </Typography>
                </CardContent>

                <CardContent>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit dolor sit amet consectetur.
                    </Typography>
                </CardContent>
            </Card> }
        </Grid>
        </Grid>
    
)
};

export default MyCards;