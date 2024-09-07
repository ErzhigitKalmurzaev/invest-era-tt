import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearData, getData } from '../store/mainSlice';
import { StyledTableCell, StyledTableRow } from '../components/ui/TableElemets';
import { Table, TableBody, TableHead, TableContainer } from '@mui/material';
import Container from '../components/shared/container';
import { Button } from '../components/ui/button';

const TablePage = () => {
  
  const { slug } = useParams();
  const { data, data_status } = useSelector((state) => state.main);

  const dispatch = useDispatch();

  const [keys, setKeys] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(getData(slug));
  }, [slug]);
  
  useEffect(() => {
    setKeys([]);
    if(data.length > 0 && data_status === 'fulfilled') {
        const allKeys = data
            ?.reduce((acc, obj) => acc.concat(Object.keys(obj)), [])
            ?.filter((key, index, self) => self.indexOf(key) === index);

        setKeys(allKeys);
    }
  }, [data])

  const getColor = (value) => {
    if (value?.includes('%')) {
  
      if (value.includes('+')) {
        return 'rgba(4, 115, 55, 1)';
      } else if(value.includes('-')) {
        return 'rgba(213, 57, 60, 1)';
      }
    } else {
      return 'rgba(23, 35, 57, 1)';
    }
  }
  
  const getKeys = () => {
    if (data.length === 0) return;

    return keys?.map((key, index) =>  index === 0 ? 
                                            <StyledTableCell sx={{ minWidth: 200, border: '1px solid #dbdbdb' }} className="sticky left-0 z-100" key={key + index}>{key}</StyledTableCell> 
                                            :   
                                            <StyledTableCell key={key + index}>{key}</StyledTableCell>);
  };

  const getValues = (row, indexRow) => {
    if (data.length === 0 || Object.keys(row).length === 0) return;
      
    return keys?.map((key, index) => index === 0 ? 
                                            <StyledTableCell 
                                              sx={{ 
                                                minWidth: 200, 
                                                border: '1px solid #dbdbdb', 
                                                backgroundColor: indexRow % 2 ? 'white' : '#F8F8F8'
                                              }} 
                                              className='sticky left-0 z-100' 
                                              key={key + index}
                                            >
                                                {row[key] || '-/-/-/-/-'}
                                            </StyledTableCell>
                                            :
                                            <StyledTableCell 
                                              key={key + index}
                                              sx={{
                                                color: getColor(row[key])
                                              }}
                                            >
                                                {row[key] || '-/-/-/-/-'}
                                            </StyledTableCell>);
  }
  
  return (
    <div className="py-10">
      <Container>
        <div className='flex items-center justify-between px-14 py-2'>
          <h1 className="text-2xl font-bold py-3">{slug}</h1>

          <div className='flex items-center gap-2'>
            <Button onClick={() => setPage(page - 1)} size="lg" disabled={page === 0} variant={page > 0 ? "default" : "disabled"}>
              {"<"}
            </Button>
            <Button onClick={() => setPage(page + 1)} size="lg" disabled={page === Math.ceil(data?.length / 20) - 1} variant={page < data?.length / 20 - 1 ? "default" : "disabled"}>
              {">"}             
            </Button>
          </div>
        </div>

        <TableContainer sx={{ maxWidth: 1080, borderRadius: 5, margin: '0 auto', overflowX: 'auto', border: '1px solid #dbdbdb' }}>
          <Table aria-label="customized table">
            <TableHead>
              <StyledTableRow>
                {
                    getKeys()
                }
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {data?.map((row, index) => (
                <StyledTableRow key={index}>
                  { 
                     index >= page * 20 && index < (page + 1) * 20 ? getValues(row, index) : null
                  }
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default TablePage;
