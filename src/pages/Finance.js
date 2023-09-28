import React, {useState} from "react";
import {
    Box,
    Button,
    Typography,
    Grid,
    TextField,
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogContentText, 
    DialogActions,
    FormControl,
    FormControlLabel 
} from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import { useAppContext } from "../context/ChatProvider";
import SideDrawer from "../components/SideDrawer";


const Finance =()=>{
    const { user } = useAppContext() || {};
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('UPI');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const finalRef = React.useRef(null)
    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
      };

    return(
        <div style={{width:"100%"}}>
            {user && <SideDrawer/>}
            <Typography style={{fontSize:"40px", fontWeight:"600",marginLeft:"50px",width:"fit-content"}}>Balances</Typography>
            <Grid style={{marginLeft:"50px",minChildWidth:"250",spacing:"4px",display:"flex",justifyContent:"space-evenly"}}>
                <Box style={{marginRight:"15px",display:"flex",justifyContent:"space-between",border:"2px solid gray",borderRadius:"10px",backgroundColor:"#E6EDFA",width:"100%",height:"25.5vh",padding:"30px"}}>
                    <Typography style={{fontSize:"10px",fontWeight:"700"}}>
                        <h2>RevShare</h2>
                        <h2 style={{fontSize: "30px",fontWeight:"bold"}}>$0.00</h2>
                    </Typography>
                </Box>
                <Box style={{marginRight:"15px",display:"flex",justifyContent:"space-between",border:"2px solid orange",borderRadius:"10px",backgroundColor:"#E6EDFA",width:"100%",height:"25.5vh",padding:"30px"}}>
                    <Typography style={{fontSize:"10px",fontWeight:"700"}}>
                        <h2>In processing</h2>
                        <h2 style={{fontSize: "30px",fontWeight:"bold"}}>$0.00</h2>
                    </Typography>
                </Box>
                <Box style={{marginRight:"8px",display:"flex",justifyContent:"space-between",border:"2px solid purple",borderRadius:"10px",backgroundColor:"#E6EDFA",width:"100%",height:"25.5vh",padding:"30px"}}>
                    <Typography style={{fontSize:"10px",fontWeight:"700"}}>
                        <h2>To the payment</h2>
                        <h2 style={{fontSize: "30px",fontWeight:"bold"}}>$1000.00</h2>
                    </Typography>
                </Box>
            </Grid>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Choose Payment Method</DialogTitle>
                <DialogContent>
                    <Typography>
                        Choose your payment method:
                    </Typography>
                    <FormControl component="fieldset">
            <RadioGroup name="payment options" defaultValue={1} onChange={handleRadioChange}>
              <Stack style={{fontWeight:"600",spacing:"4px",display:"flex",Direction:"column"}}>
                <FormControlLabel
                  value="UPI"
                  control={<Radio />}
                  label="UPI"
                />
                <FormControlLabel
                  value="Astropay"
                  control={<Radio />}
                  label="Astropay"
                />
                <FormControlLabel
                  value="Bitcoin"
                  control={<Radio />}
                  label="Bitcoin"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                />
              </Stack>
            </RadioGroup>
          </FormControl>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} style={{color:"white",colorScheme:"blue",backgroundColor:"#1976D2"}}>
                    Close
                </Button>
                <Button onClick={handleClose} style={{color:"white",colorScheme:"whatsup",backgroundColor:"#25D366"}}>
                    Save
                </Button>
                </DialogActions>
            </Dialog>
            <Grid style={{marginTop:"20px",marginLeft:"50px",padding:"5px",minChildWidth:"250",spacing:"10px",display:"flex",justifyContent:"space-evenly"}}>
                <Box style={{marginRight:"15px",display:"flex",justifyContent:"space-between",border:"1px solid green",borderRadius:"10px",backgroundColor:"#E6EDFA",width:"100%",height:"25.5vh",padding:"30px"}}>
                    <Typography style={{fontSize:"10px",fontWeight:"700"}}>
                        <h2>Manual payment</h2>
                        <Typography>
                        <h2 style={{marginTop: "10px",fontSize: "30px"}}>Payment is made within 3 days of order</h2>
                        </Typography>
                        
                    </Typography>
                    <Box style={{height:"10%",width:"30%"}}>
                        <Button style={{variant:"outlined",width:"150px",colorScheme:"purple",backgroundColor:"purple",color:"white"}} onClick={handleClickOpen}>
                            Order Payment
                        </Button>
                    </Box>
                </Box>
                <Box style={{marginRight:"8px",display:"flex",justifyContent:"space-between",border:"1px solid orange",borderRadius:"10px",backgroundColor:"#E6EDFA",width:"100%",height:"25.5vh",padding:"30px"}}>
                    <Typography style={{fontSize:"10px",fontWeight:"700"}}>
                        <h2>Autopay</h2>
                        <h2 style={{ marginTop: "30px", fontSize: "20px" }}>You haven't activated the autopay feature</h2>
                    </Typography>
                </Box>
                
            </Grid>
            <Grid style={{marginTop:"20px",marginLeft:"50px",padding:"5px",minChildWidth:"250",spacing:"10px",display:"flex",justifyContent:"space-evenly"}}>
                
                <Box style={{marginRight:"15px",display:"flex",justifyContent:"space-between",border:"1px solid green",borderRadius:"10px",backgroundColor:"#E6EDFA",width:"100%",height:"25.5vh",padding:"30px"}}>
                    <Typography style={{fontSize:"10px",fontWeight:"700"}}>
                        <h2>Payment History</h2>
                    </Typography>
                </Box>
                
            </Grid>

        </div>

    )
}

export default Finance