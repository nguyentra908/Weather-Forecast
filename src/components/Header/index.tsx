import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import SearchForm from '../SearchForm';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { locationSearchSelectors, locatonSearchAsyncActions } from '../../redux/locationSearch';
import { locatonAsyncActions } from '../../redux/location';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../constants/paths';

const Header=()=> {
  const[citySearch,setCitySearch]=useState({
    search:'Ho Chi Minh'
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit=(value:any)=>{
    setCitySearch(value)
  }


  useEffect(() => {
    if (citySearch) {
      dispatch(locatonSearchAsyncActions.getLocationSearch(citySearch.search));
    }
  }, [citySearch, dispatch]);

  const {locatonSearch} = useSelector(locationSearchSelectors.getLocationSearch);
  useEffect(() => {
    if (locatonSearch) {
      dispatch(locatonAsyncActions.getLocation(locatonSearch.woeid));
    }
  }, [locatonSearch, dispatch, navigate]); 
  useEffect(() => {
    if (locatonSearch) {
    navigate(`${PATH.WEATHER}/${locatonSearch.woeid}`);
    }
  }, [locatonSearch, navigate]); 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            WEATHER FORECAST
          </Typography>
          <SearchForm onSubmit={handleSubmit}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;