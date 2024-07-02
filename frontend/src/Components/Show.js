import React, { useEffect, useMemo, useState } from "react";
import AxiosInstance from "./Axios";
import { MaterialReactTable } from 'material-react-table';
import dayjs from "dayjs";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon, Close as CloseIcon } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import Layout from "./Layout";

const Show = () => {
  const [myData, setMydata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [recordToDelete, setRecordToDelete] = useState(null);
  const navigate = useNavigate();

  const GetData = async () => {
    try {
      const res = await AxiosInstance.get(`people/`);
      setMydata(res.data);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (recordToDelete) {
      try {
        await AxiosInstance.delete(`people/${recordToDelete.id}/`);
        setMydata(myData.filter(record => record.id !== recordToDelete.id));
        setRecordToDelete(null);
        setOpenDialog(false);
      } catch (error) {
        console.error("Error deleting data", error);
      }
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name', 
        header: 'Full Name',
        size: 150,
      },
      {
        accessorKey: 'father', 
        header: 'Father Name',
        size: 150,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 150,
      },
      {
        accessorKey: 'phone', 
        header: 'Phone',
        size: 120,
      },
      {
        accessorFn: (row) => dayjs(row.start_date).format('DD-MM-YYYY'),
        header: 'Birth Date',
        size: 100,
      },
      {
        accessorFn: (row) => dayjs(row.end_date).format('DD-MM-YYYY'),
        header: 'Form Date',
        size: 100,
      },
    ],
    [],
  );

  return (
    <Layout>
      <div style={{ maxWidth: "1400px", margin: "0 auto" , marginTop:"50px"}}>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent:"center" , alignItems: "center", height: "20vh", width:"200"}}>
          <CircularProgress color="secondary" />
        </Box>
      ): (
          <MaterialReactTable
            columns={columns}
            data={myData}
            enableRowActions
            renderRowActions={({ row }) => (
              <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px'}}>
                <IconButton
                  color="secondary"
                  onClick={() => navigate(`/update/${row.original.id}`)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => {
                    setRecordToDelete(row.original);
                    setOpenDialog(true);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            )}
          />
        )}
      </div>
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            position: 'absolute',
            top: '10%',
            margin: '10px auto',
            width: '800px', 
            
          }
        }}
      >
        <DialogTitle id="alert-dialog-title">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <span>Confirm Delete</span>
            <IconButton onClick={() => setOpenDialog(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this record?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            No
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Layout>
  );
};

export default Show;
