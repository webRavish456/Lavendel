
import { CHECKOUT, COUPONS, FILTER_DATA, FORCE_DATA, LOCATION, PHONE, SEARCH_FILTER, SET_DATA, TOTALPRICE, VARIANT } from "./action";
import { UPDATE_RECORD_FIELD, COUNT1, COUNT2 } from './action';
import { UPLOAD_IMAGE, DELETE_IMAGE } from './action';

const initialState = {
    cartItems: 0,
    data:null,
    image: null,
    cityname:[],
    phone:null,
    search:[],
    servicevalue:'',
    forceData:'',
    variantData:'',
    checkout:[],
    countno1:"",
    countno2:"",
    totalprice:"",
    code:"",
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cartItems: state.cartItems + 1,
        };

        case SET_DATA:
          return {
            ...state,
            data: action.payload,
          };

        case UPDATE_RECORD_FIELD:
      return {
        ...state,
        [action.payload.fieldName]: action.payload.fieldValue,
      };

      case UPLOAD_IMAGE:
        return {
          ...state,
          image: action.payload,
        };
      case DELETE_IMAGE:
        return {
          ...state,
          image: null,
        };

      case PHONE:
        return {
          ...state,
          phone:action.payload,
        }

        case LOCATION:
           return   {
               ...state,
               cityname:action.payload,

            };
            
          case SEARCH_FILTER:
            return {
              ...state,
              search:action.payload,
            }
          
          case FILTER_DATA:
            return {
              ...state,
              servicevalue:action.payload,
            }
            case FORCE_DATA:
            return{
              ...state,
              forceData:action.payload,
            }

            case VARIANT:
              return {
                ...state,
                variantData:action.payload,
              }

              case CHECKOUT:
                return {
                  ...state,
                  checkout:action.payload,
                }

                case COUNT1:
                  return {
                    ...state,
                    countno1:action.payload,
                  }

                  case COUNT2:
                    return {
                      ...state,
                      countno2:action.payload,
                    }
                

                    case TOTALPRICE:
                      return {
                        ...state,
                        totalprice:action.payload,

                      }

                      case COUPONS:
                        return{
                          ...state,
                          code:action.payload,
                        }
      default:
        return state;
    }
  };
  
  export default cartReducer;

  