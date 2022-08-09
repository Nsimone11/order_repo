import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    name: 'Small pink drink',
    desc: 'This drink has passion fruit and acai combined with coconut milk and strawberries.',
    price: '$5.00',
    image:<img src="https://trysimplerecipe.com/wp-content/uploads/2021/10/starbucks-pink-drink-Simple-Recipe-500x500.jpg" height="100" width="100"></img>

  },
  {
    name: 'Chocolate cake pops',
    desc: ' Bite-sized chocolate cake mixed with chocolate buttercream, dipped in chocolaty icing and topped with white sprinkles. ',
    price: '$2.00',
    image:<img src="https://mysweetprecision.com/wp-content/uploads/2022/04/starbucks-chocolate-cake-pops-featured-image.jpg" height="100" width="100"></img>
  },
  {
    name: 'Caramel frappacino',
    desc: ' Caramel syrup meets coffee, milk and ice for a rendezvous in the blender, while whipped cream and buttery caramel sauce layer the love on top. To change things up, try it affogato style with a hot espresso shot poured right over the top.',
    price: '$6.00',
    image:<img src="https://globalassets.starbucks.com/assets/410cd92738514641bf497d4b6a18c30f.jpg?impolicy=1by1_wide_topcrop_630" height="100" width="100"></img>
  },
  {
    name: 'Brownie',
    desc: ' Rich chocolate brownie with generous chunks of semisweet chocolate. May be warmed up.',
    price: '$3.00',
    image:<img src="https://topsecretrecipes.com/images/product/starbucks-double-chocolate-brownie-copycat-recipe-new.jpg" height="100" width="100"></img>
  },
  {
    name: 'Starbucks Tumbler',
    desc: ' Purple Iridescent Bling Cup.',
    price: '$12.00',
    image:<img src="https://stories.starbucks.com/uploads/2022/05/Starbucks-Purple-Iridescent-Bling-Cup.jpg" height="100" width="100"></img>
  },
  { name: 'Shipping fee:', desc: '', price: '$2.00' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '12345', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product)=> ( 
          
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            {product.image}
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total:" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $28.00
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}