import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button, Box } from '@mui/material';
import { toast } from 'react-toastify';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import LinearProgress from '@mui/material/LinearProgress';
import useClipboard from "react-use-clipboard";
import copy from 'clipboard-copy';

import { getData } from '../service/api';
import { getResFromLocalStorage } from '../service/localStorage';

const Offers = () => {
  const URL = process.env.REACT_APP_PROD_ADMIN_API;
  const navigate = useNavigate();
  const res = getResFromLocalStorage();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { copied, copyToClipboard } = useClipboard(); // Initialize useClipboard

  const privateCheck = () => {
    const auth = localStorage.getItem('user');
    if (!auth) {
      navigate('/login');
    }
  };

  useEffect(() => {
    privateCheck();
    fetchData();
  }, []); // Use an empty dependency array to run the effect only once

  const fetchData = async () => {
    try {
      const result = await getData();
      setData(result);
      setLoading(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCopyAff = (item) => {
    const link = `${URL}/${item?.code}?affiliate_id=${res.data.affiliate_id}`;
    console.log('Copy clicked');
    console.log('Link is -->', link);
    console.log('This is res --->', res);
    console.log('This is user affiliate id -----> :', res.data.affiliate_id);

    try {


       copy(link);
       
      toast.success('Link copied to clipboard', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (error) {
      console.error('Error copying link to clipboard:', error);
      toast.error('Error copying link to clipboard', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Best Offers | Affworld</title>
      </Helmet>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Offers</TableCell>
              <TableCell align="center">Categories</TableCell>
              <TableCell align="center">Payout</TableCell>
              <TableCell align="center">Metrics</TableCell>
              <TableCell align="center">Targeting</TableCell>
              <TableCell align="center">Action</TableCell>
              <TableCell align="center">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              data?.length > 0 ? (
                data.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.description}</TableCell>
                    <TableCell align="center">$18.00</TableCell>
                    <TableCell align="center">
                      <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                          <span style={{ color: '#6E7A83' }}>AR</span>
                          &nbsp;&nbsp;&nbsp; <span>0%</span>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                          <span style={{ color: '#6E7A83' }}>CR</span>
                          &nbsp;&nbsp;&nbsp; <span>0%</span>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                          <span style={{ color: '#6E7A83' }}>EPC</span>
                          &nbsp;&nbsp;&nbsp; <span>$0.00</span>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="center">India</TableCell>
                    <TableCell align="center">
                      <Button
                        onClick={() => {
                          handleCopyAff(row);
                        }}
                        variant="contained"
                        style={{ fontWeight: 700 }}
                      >
                        {copied ? 'Copied' : 'Copy Link'}
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        onClick={() => {
                          navigate('/affilate/detail-offer');
                        }}
                        variant="contained"
                        color="success"
                        style={{ fontWeight: 700 }}
                      >
                        More Detail
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : null
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  <LinearProgress />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Offers;
