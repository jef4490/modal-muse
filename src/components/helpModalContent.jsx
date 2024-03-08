import React from 'react';
import { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';

import FirstPage from './modal-pages/firstPage.jsx'
import SecondPage from './modal-pages/secondPage.jsx'
import ThirdPage from './modal-pages/thirdPage.jsx'

const HelpModalContent = React.forwardRef(({modalIsClosing}, ref) => {
  const [page, setPage] = useState(1);
  const style = {
    position: 'absolute',
    bottom: '15%',
    left: '50%',
    maxWidth: 280,
    minWidth: 280,
    bgcolor: 'background.paper',
    border: '2px solid #bbb',
    boxShadow: 24,
    p: 4,
  };
  let titleContent = "What is Modal Interchange?"
  if(page === 3){
    titleContent = "Beyond Major / Minor"
  }
  return (
    <Box sx={style} ref={ref} tabIndex={-1} className={modalIsClosing ? "modal-is-closing" : "modal-content"}>
      <Typography id="help-modal-title" variant="h6" component="h1">
        {titleContent}
      </Typography>
      {getPageContent(page)}
      <br/>
      <Pagination count={3} className={"modal-pagination"} color="secondary" page={page} onChange={useCallback((_, value) => setPage(() => value), [page])}/>
    </Box>
  )
})

const getPageContent = (page) => {
  switch(page){
    case 1:
      return (<FirstPage />)
    case 2:
      return (<SecondPage />)
    case 3:
      return (<ThirdPage />)
    default:
      return (<></>);
  }
}

export default HelpModalContent;