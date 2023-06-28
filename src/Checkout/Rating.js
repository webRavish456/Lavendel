import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import { createTheme, useMediaQuery } from '@mui/material';
import StarRatings from 'react-star-ratings';
import Ratingskeleton from "./Ratingskeleton";
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';


const Item = styled(Paper)(({ theme }) => ({
    
  ...theme.typography.body2,
  padding: theme.spacing(1),
  zIndex:-999,
}));
const Ratings=()=>
{

  const theme = createTheme({
    breakpoints: {
      values: {
        md: 0,
        sm: 768,
      },
    },
  });

    const [item, setItem] = useState('');

    const access= JSON.parse(localStorage.getItem("access_token"));
 
    const Baseurl=process.env.REACT_APP_BASE_URL;

    const [progress1, setProgress1] = useState(0);
    const [progress2, setProgress2] = useState(0);
    const [progress3, setProgress3] = useState(0);
    const [progress4, setProgress4] = useState(0);
    const [progress5, setProgress5] = useState(0);
    const [review, setReview] = useState('');
    const [show, setShow] = useState(false);
    const [data, setData] = useState([]);

   

    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const navigate = useNavigate();

    const subsetOfData = data.slice(0, 3);

   const [loading, setloading]=useState(true);

   const [selectedImage, setSelectedImage] = useState(null);
  
   const [selectedReview, setSelectedReview] = useState(null);

    useEffect(()=>
    {
      
    
    
        setloading(true);
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${access}` );
    
         var requestOptions = {
          method: 'GET',
          headers: myHeaders,
           redirect: 'follow'
      };
      
       fetch(`${Baseurl}/get-reviews/1/`, requestOptions)
        .then(response => response.text())
        .then(result => {
          const data=JSON.parse(result);
          const  Categorydata = data.review_counter;
         
          const Reviewdata = data.reviews
 
         

        console.log(Reviewdata[0].review_image_gallery);

          setItem( Categorydata );
          setData(Reviewdata);
          setloading(false);
    
        })
        .catch(error => console.log('error', error));
      
      
    
    },[])

    useEffect(() => {

    
          

        const fetchProgressFromAPI = async () => {
          try {
  
            const fetchedProgress = item.total_count; 
        
            setProgress1((item.separated.rate_5/fetchedProgress)*100);

            setProgress2((item.separated.rate_4/fetchedProgress)*100);
            setProgress3((item.separated.rate_3/fetchedProgress)*100);
            setProgress4((item.separated.rate_2/fetchedProgress)*100);
            setProgress5((item.separated.rate_1/fetchedProgress)*100);

            console.log(item.separated.rate_5)

            setShow(true);


          } catch (error) {
            console.error('Error fetching progress:', error);
            setShow(false);
          }
        };
    
        fetchProgressFromAPI();
      
      }, [progress1, progress2, progress3, progress4, progress5,item]);

      const customStyles = {
        '& .MuiLinearProgress-bar': {
          backgroundColor: 'green', 
        },
      };
      const customStyles2 = {
        '& .MuiLinearProgress-bar': {
          backgroundColor: 'orange', 
        },
      };

      const customStyles3 = {
        '& .MuiLinearProgress-bar': {
          backgroundColor: 'red', 
        },
      };
 
    


      const reviewall=()=>
      {

        const locationname = JSON.parse(localStorage.getItem('location'));

         const reviewdetail = JSON.parse(localStorage.getItem('service'));

          navigate(`/review?${'city'}=${locationname}&${'service'}=${reviewdetail} `);
    
          const searchParams= new URLSearchParams(window.location.search);
          searchParams.set("user", "reviews")
          const newUrl = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`;
           window.history.replaceState(null, '', newUrl);


      }

      const picture=(image)=>
      {
          
          setSelectedImage(image);
          const review = subsetOfData.find((cur) =>
          cur.review_image_gallery.some((img) => img.image_id === image.image_id)
        );
        setSelectedReview(review);
      }
      const handle=()=>
      {
        setSelectedImage(null);
      }

   return (
    <>   
              
            
             {loading ?  
            <>
            <section className="section">
            <h1 className=" head_title explore">Ratings & Reviews</h1>
            <Ratingskeleton/>
            </section>
            </>
            
            :


              <section className="section">

             <Item>
           
             <div className="item_additional">
             <div className="item_review">
          <h1 className="head_title explore">Ratings & Reviews</h1>
         
          <div className="secondary_title all-reviews" onClick={reviewall}>View All Reviews({item.total_count})</div>
              </div>
           
           
             

          <Box sx={{width:"100%"}}   >
          <Grid container rowSpacing={2}  columnSpacing={{xs:2, sm:3, md:4}} display="flex" alignItems="center" padding="10px 0px">
       
         <Grid item className="rating_review_datas" >
         <div >
           <div className="rating_average_value">{item.average}</div>
           <div className="star_value_data">
           <StarRatings rating={item.average}   starRatedColor="rgb(2, 74, 2)"  numberOfStars={5}  name='rating'  starDimension="15px"   starSpacing="4px"   />
           </div>
           </div>

         </Grid>



           <Grid item xs={5}  sm={isSmScreen ? 6 :'none'} md="none" className="reveiwing_data">

           <div className="rating_review_data">
           <div className="rating_average_value">{item.average}</div>
           <div className="star_value_data">
           <StarRatings rating={item.average}   starRatedColor="rgb(2, 74, 2)"  numberOfStars={5}  name='rating'  starDimension="15px"   starSpacing="4px"   />
           </div>
           </div>

           </Grid>
          

          <Grid item  xs={7}  sm={isSmScreen ? 6 : 6} md={6}>

        <div className="show_rating"> 
         <div className="starrating">5
          <div> <StarIcon className="starvalue"/></div>
        </div>
        <LinearProgress variant="determinate" value={progress1}  sx={customStyles} color="inherit" />
      {show &&  <div className="show_rated">{item.separated.rate_5}</div> }
        </div> 

        <div className="show_rating">
        <div className="starrating">4
          <div> <StarIcon  className="starvalue"/></div>
        </div>
          <LinearProgress variant="determinate" value={progress2}  sx={customStyles} color="inherit"/>
          {show &&     <div className="show_rated">{item.separated.rate_4}</div>}
        </div>

          <div className="show_rating">
          <div className="starrating">3
          <div> <StarIcon  className="starvalue"/></div>
        </div>
          <LinearProgress variant="determinate" value={progress3} sx={customStyles} color="inherit" />
          {show &&     <div className="show_rated">{item.separated.rate_3}</div>}
          </div>

          <div className="show_rating">
          <div className="starrating">2
          <div> <StarIcon  className="starvalue"/></div>
        </div>
          <LinearProgress variant="determinate" value={progress4} sx={customStyles2} color="inherit" />
          {show &&   <div className="show_rated">{item.separated.rate_2}</div>}
          </div>

          <div className="show_rating">
          <div className="starrating">1
          <div> <StarIcon  className="starvalue"/></div>
        </div>
        <LinearProgress variant="determinate" value={progress5} sx={customStyles3} color="inherit" /> 
        {show &&   <div className="show_rated">{item.separated.rate_1}</div>}

          </div>
          </Grid>
    
          </Grid>
        </Box>
         
          <Box sx={{width:"100%"}}>
         
          <span className="secondary_title">What Customer Said</span>
          <Grid container>

          <Grid item xs={12} sm={12} md={12} >
        
         <div className="review_data">

          {subsetOfData.map(cur=>
          {
              return (
                <>

                 
                    <div className="overall_review">
                    
                    <div className="overall_caption">
                    <div>{cur.caption}</div>
                    <div className="overall_starrating">
                    <div>{cur.overall}</div>
                    <StarIcon  className="starvalues"/>
                 </div>
                    
                    </div>
                    <div className="review_message">{cur.review_message}</div>
                    <div className="review_name">{cur.first_name} {cur.last_name} {cur.date}</div>
                   
                  <div  className="image_data">
                     {cur.review_image_gallery.map(image=>
                     {
                          return (
                            <>
                                 <div  onClick={()=>picture(image)}>
                                <img className="image_picture" key={image.image_id} src={image.image_url} alt={`Review ${review.review_id} Image`}   />
                                </div>
                            </>
                          )
                     })}
                     </div>
         
                    {selectedImage && <Modal open={Boolean(selectedImage)}>

                     <div className="gallery_imagedata">
                   

                                  <div className="review_imageshow">
                              
                                <div className="image_datashow">
                                 <img className="image_datas" src={selectedImage.image_url} alt="logo" style={{width:"100%"}}   /> 
                                 </div>

                             <div className="overall_data">

                             <div className="right_images">
           
                             <div className="closeicon" ><CloseIcon style={{transform:"scale(1.2)"}} onClick={handle}/></div> 
                            
                             {selectedReview && (
                      <>
                        <div className="overall_caption">
                          <div>{selectedReview.caption}</div>
                          <div className="overall_starrating">
                            <div>{selectedReview.overall}</div>
                            <StarIcon className="starvalues" />
                          </div>
                        </div>
                        <div className="review_message">
                          {selectedReview.review_message}
                        </div>
                        <div className="review_name">
                          {selectedReview.first_name} {selectedReview.last_name} {selectedReview.date}
                        </div>
                      </>
                    )}
                         
                             
                              
                                   </div>
                                   </div>
                                  
                                   </div>
                              
                     

                              
                            
                     </div>
                   
                     </Modal>}

                    </div>
                </>
              )

          })}

                 
          </div>
          </Grid>
              
              </Grid>
              </Box>
            
              </div>
             
          </Item>
              
          </section>
             }
    </>
   )

}

export default Ratings;

