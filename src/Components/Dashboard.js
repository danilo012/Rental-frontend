// Imported Required Files
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import DateRangePicker from "@mui/lab/DateRangePicker";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  // Create Navigate to jump another Route
  let navigate = useNavigate();

  // Declare Function inside UseEffect
  useEffect(() => {
    checkAuth();
  });

  // Create Function for check authentication
  let checkAuth = async () => {
    // get token from sessionStorage
    let token = sessionStorage.getItem("token");
    // token is present then condition will be true
    // token is not present then condition will be false and direct jump into else part and navigate to login page
    if (token) {
      let config = {
        headers: {
          token: token,
        },
      };
      // Post data to url
      let res = await axios.post(
        "https://backuser.onrender.com/users/loginusers/auth",
        {
          Purpose: "Approve",
        },
        config
      );
      // If statuscode is 200 then condition will be true and sessionStorage is clear and navigate to login page
      if (res.data.statusCode !== 200) {
        alert("Session Ended");
        sessionStorage.clear();
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  };

  const city = [
    { label: "Philippines" },
    { label: "Asia" },
    { label: "Africa" },
    { label: "North America" },
    { label: "South America" },
    { label: "Antartica" },
    { label: "Europe" },
    { label: "Australia" },
    { label: "Gandhinagar" },
    { label: "Gandhidam" },
    { label: "Anand" },
    { label: "Navsari" },
    { label: "Nadiad" },
    { label: "Bharuch" },
    { label: "Mehsana" },
    { label: "Bhuj" },
    { label: "Porbandar" },
    { label: "Valsad" },
    { label: "Vapi" },
    { label: "Somnath" },
    { label: "Patan" },
    { label: "Jodhpur" },
    { label: "Jaipur" },
    { label: "Kota" },
    { label: "Bhiwadi" },
    { label: "Bikaner" },
    { label: "Udaipur" },
    { label: "Ajmer" },
    { label: "Bhilwar" },
    { label: "Alwar" },
    { label: "Sikar" },
    { label: "Bharatpur" },
    { label: "Pali" },
    { label: "Sri Ganganagar" },
    { label: "Hanumangarh" },
    { label: "Beawar" },
    { label: "Pune" },
    { label: "Nagpur" },
    { label: "Nashik" },
    { label: "Thane" },
    { label: "Aurangabad" },
    { label: "Solapur" },
    { label: "Jalgaon" },
    { label: "Amravati" },
    { label: "Kolhapur" },
    { label: "Ulhasnagar" },
    { label: "Malegaon" },
    { label: "Latur" },
    { label: "Dhule" },
    { label: "Ahmednagar" },
    { label: "Miraj" },
    { label: "Chandrapur" },
    { label: "Jalna" },
    { label: "Navi Mumbai" },
    { label: "Satara" },
    { label: "Kamptee" },
    { label: "Gondia" },
    { label: "Achlapur" },
    { label: "Nandurbar" },
    { label: "Wardha" },
    { label: "Hingaghat" },
    { label: "Dhar" },
    { label: "Hubballi-Dharwad" },
    { label: "Mysuru" },
    { label: "Kalaburagi" },
    { label: "Mangaluru" },
    { label: "Belagavi" },
    { label: "Ballari" },
    { label: "Vijayapura" },
    { label: "Shivamogga" },
    { label: "Raichur" },
    { label: "Bidar" },
    { label: "Hospet" },
    { label: "Robertsonpet" },
    { label: "Hassan" },
    { label: "Bhadravati" },
    { label: "Chitradurga" },
    { label: "Udupi" },
    { label: "Kolar" },
    { label: "Mandya" },
    { label: "Chikmagalur" },
    { label: "Gangavati" },
    { label: "Ranebennuru" },
    { label: "Kasaragod" },
    { label: "Kannur" },
    { label: "Alappuza" },
    { label: "Ernakulam" },
    { label: "Idukki" },
    { label: "Kollam" },
    { label: "Kottayam" },
    { label: "Kozikode" },
    { label: "Malappuram" },
    { label: "Palakkad" },
    { label: "Pathanamthitta" },
    { label: "Thiruvananthapuram" },
    { label: "Thrissur" },
    { label: "Wayanad" },
    { label: "Coimbatore" },
    { label: "Madurai" },
    { label: "Tiruchirappalli" },
    { label: "Tiruppur" },
    { label: "Salem" },
    { label: "Erode" },
    { label: "Vellore" },
    { label: "Thoothukkudi" },
    { label: "Dindigul" },
    { label: "Thanjavur" },
    { label: "Ranipet" },
    { label: "Karur" },
    { label: "Nagercoil" },
    { label: "Kanchipuram" },
    { label: "Karaikkudi" },
    { label: "Neyveli" },
    { label: "Cuddalore" },
    { label: "Tiruvannamalai" },
    { label: "Pollachi" },
    { label: "Pudukkottai" },
    { label: "Vaniyambadi" },
    { label: "Ambur" },
    { label: "Nagapattinam" },
    { label: "Visakhapatnam" },
    { label: "Vijayawada" },
    { label: "Guntur" },
    { label: "Nellore" },
    { label: "Kurnool" },
    { label: "Kakinada" },
    { label: "Kadapa" },
    { label: "Tirupati" },
    { label: "Anantapuram" },
    { label: "Vizianagaram" },
    { label: "Eluru" },
    { label: "Nadyal" },
    { label: "Ongole" },
    { label: "Adoni" },
    { label: "Madanapalle" },
    { label: "Machilipatnam" },
    { label: "Tenali" },
    { label: "Proddatur" },
    { label: "Chittor" },
    { label: "Hindupur" },
    { label: "Srikakulam" },
    { label: "Bhimavaram" },
    { label: "Gudivada" },
    { label: "Guntakal" },
    { label: "Dharamavaram" },
    { label: "Tadipatri" },
    { label: "Mangalagiri" },
    { label: "Warangal" },
    { label: "Nizamabad" },
    { label: "Khammam" },
    { label: "Karimnagar" },
    { label: "Ramagundam" },
    { label: "Mahabubnagar" },
    { label: "Nalgonda" },
    { label: "Adilabad" },
    { label: "Suryapet" },
    { label: "Siddipet" },
    { label: "Miryalaguda" },
    { label: "Jagtial" },
    { label: "Indore" },
    { label: "Bhopal" },
    { label: "Jablapur" },
    { label: "Gwalior" },
    { label: "Ujjain" },
    { label: "Sagar" },
    { label: "Dewas" },
    { label: "Satna" },
    { label: "Ratlam" },
    { label: "Rewa" },
    { label: "Murwara" },
    { label: "Singrauli" },
    { label: "Burhanpur" },
    { label: "Khandwa" },
    { label: "Bhind" },
    { label: "Chhindwara" },
    { label: "Guna" },
    { label: "Shivpur" },
    { label: "Vidisha" },
    { label: "Chhatarpur" },
    { label: "Damoh" },
    { label: "Mandsaur" },
    { label: "Khargone" },
    { label: "Neemuch" },
    { label: "Pithapur" },
    { label: "Narmadapuram" },
    { label: "Itarsi" },
    { label: "Sehore" },
    { label: "Morena" },
    { label: "Betul" },
    { label: "Seoni" },
    { label: "Datia" },
    { label: "Nagda" },
    { label: "Dindori" },
    { label: "Raipur" },
    { label: "Durg" },
    { label: "Rajnandgaon" },
    { label: "Raigarh" },
    { label: "Korba" },
    { label: "Jagdalpur" },
    { label: "Dhamtari" },
    { label: "Chirmiri" },
    { label: "Bilaspur" },
    { label: "Bhilai" },
    { label: "Ambikapur" },
    { label: "Mahasamund" },
    { label: "Koriya" },
    { label: "Bhubaneshwar" },
    { label: "Cuttack" },
    { label: "Rourkela" },
    { label: "Berhampur" },
    { label: "Samalpur" },
    { label: "Puri" },
    { label: "Balasore" },
    { label: "Bhadrak" },
    { label: "Baripada" },
    { label: "Kolkata" },
    { label: "Asansol" },
    { label: "Siliguri" },
    { label: "Durgapur" },
    { label: "Bardhaman" },
    { label: "Malda City" },
    { label: "Baharampur" },
    { label: "Shantipur" },
    { label: "Ranaghat" },
    { label: "Haldia" },
    { label: "Krishnanagar" },
    { label: "Jalpaiguri" },
    { label: "Balurghat" },
    { label: "Bankura" },
    { label: "Darjeeling" },
    { label: "Alipurduar" },
    { label: "Purulia" },
    { label: "Jangipur" },
    { label: "Bangaon" },
    { label: "Cooch Behar" },
    { label: "Patna" },
    { label: "Gaya" },
    { label: "Bhagalpur" },
    { label: "Muzaffarpur" },
    { label: "Purina" },
    { label: "Begusarai" },
    { label: "Katihar" },
    { label: "Munger" },
    { label: "Chhapra" },
    { label: "Danapur" },
    { label: "Hajipur" },
    { label: "Dehri" },
    { label: "Siwan" },
    { label: "Motihari" },
    { label: "Nawada" },
    { label: "Bagaha" },
    { label: "Buxar" },
    { label: "Sitamarhi" },
    { label: "Jamalpur" },
    { label: "Jehanabad" },
    { label: "Aurangabad" },
    { label: "Jamshedpur" },
    { label: "Dhanbad" },
    { label: "Ranchi" },
    { label: "Bokaro" },
    { label: "Deoghar" },
    { label: "Phusro" },
    { label: "Hazaribagh" },
    { label: "Giridih" },
    { label: "Ramgarh" },
    { label: "Medininagar" },
    { label: "Chirkunda" },
    { label: "Meerut" },
    { label: "Saharanpur" },
    { label: "Ghaziabad" },
    { label: "Noida" },
    { label: "Aligarh" },
    { label: "Agra" },
    { label: "Moradabad" },
    { label: "Bareily" },
    { label: "Etawah" },
    { label: "Jhansi" },
    { label: "Lucknow" },
    { label: "Kanpur" },
    { label: "Prayagraj" },
    { label: "Varanasi" },
    { label: "Ayodhya" },
    { label: "Basti" },
    { label: "Gorakhpur" },
    { label: "Faridabad" },
    { label: "Gurugram" },
    { label: "Panipat" },
    { label: "Ambala" },
    { label: "Yamunagar" },
    { label: "Rohtak" },
    { label: "Sonipat" },
    { label: "Bhiwani" },
    { label: "Ludhiana" },
    { label: "Amritsar" },
    { label: "Jalandhar" },
    { label: "Patiala" },
    { label: "Bathinda" },
    { label: "Mohali" },
    { label: "Batala" },
    { label: "Pathankot" },
    { label: "Firozpur" },
    { label: "Malerkotla" },
    { label: "Khanna" },
    { label: "Muktsar" },
    { label: "Sunam" },
    { label: "Srinagar" },
    { label: "Jammu" },
    { label: "Anantnag" },
    { label: "Shimla" },
    { label: "Dharamshala" },
    { label: "Solan" },
    { label: "Palampur" },
    { label: "Sundarnagar" },
    { label: "Kullu" },
    { label: "Manali" },
    { label: "Dalhousie" },
    { label: "Rohru" },
    { label: "Jawalamukhi" },
    { label: "Indora" },
    { label: "Kasauli" },
    { label: "Naina Devi" },
    { label: "Kotkhai" },
    { label: "Narkanda" },
    { label: "Sarkaghat" },
    { label: "Una" },
    { label: "Dehradun" },
    { label: "Haridwar" },
    { label: "Roorke" },
    { label: "Rishikesh" },
    { label: "Kashipur" },
    { label: "Hadwani" },
    { label: "Rudrapur" },
    { label: "Gangtok" },
    { label: "Namchi" },
    { label: "Udalguri" },
    { label: "Karimganj" },
    { label: "Cachar" },
    { label: "Kampur" },
    { label: "Dhubri" },
    { label: "Sivasagar" },
    { label: "Guwahati" },
    { label: "Silchar" },
    { label: "Jorhat" },
    { label: "Papum Pare" },
    { label: "Changlang" },
    { label: "Lohit" },
    { label: "West Siang" },
    { label: "Tirap" },
    { label: "East Siang" },
    { label: "Kuma Kurg" },
    { label: "Dimapur" },
    { label: "Kiphire" },
    { label: "Kohima" },
    { label: "Longleng" },
    { label: "Mon" },
    { label: "Phek" },
    { label: "Tuensang" },
    { label: "Wokha" },
    { label: "Noklak" },
    { label: "Chandel" },
    { label: "Imphal East" },
    { label: "Imphal West" },
    { label: "Senapati" },
    { label: "Thoubal" },
    { label: "Churachandpur" },
    { label: "Dhalai" },
    { label: "Nort" },
    { label: "Sout" },
    { label: "Wes" },
    { label: "Mamit" },
    { label: "Aizawal" },
    { label: "Kolasib" },
    { label: "Champhai" },
    { label: "Serchhip" },
    { label: "Saiha" },
    { label: "Lawngtlai" },
  ];

  let select = [
    {
      label: "365 DAY Booking",
    },
    {
      label: "coming soon",
    },
  ];

  // Declare State to setValue
  const [value, setValue] = React.useState([null, null]);

  let products = [
    {
      label: "R2E800",
    },
    {
      label: "COMINGSOON",
    },
  ];

  // Declare State to Set SelectedOptions
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleChange = (event, value) => setSelectedOptions(value);

  // Write a function for navigate to selected page
  const handleSubmit = () => {
    if (selectedOptions.label === "R2E800") {
      navigate("/R2E800");
    } else if (selectedOptions.label === "COMINGSOON") {
      navigate("/COMINGSOON");
    }
  };

  return (
    <div>
      <div className="text-center " style={{ marginTop: "250px" }}>
        <h1 className="text-dark">RENT TODAY, EARN TOMMOROW</h1>
        <div
          className="container mt-5"
          style={{
            display: "grid",
            gridTemplateColumns: " 1fr 1fr 1fr 1fr",
            gridTemplateColumns: "repeat(auto-fill, 310px)",
          }}
        >
          {/* Mui Components To Select City */}
          <Autocomplete
            className="m-auto"
            id="country-select-demo"
            sx={{ width: 300 }}
            options={city}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box {...props}>{option.label}</Box>
            )}
            renderInput={(params) => (
              <TextField
                className="pr-2 pl-2"
                {...params}
                label="&nbsp;&nbsp;&nbsp;Select City"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password",
                }}
              />
            )}
          />

          {/* Mui Components to select hourly or 30day booking */}
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={select}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="365 DAY Booking" />
            )}
          />

          {/* Mui Componnets To select check in data and check out date */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              startText="Check-in"
              endText="Check-out"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>

          {/* Mui Components to select Product page */}
          <Autocomplete
            autoHighlight
            className="ml-4"
            disablePortal
            id="combo-box-demo"
            options={products}
            onChange={handleChange}
            // filterSelectedOptions
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Products" />}
          />
        </div>

        {/* button for redirect to selected product page */}
        <button
          className="glow-on-hover text-light m-auto mt-5"
          style={{ border: "1px solid black", width: "200px" }}
          onClick={() => handleSubmit()}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
