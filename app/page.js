'use client' // when we use event listeners (eq: onClick, onChange)
//when we use hooks like useState(), useReducer(), useEffect()
import React from 'react';
import { AppBar, Toolbar, Typography, Card, CardContent, IconButton, 
CardHeader, Button, Paper, Grid, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ReceiptIcon from '@mui/icons-material/Receipt';
import RefreshIcon from '@mui/icons-material/Refresh';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TodayIcon from '@mui/icons-material/Today';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import { BarChart, Bar, XAxis, YAxis, Tooltip, 
Legend, ResponsiveContainer, PieChart, Pie } from 'recharts';
import { format } from 'date-fns';


const cardsData = [
  {
    title: 'Rs 0.00',
    content: 'Sales',
  },
  {
    title: 'Rs 0.00',
    content: 'Sales Return',
  },
  {
    title: 'Rs 0.00',
    content: 'Purchasing',
  },
  {
    title: 'Rs 0.00',
    content: 'Expense',
  },
];

const cardsData2 = [
  {
    title: '3',
    content: 'Open Invoices',
  },
  {
    title: 'Rs 9,950.00',
    content: 'Total Open Invoices',
  },
  {
    title: 'Rs 0.00',
    content: 'Overdue Invoices',
  },
  {
    title: 'Rs 0.00',
    content: 'Collected last 30 days',
  },
];

const dataForBarChart = [
  {
    name: 'Sales',
    value: 5000,
  },
  {
    name: 'Sales Return',
    value: 2500,
  },
  {
    name: 'Purchasing',
    value: 4000,
  },
  {
    name: 'Expense',
    value: 3000,
  },
];

const currentDate = new Date();

function AppAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        {/*sx-inline styles, take up all available horizontal space within its container, */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> 
          Welcome Main Branchp
        </Typography>
       
        <Button color="success" variant="contained">
          Subscribe
        </Button>
        <Button color="inherit" variant="out-lined" startIcon={< RefreshIcon/>}>
          Refresh
        </Button>
      
      </Toolbar>
    </AppBar>
  );
}

function CardGrid() {
  const handleCardClick = (title) => {
    // Handle the click event for the card with the given title
    alert(`Clicked on ${title}`);
  };

  return (
    <Box style={{ paddingTop: '10px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
                    title={format(currentDate, 'MMMM dd, yyyy')}
                    subheader={format(currentDate, 'EEEE')}
                    action={
                      <IconButton>
                        <TodayIcon />
                      </IconButton>
                    }
            />
            <CardContent>
              <Grid container spacing={2}>
                {cardsData.map((card, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card onClick={() => handleCardClick(card.title)} style={{backgroundColor:'aliceblue'}}>
                      <CardHeader
                        title={card.title}
                        action={
                          <div>
                            <IconButton aria-label="delete">
                              <PointOfSaleIcon color="success" />
                            </IconButton>
                          </div>
                        }
                      />
                      <CardContent>
                        <Typography variant="body2" color="textSecondary">
                          {card.content}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

function CardGrid2() {
  const handleCardClick = (title) => {
    // Handle the click event for the card with the given title
    alert(`Clicked on ${title}`);
  };

  return (
    <Box style={{ paddingTop: '10px' }}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Invoices</Typography>
        </AccordionSummary>
        <CardContent>
          <Grid container spacing={2}>
            {cardsData2.map((card, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card onClick={() => handleCardClick(card.title)} style={{backgroundColor:'lavender'}}>
                  <CardHeader
                    title={card.title}
                    action={
                      <div>
                        <IconButton aria-label="delete">
                          <ReceiptIcon color="secondary" />
                        </IconButton>
                      </div>
                    }
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary">
                      {card.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Accordion>
    </Box>
  );
}

function Chart() {
  return (
    <Grid container spacing={2} paddingTop={2}>
    <Grid item xs={6}>
    <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Sales Bar Chart</Typography>
          </AccordionSummary>
          <Grid item xs={12}>
            <Paper elevation={3}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dataForBarChart}>
                  <Bar dataKey="value" fill="#8884d8" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Accordion>
    </Grid>
    <Grid item xs={6}>
    <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Sales Pie Chart</Typography>
          </AccordionSummary>
          <Grid item xs={12}>
            <Paper elevation={3}>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie dataKey="value" data={dataForBarChart} fill="#a64d79" label />
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Accordion>
    </Grid>
  </Grid>

  );
}

const page = () => {
  return (
    <Box>
    <AppAppBar/>
    <CardGrid/>
    <CardGrid2/>
    <Chart/>
  </Box>
  )
}

export default page