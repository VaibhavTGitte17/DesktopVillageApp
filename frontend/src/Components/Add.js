import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import AxiosInstance from "./Axios";
import logo from './v logo.png'
import './Loader.css'
import { useNavigate } from "react-router-dom";
import SelectField from "./Selectfield";
import Datefield from "./Date";
import MultiSelectField from "./Multiselectfield";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import dayjs from "dayjs";
import image from './v3.jpg'
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[300],
  "&:hover": {
    backgroundColor: purple[700],
  },
  width: "92%", 
  marginTop: "20px",
  height:"40px"
}));

const schema = yup.object({
  name: yup.string().required("Name is a required field"),
  father: yup.string().required("Father name is a required field"),
  email: yup.string().email("Enter a valid email").required("Email is a required field"),
  phone: yup.string().matches(/^[0-9]{10}$/, "Enter a valid phone number").required("Enter the correct phone number"),
  village: yup.array().min(1, "Select at least one village").required("Select at least one village"),
  taluka: yup.string().required("Select your taluka before submitting the form"),
  state: yup.string().required("Select your state before submitting the form"),
  district: yup.string().required("Select your district before submitting the form"),
  start_date: yup.date().required("Enter your birth date is a required field"),
  end_date: yup.date()
    .required("Current date is a required field")
    .min(yup.ref("start_date"), "The Current date cannot be before the birth date"),
});

function Add() {
  const [village, setVillage] = useState([]);
  const [child, setChild] = useState([]);
  const [taluka, setTaluka] = useState([]);
  const [district, setDistrict] = useState([]);
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);


  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [villageRes, talukaRes, districtRes, stateRes, childRes] = await Promise.all([
          AxiosInstance.get(`village/`),
          AxiosInstance.get(`taluka/`),
          AxiosInstance.get(`district/`),
          AxiosInstance.get(`state/`),
          AxiosInstance.get(`child/`),
        ]);

        setVillage(villageRes.data);
        setTaluka(talukaRes.data);
        setDistrict(districtRes.data);
        setState(stateRes.data);
        setChild(childRes.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const formSubmit = (data) => {
    const formattedStartDate = dayjs(data.start_date).format("YYYY-MM-DD");
    const formattedEndDate = dayjs(data.end_date).format("YYYY-MM-DD");

    const formData = {
      name: data.name,
      father: data.father,
      email: data.email,
      phone: data.phone,
      village: data.village,
      child: data.child,
      taluka: data.taluka,
      district: data.district,
      state: data.state,
      start_date: formattedStartDate,
      end_date: formattedEndDate,
    };

    AxiosInstance.post(`people/`, formData)
      .then((res) => {
        navigate(`/show`);
      })
      .catch((error) => {
        console.error("Error submitting form", error.response ? error.response.data : error.message);
      });
  };

  return (
    <Layout>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent:"center" , alignItems: "center", height: "20vh", width:"200" , my:5 , color: "green"}}>
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </Box>
      ) : (

        <div
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${image})`, // Set background image and gradient
            backgroundSize: "cover",
             backgroundPosition: "center",
            backgroundRepeat: "no-repeat", 
            minHeight: "10vh", 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        <div className="form-wrapper" style={{fontweight: 'bold'}}>
        <form onSubmit={handleSubmit(formSubmit)}>
    
          <Box sx={{ my: 5,  mx: "auto", maxWidth: 1600 }}>
           
            <Box
              sx={{
                display: "flex",
                width: "100%",
                boxShadow: 3,
                padding: 4,
                flexDirection: "column",
                marginLeft: 10,
              }}
            >
          
            <img
            src={logo}
            alt="Village"
            style={{ display: "block", margin: "10px auto" , width:"300px" , height:"250px" }}
          />
          <Typography sx={{ marginLeft: "20px", color: "primary", textAlign: "center" , fontWeight:"bold"}}>
          Add Information About Village
        </Typography>
            
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Enter Your Full Name"
                    sx={{ my: 3, mx: 3, width: "94%" }}
                    error={!!errors.name}
                    helperText={errors.name ? errors.name.message : ""}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              <Controller
                name="father"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Enter Your Father's Name"
                    sx={{ my: 2, mx: 3, width: "94%" }}
                    error={!!errors.father}
                    helperText={errors.father ? errors.father.message : ""}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              <Controller
                name="phone"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Enter Your Phone Number"
                    sx={{ my: 2, mx: 3, width: "94%" }}
                    error={!!errors.phone}
                    
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Enter Your Email Address"
                    sx={{ my: 2, mx: 3, width: "94%" }}
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ""}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                  marginTop: 2,
                }}
              >
                <SelectField
                  label="Select the No of child"
                  name="child"
                  control={control}
                  width="95%"
                  options={child}
                  error={!!errors.child}
                  helperText={errors.child ? errors.child.message : ""}
                />
              </Box>
             
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                  marginTop: 3,
                }}
              >
                <MultiSelectField
                  label="Select The Name Village"
                  name="village"
                  control={control}
                  width="95%"
                  options={village}
                  sx={{
                    marginTop: 3,
                    
                  }}
                  error={!!errors.village}
                  helperText={errors.village ? errors.village.message : ""}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                  marginTop: 3,
                }}
              >
                <SelectField
                  label="Select Your Taluka Name"
                  name="taluka"
                  control={control}
                  width="95%"
                  options={taluka}
                  error={!!errors.taluka}
                  helperText={errors.taluka ? errors.taluka.message : ""}
                />
              </Box>
              <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                marginTop: 3,
              }}
            >
              <Datefield
                fullWidth
                label="Enter your Birth Date"
                name="start_date"
                control={control}
                sx={{ width: "45%" }}
                error={!!errors.start_date}
                helperText={errors.start_date ? errors.start_date.message : ""}
              />
              <Datefield
                fullWidth
                label="Enter form filing date"
                name="end_date"
                control={control}
                sx={{ width: "45%" }}
                error={!!errors.end_date}
                helperText={errors.end_date ? errors.end_date.message : ""}
              />
            </Box>
            
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                marginTop: 3,
              }}
            >
              <SelectField
                label="Select Your Correct District"
                name="district"
                control={control}
                sx={{ width: "45%" }}
                options={district}
                error={!!errors.district}
                helperText={errors.district ? errors.district.message : ""}
              />
              <SelectField
                label="Select Your Correct State"
                name="state"
                control={control}
                sx={{ width: "45%" }}
                options={state}
                error={!!errors.state}
                helperText={errors.state ? errors.state.message : ""}
              />
            </Box>
            
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                  marginTop: 3,
                  textAlign: "center",
                }}
              >
                <ColorButton type="submit" variant="contained">
                  Submit
                </ColorButton>
              </Box>
            </Box>
          </Box>
        </form>
        </div>
        </div>
      )}
      
    </Layout>

  );
}

export default Add;
