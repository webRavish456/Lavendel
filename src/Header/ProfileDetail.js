import React, { useEffect, useReducer, useState } from "react";
import {Box, Grid, Typography, } from "@mui/material";
import {  createTheme, useMediaQuery } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ProfileDetailskeleton from "./Profileskeleton";
import Footer from "../Footer/Footer";
import Header from "./header";
import Bottomnavigation from "../Home/BottomNavigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AvatarEditor from 'react-avatar-edit';
import Modal from '@mui/material/Modal';
import Resizer from 'react-image-file-resizer';
import SearchFilter from "./SearchFilter";
import { connect } from 'react-redux';
import {setData} from  "../Redux/action";
import { useDispatch } from 'react-redux';
import { updateRecordField } from '../Redux/action';
import { useSelector } from 'react-redux';
import { uploadImage, deleteImage } from '../Redux/action';


const Item = styled(Paper)(({ theme }) => ({
    
    ...theme.typography.body2,
    padding: theme.spacing(1),
   }));
 

const ProfileDetail=({data, setData})=>
{


    const theme = createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 768,
          },
        },
      });

      const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

      const access= JSON.parse(localStorage.getItem("access_token"));

      const Baseurl=process.env.REACT_APP_BASE_URL;

      const [fileInput,setfileInput] = useState();

      const [profile, setprofile]=useState(null);

      const [name, setname]=useState();

      const [buttonClicked, setButtonClicked] = useState(false);
  

      const [show1, setShow1] = useState(true);
   
      const [open, setOpen] = useState(false);

 
      const [emailvalid, setemailvalid] = useState(false);
      const [aadharvalid, setaadharvalid] = useState(false);
      const [fnamevalid,setfnamevalid] = useState(false);
      const [lnamevalid, setlnamevalid] = useState(false);

      const [loadingprofile, setloadingprofile] = useState(true);
      const selectedImage = useSelector((state) => state.image);
      const verifyMobile= useSelector(state=>state.phone)
    

       const [input, setinput]=useState(
        {
            first_name:"",
            last_name:"",
            email:"",
            aadhaar:"",
            gender:"",
            mobile_number:verifyMobile,
          
        }
       )

    

      const [show, setShow] = useState(false);
      const [shows, setShows]=useState(false);


      const items=useSelector(state=>state.search);

      const [searchResult, setsearchResults] = useState(items);
      
    

      const [Update, setUpdate] =useState();
  
      const [UpdateMessage,setUpdateMessage]=useState()

 
     
       const updateLocation=(locationdata)=>
    {
      setUpdate(locationdata);
   
    }
  
  const Message=(success)=>
  {
      setUpdateMessage(success);
  
  }
    
     
      const handleCloseShow=()=>setShow(false);
  
    
   
 

      const onFileChange=async(e)=>
      {
           setfileInput(e.target.files[0]);
           setname(e.target.files[0].name);
           console.log(e.target.files[0].name);
          
           const file = e.target.files[0];

           Resizer.imageFileResizer(
            file,
            300, 
            300, 
            'JPEG', 
            70, 
            0, 
            (compressedFile) => {
              const reader = new FileReader();
              reader.onloadend = () => {
                const compressedDataURL = reader.result;


            
                dispatch(uploadImage(compressedDataURL));

                console.log(selectedImage);
              
                
              };
               reader.readAsDataURL(compressedFile);
            },
            'blob' 
          );
          
      

           setOpen(false);

      }

      const dispatch = useDispatch();
   
      const handleOpen=()=>setOpen(true);
     const handleChange=(e)=>
     {
         const name=e.target.name;
         const value=e.target.value;

         setinput({...input, [name]:value});
       
        dispatch(updateRecordField(name, value));
     } 

    

     const cancel=()=>
     {
        setOpen(false);
     }

    const remove=()=>
    {
     
        dispatch(deleteImage());
        setOpen(false);
      
          var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${access}` );
        var formdata = new FormData();

        var requestOptions = {
          method: 'DELETE',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };
      
      fetch(`${Baseurl}/delete-profile-picture/`, requestOptions)
        .then(response => response.text())
        .then(result => {

            const Update=JSON.parse(result);
            
            console.log(result);
        
             if(Update.status==="Success")
             {
               toast.success('Image deleted successfully!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000, 
                hideProgressBar: true,
  
              

              }); 
             }
           

          })
        .catch(error => console.log('error', error));

    }
  
   

     const edit1=()=>
     {
     
         setShow1(false);
        
     }

    

     const cancel1=()=>
     {
     
      setShow1(true);
     }

   

     const Save1 =(e)=>
     {
         
           e.preventDefault();
          
           const newfname=input.first_name;
           const newlname=input.last_name;
          
        
          if(newfname.length===0 || newlname.length===0)
          {
               if(newfname.length===0 && newlname.length!==0)
               {
                  setfnamevalid(true);
                  setlnamevalid(false);
               }

               else if (newlname.length===0 && newfname.length!==0)
               {
                 setlnamevalid(true);
                 setfnamevalid(false);
                 
               }

               else
               {
                 setfnamevalid(true);
                 setlnamevalid(true);
               }
             
          }

          else 
          {

            setfnamevalid(false);
            setlnamevalid(false);
          
           const newemail=input.email;

          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          
          if (emailPattern.test(newemail)) {
            
           

          
           setemailvalid(false);

           const newaadhar=input.aadhaar;
          

       
           if(newaadhar.length!==12)
            {
                 setaadharvalid(true);
            }

            else{
            
   
               setaadharvalid(false); 
               setButtonClicked(true);
               setShow1(true);
               
               
                  
             }

   
           } else {
             
             setemailvalid(true);
             
           }
           
          }
     }
 

  useEffect(()=>
  {

    (async () => {
    
    if(access!==null)
    {  

      if(name && fileInput)
      {  
  
       
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${access}` );

    var formdata = new FormData();
     formdata.append("profile_picture",fileInput,name);
  
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };
    
     fetch(`${Baseurl}/upload-profile-picture/`, requestOptions)
      .then(response => response.text())
      .then(result => {
        const data=JSON.parse(result);
         
        console.log(result);

        if(data.status==="failed")
        {
          toast.error('ProfileImage not Updated!', {
          
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: true,
          });
        }
     
    
      })
      .catch(error => console.log('error', error));
    
    }
  
}
})();

  },[name,fileInput])  

  useEffect(()=>
  {
    (async () => {
 
     
      if(buttonClicked===true || access!==null)
      {
   
   
      if(access!==null)
      {
       

      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${access}` );
       
       var formdata = new FormData();
       formdata.append("first_name", input.first_name );
       formdata.append("last_name", input.last_name);
       formdata.append("email", input.email );
      formdata.append("mobile_number", input.mobile_number) 
       formdata.append("profile_picture", selectedImage);
       formdata.append("gender", input.gender);
       formdata.append("aadhaar", input.aadhaar );
        
       var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };
      
      fetch(`${Baseurl}/profile/`, requestOptions)
        .then(response => response.text())
        .then(result => {

          const Updatedata=JSON.parse(result);
        
    
        })
        .catch(error => console.log('error', error));
      } 
    }
 })();    
  },[selectedImage, buttonClicked, input, access])

 

  useEffect(()=>
  {
      (async () => {
    if(buttonClicked===true || access!==null)
    {
      if(access!==null)
      {
          

      setloadingprofile(true);
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${access}` );
    
      var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch(`${Baseurl}/profile/`, requestOptions)
      .then(response => response.text())
      .then(result => {

          const Update=JSON.parse(result);
          const Updateprofile=Update.data;
          setprofile(Updateprofile);
          setData(Updateprofile);
          setinput(Updateprofile);
          console.log(Updateprofile);
        
        
         /*
            toast.success('Profile updated successfully!', {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000, 
              hideProgressBar: true, 
              })
*/
              setButtonClicked(false)
              setloadingprofile(false);
            
            
        })
      .catch(error => console.log('error', error));

      }
    }
  })();
  },[buttonClicked, access])


  const Filter = (e)=>
  {
            const length = e.target.value.length; 
            if(length!==0)
            {
               setShows(true);
               setsearchResults(items.filter(items=>items.service_name.toLowerCase().includes(e.target.value.toLowerCase())));
              
            }
            else{
                setShows(false);
            }
  }

  
     return (
        <>

                <div className="contain">
                    <Header  Filter={Filter} updateLocation={updateLocation} Message={Message} />
                <div className="content">
               <div className="search_valueshow"> {shows &&  <SearchFilter searchResult={searchResult}  handleCloseShow={handleCloseShow}    />} </div> 

             <section className="section">


             {loadingprofile ?
               
               <>
               <ProfileDetailskeleton/>
               </>
            
            :


             <div className="explore_container">
              <Box sx={{width:"100%"}}>


          <Grid container rowSpacing={2}  columnSpacing={{xs:2, sm:1, md:4}} display="flex" justifyContent="space-between">
          <Grid item xs={12} sm={isSmScreen ? 12 : 3} md={3}>
           <Item className="avatar_profile">
      


          {profile && <label onClick={handleOpen}><Avatar alt="avatar"  src={selectedImage} className="avatar_photo"/></label>}

        
           <div className="hello">Hello</div>
           </Item>
          
            
            <Modal open={open}>
                <div className="updateprofile">
     
          <div>
           <div className="change_profile">Change Profile Photo</div>
           <div><hr style={{color:"var(--stroke)", opacity:"0.5", width:"44vw"}}></hr></div>


           <input type="file" id="fileInput"  name="profile" className="update_photo" onChange={(e)=>onFileChange(e)}/>
           <label   htmlFor='fileInput' className="upload_photo"  >Upload Photo</label>

           <div><hr style={{color:"var(--stroke)", opacity:"0.5",  width:"44vw"}}></hr></div>

           <div className="remove_photo" onClick={remove}>Remove Current Photo</div>
           <div><hr style={{color:"var(--stroke)", opacity:"0.5",  width:"44vw"}}></hr></div>

           <div className="cancel" onClick={cancel}>Cancel</div>

         </div>
            

        </div>
 


            </Modal>  
         

          </Grid>

          <Grid item xs={12} sm={isSmScreen? 12:9} md={9}>
           <Item>
            <form>
             <div className="personalinfo">Personal Info</div>
             
              <Box component="form" sx={{ '& > :not(style)': { m: 1,},  }} noValidate  autoComplete="off" className="form-input" >
              <div className="edit_data">
              <label htmlFor="personal"  className="label">Name</label>
              {show1 ? <div className="edit" onClick={edit1}>Edit</div> :<div className="edit" onClick={cancel1}>Cancel</div> }
              </div>
         
          {show1 ? 
              <div>
            {(data.first_name==="" || data.last_name==="") ?  <div className="details">Your Full Name</div> :  <div className="details">{data.first_name} {data.last_name}</div> }
              <div className="hrdata"><hr style={{color:"var(--stroke)", opacity:"0.5"}}></hr></div>
              </div>

                 :  
                  <div>
              <div className="personal">

              <div className="field_data">
             
              <TextField id="first_name" label="First Name" value={input.first_name}   name="first_name"        onChange={handleChange} style={{width:"100%"}}  />
              {fnamevalid &&  <div><label className="validemail field_name">First Name is required</label></div>}
              </div>

              <div className="field_data" >
              <TextField id="last_name" label="Last Name"  value={input.last_name}  name="last_name"        onChange={handleChange} style={{width:"100%"}}    />
               {lnamevalid &&  <div><label className="validemail field_name">Last Name is required</label></div>}
             </div>
             </div>

              </div>
          }

             <div>
             
              <label htmlFor="gender" value={input.gender} className="label">Your Gender</label> 
             <RadioGroup  name="gender"  onChange={handleChange} >
                <div className="gender">
               <FormControlLabel value="Male"  checked={input.gender === 'Male'}  disabled={show1} control={<Radio />} label=<Typography style={{fontSize:"14px"}}>Male</Typography>  />
               <FormControlLabel value="Female"   checked={input.gender === 'Female'} disabled={show1} control={<Radio />} label=<Typography style={{fontSize:"14px"}}>Female</Typography>  />
               </div>
              </RadioGroup>
              </div>
      
              <div className="edit_data">
             <label htmlFor="email" className="label">Email Address</label>
 
             </div>
  
              {show1 ? 
             <div>
            {(data.email==="") ?   <div className="details">Your Email Address</div> :  <div className="details">{data.email}</div>  }
              <div className="hrdata"><hr style={{color:"var(--stroke)", opacity:"0.5"}}></hr></div>
              </div>
                  
                  :
                <div>
              <div><TextField id="email" type="email" label="Email Address" value={input.email}  name="email" onChange={handleChange} className="text_field"  /></div>
              {emailvalid &&  <div><label className="validemail">Enter a valid email</label></div>}
      
              </div>
              }

            


              <div className="edit_data">

              <label  className="label">Mobile Number</label>
              </div>
              {show1 ? 
             <div>
               <div className="details">{data.mobile_number}</div> 
              <div className="hrdata"><hr style={{color:"var(--stroke)", opacity:"0.5"}}></hr></div>
              </div>
                  
                  :
                <div>
              <div><TextField id="mobile_number" type="text"  value={input.mobile_number}  name="mobile_number" className="text_field"  /></div>
          
      
              </div>
              }

              
             

                    
               <div className="edit_data">
              <label htmlFor="aadhar"  className="label">Aadhar Number</label>

              </div>

               {show1  ?
              <div>
             {(data.aadhaar==="") ? <div className="details">Your Aadhar Number</div> : <div className="details">{data.aadhaar}</div>}
              <div className="hrdata"><hr style={{color:"var(--stroke)", opacity:"0.5"}}></hr></div>
              </div>
                 :
               <div>
              <div>
              <TextField id="aadhaar" type="text" label="Aadhar Number" value={input.aadhaar} name="aadhaar" className="text_field"    inputProps={{ inputMode: 'numeric',     pattern: '[0-9]*',       }}     minLength={12} maxLength={12} onChange={handleChange} />
              </div>
                   {aadharvalid &&  <div><label className="validemail">Enter a valid Aadhar Number</label></div>}

              </div>
               }
                
              </Box>
              {!show1 &&
              <div className="save_profile">
          <button className="save_data" onClick={Save1}>Save</button></div>}
            </form>
                   
                  

           </Item>

          </Grid>

          </Grid>
          </Box>
          </div>
             }
         <Bottomnavigation/>
             <Footer/>
             </section>
             </div>
     </div>

        </>
     )
}

const mapStateToProps = state => ({
  data: state.data,
});


export default connect(mapStateToProps, { setData })(ProfileDetail);


/*       
  {preview && (
        <AvatarEditor
          width={150}
          height={150}
          border={50}
          color={[255, 255, 255, 0.6]} // Color of the crop area border
          scale={1.2} // Scale factor for zooming
          rotate={0} // Rotation angle
          borderRadius={75} // Border radius of the cropped image
          image={preview}
          onCrop={handleCrop}
          style={{ marginTop: '20px' }}
        />
      )}
     


export default ProfileDetail;
*/


