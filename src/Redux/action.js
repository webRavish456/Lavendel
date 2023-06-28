export const addToCart = () => {
    return {
      type: "ADD_TO_CART",
    };
  };

 export const SET_DATA = 'SET_DATA';

 export const setData = (data) =>
 (
  {
         type: SET_DATA,
         payload: data,
  }
 ); 
 
 export const UPDATE_RECORD_FIELD = 'UPDATE_RECORD_FIELD';

export const updateRecordField = (fieldName, fieldValue) => ({
  type: UPDATE_RECORD_FIELD,
  payload: { fieldName, fieldValue },
});

export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
export const DELETE_IMAGE = 'DELETE_IMAGE';

export const uploadImage = (imageData) => {
  return {
    type: UPLOAD_IMAGE,
    payload: imageData,
  };
};

export const deleteImage = () => {
  return {
    type: DELETE_IMAGE,
  };
};


export const PHONE="PHONE";
export const mobileNumber=(phoneNumber)=>
{
    return {
      type : PHONE,
      payload:phoneNumber,
    };
}

export const LOCATION= 'LOCATION';

export const locationUpdate = (cityname)=>
{

  return {
    type:LOCATION,
    payload:cityname,
  };

};

export const SEARCH_FILTER='SEARCH_FILTER';

export const searchFilter=(search)=>
{
  return {
    type:SEARCH_FILTER,
    payload:search,
  }
}

export const FILTER_DATA='FILTER_DATA';

export const filterData=(servicevalue)=>
{
  return {
    type: FILTER_DATA,
    payload:servicevalue,
  }
}

export const FORCE_DATA='FORCE_DATA';

export const ignoredData=(forceData)=>
{
   return {
    type:FORCE_DATA,
    payload:forceData,
   }
}

export const VARIANT='VARIANT';

export const variantdataId=(variantData)=>
{
  return {
    type:VARIANT,
    payload:variantData,
   }
}

export const CHECKOUT='CHECKOUT';

export const checkoutDetails=(checkout)=>
{
    return {
      type:CHECKOUT,
      payload:checkout
    }
}

export const COUNT1='COUNT1';

export const countnumber1=(countno1)=>
{
   return {
    type:COUNT1,
    payload:countno1
   }
}

export const COUNT2='COUNT2';

export const countnumber2=(countno2)=>
{
   return {
    type:COUNT2,
    payload:countno2
   }
}

export const  TOTALPRICE='TOTALPRICE';

export const totalPrice=(totalprice)=>
{
   return {
    type:TOTALPRICE,
    payload:totalprice
   }
}

export const COUPONS='COUPONS';

export const couponsCode=(code)=>
{
  return {
     type:COUPONS,
     payload:code
  }
}