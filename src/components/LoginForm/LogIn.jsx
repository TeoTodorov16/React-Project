import React, {useState, useRef} from 'react';
import '../../App.css';
import image from '../../assets/Group 19445.png';
import {useNavigate} from 'react-router-dom';
import useInput from '../../my_hooks/use_input';



const LogIn = () => {

  const [isLoading, setIsLoading] = useState(false);

  {/* Refactorying the Code ==> */} 
  
    const {
        value: enteredPass,
        isValid: enteredPassIsValid,
        hasError: passInputHasError,
        valueChangeHandler: passChangedHandler,
        inputBlurHandler: passBlurHandler,
        reset: resetPassInput,
      } = useInput((value) => value.trim() !== '');
    
      const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
      } = useInput((value) => value.includes('@'));
    
      let formIsValid = false;
    
      if (enteredPassIsValid && enteredEmailIsValid) {
        formIsValid = true;
      }
    
      const formSubmissionHandler = (event) => {
        event.preventDefault();
    
        if (!enteredPassIsValid) {
          return;
        }
    
        console.log(enteredPass);
    
        // passInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
        resetPassInput();
        resetEmailInput();
      };
    
      const passInputClasses = passInputHasError
        ? 'form-control invalid'
        : 'form-control';
    
      const emailInputClasses = emailInputHasError
        ? 'form-control invalid'
        : 'form-control';

    {/* // const passInputRef = useRef(); - Alternative to useState for listening to user input
       const [enteredPass, setEnteredPass] = useState('');
       const [enteredPassTouched, setEnteredPassTouched] = useState(false);

       const [formIsValid, setFormIsValid] = useState(false);

       const [enteredPass, setEnteredPass] = useState('');
       const [enteredPassTouched, setEnteredPassTouched] = useState(false);


     const enteredPassIsValid = enteredPass.trim() !== '';
     const passInputIsInvalid = !enteredPassIsValid && enteredPassTouched;

   useEffect(() => {
      if (enteredPassIsValid)
   }, [enteredPassIsValid]);


     const passInputChangeHandler = (event) => {
       setEnteredPass(event.target.value);
     };

     const passInputBlurHandler = event => {
        setEnteredPassTouched(true);
     }
   
     
   
     const formSubmissionHandler = (event) => {
       event.preventDefault(); {/*This is a prevent sending the HTTP request by default in the browser 
       (wont reload the page automatically)
   
       setEnteredPassTouched(true);
   
       if (!enteredPassIsValid) {
         return;
       }
      
       console.log(enteredPass);
   

       //Pass

           // const enteredValue = passInputRef.current.value; 
           // console.log(enteredValue) - { Alternative to useState for listening to user input 
           // only if we need it ones that's why i left the useState alternative because its more functional 
           // in my opinion }
   
           // passInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
           
       setEnteredPass('');
       setEnteredPassTouched(false);

     };     

    
     
     const InputClasses = passInputIsInvalid
       ? 'form-control invalid'
    : 'form-control'; */}


    {/* Refactorying the Code ==> */} 
    class Test extends React.Component {
        onClick(event) {
            makeFetch()
            sendHome()
        }
        render() {
            return (
                <a href="#" onClick={this.onClick}>Test Link</a>
            );
        }
    }

    const makeFetch = async (data) => {
        await fetch("https://books-library-dev.herokuapp.com/api/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI...'
            },
            body: JSON.stringify({
                "username": "elka",
                "password": "123456"
            }) 
        })
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = 'Authentication failed!';
              // if (data && data.error && data.error.message) {
              //   errorMessage = data.error.message;
              // }
  
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          alert(err.message);
        });

        alert("Congratulations! You are Logged In :)")
    };

    {/* Refactorying the Code ==> */} 

    const navigate = useNavigate();


    const sendHome = () => {
        navigate("/Home");
    };

    const sendSignUp = () => {
        navigate("/SignUp");
    };

    const recoverPassword = () => {
        navigate("/RecoverPassword")
    };


    {/*This is a comment*/}
    

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={passInputClasses}>
                <div className='register'>
                    <div className='col-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="338.301" height="182.362" viewBox="0 0 378.301 82.362">
                        <path id="Exclusion_1" data-name="Exclusion 1" d="M362.8,82.363a32.5,32.5,0,0,1-8.25-1.05,20.4,20.4,0,0,1-6.5-2.8l3.25-7.3a21.15,21.15,0,0,0,5.45,2.5,20.841,20.841,0,0,0,6.1.949,9.972,9.972,0,0,0,4.275-.712,2.291,2.291,0,0,0,1.425-2.137,2.368,2.368,0,0,0-1.625-2.225,30.006,30.006,0,0,0-5.225-1.526,50.18,50.18,0,0,1-6.6-1.825,11.16,11.16,0,0,1-4.55-3.125,8.484,8.484,0,0,1-1.9-5.8,10.081,10.081,0,0,1,1.75-5.775,11.762,11.762,0,0,1,5.225-4.075,21.609,21.609,0,0,1,8.526-1.5,30.209,30.209,0,0,1,6.8.776,20.919,20.919,0,0,1,5.9,2.274l-3.05,7.35a20.469,20.469,0,0,0-9.7-2.7,8.172,8.172,0,0,0-4.3.875,2.634,2.634,0,0,0-1.35,2.275,2.264,2.264,0,0,0,1.6,2.1,29.061,29.061,0,0,0,5.15,1.451,48.412,48.412,0,0,1,6.625,1.824,11.492,11.492,0,0,1,4.55,3.1,8.315,8.315,0,0,1,1.925,5.774,9.886,9.886,0,0,1-1.75,5.7,11.983,11.983,0,0,1-5.25,4.075A21.345,21.345,0,0,1,362.8,82.363Zm-73.8,0a21.03,21.03,0,0,1-9.976-2.35,17.9,17.9,0,0,1,0-31.7,22.339,22.339,0,0,1,19.95,0,17.9,17.9,0,0,1,0,31.7A21.028,21.028,0,0,1,289,82.363Zm0-28.2a9.419,9.419,0,0,0-4.8,1.25,9.028,9.028,0,0,0-3.4,3.524,11.552,11.552,0,0,0,0,10.45,9.036,9.036,0,0,0,3.4,3.525,9.841,9.841,0,0,0,9.6,0,9.033,9.033,0,0,0,3.4-3.525,11.545,11.545,0,0,0,0-10.45,9.024,9.024,0,0,0-3.4-3.524A9.418,9.418,0,0,0,289,54.163Zm-42.3,28.2a21.03,21.03,0,0,1-9.976-2.35,17.9,17.9,0,0,1,0-31.7,22.339,22.339,0,0,1,19.95,0,17.9,17.9,0,0,1,0,31.7A21.028,21.028,0,0,1,246.7,82.363Zm0-28.2a9.42,9.42,0,0,0-4.8,1.25,9.028,9.028,0,0,0-3.4,3.524,11.552,11.552,0,0,0,0,10.45,9.036,9.036,0,0,0,3.4,3.525,9.841,9.841,0,0,0,9.6,0,9.037,9.037,0,0,0,3.4-3.525,11.544,11.544,0,0,0,0-10.45,9.029,9.029,0,0,0-3.4-3.524A9.418,9.418,0,0,0,246.7,54.163Zm-108.6,28.2a20.956,20.956,0,0,1-9.9-2.325,17.432,17.432,0,0,1-6.9-6.475,18.921,18.921,0,0,1,0-18.8,17.341,17.341,0,0,1,6.95-6.475,21.478,21.478,0,0,1,10.05-2.326,22.5,22.5,0,0,1,8.8,1.651,17.034,17.034,0,0,1,6.5,4.75l-6.3,5.7a11.152,11.152,0,0,0-8.5-3.9,9.411,9.411,0,0,0-10,10,10.623,10.623,0,0,0,1.249,5.175,9,9,0,0,0,3.5,3.55,10.307,10.307,0,0,0,5.151,1.275,12.7,12.7,0,0,0,5.35-1.15v-9.6h8.75v14.5a22.916,22.916,0,0,1-6.9,3.3A27.584,27.584,0,0,1,138.1,82.363Zm185.35-.7h-9.8v-35h9.8v14.55L337,46.662h10.9l-14.3,15.5,15.049,19.5-11.5,0-10-12.7-3.7,3.95v8.75Zm-113.95,0H190.6v-35h17.9c4.446,0,7.877.833,10.2,2.475a7.8,7.8,0,0,1,3.5,6.675,8.348,8.348,0,0,1-1.225,4.475,8.594,8.594,0,0,1-3.475,3.125,9.858,9.858,0,0,1,4.7,3.275,8.628,8.628,0,0,1,1.7,5.376,8.1,8.1,0,0,1-3.7,7.1C217.745,80.821,214.145,81.662,209.5,81.662Zm-9.1-14.25h0v7.1h8.3a6.989,6.989,0,0,0,3.9-.888,3.376,3.376,0,0,0,0-5.325,6.991,6.991,0,0,0-3.9-.888h-8.3Zm0-13.6h0v6.75h6.8a6.739,6.739,0,0,0,3.749-.85,2.89,2.89,0,0,0,1.25-2.55,2.834,2.834,0,0,0-1.25-2.513,6.822,6.822,0,0,0-3.749-.837h-6.8ZM169,81.662h-9.9v-35H169Zm-55.45,0h-9.9v-35h9.9Zm-34.65,0H62.35V63.652L44.3,68.3h0V7.723L73.557.167a5.222,5.222,0,0,1,4.566.977A5.345,5.345,0,0,1,80.237,5.3V46.692a22.613,22.613,0,0,1,8.863,2.12,16.269,16.269,0,0,1,6.9,6.1,17.265,17.265,0,0,1,2.45,9.25A17.266,17.266,0,0,1,96,73.413a16.266,16.266,0,0,1-6.9,6.1A23.267,23.267,0,0,1,78.9,81.662ZM72.25,61.1V73.762H78.5a10.188,10.188,0,0,0,7.224-2.55,9.222,9.222,0,0,0,2.725-7.05,9.223,9.223,0,0,0-2.725-7.051,9.544,9.544,0,0,0-5.488-2.447V46.692c-.43-.019-.879-.03-1.337-.03H62.35V63.652Zm-36.4,7.2h0L3.974,60.024A5.3,5.3,0,0,1,0,54.887V5.388A5.347,5.347,0,0,1,2.029,1.143,5.349,5.349,0,0,1,6.511.167L35.849,7.723Zm36.4-7.2h0V54.563H78.5a14.205,14.205,0,0,1,1.736.1v.222a5.3,5.3,0,0,1-3.974,5.18L72.251,61.1Z" transform="translate(0 -0.001)" fill="#08c642"/>
                        </svg>
                        <h2 className='h2'>WELCOME BACK!</h2>
                        <section id="form" className='flex flex-col'>
                            <label className='input-text'>Email</label>
                            <input 
                              type='email' 
                              placeholder='Email'
                              id='email'
                              onChange={emailChangeHandler}
                              onBlur={emailBlurHandler}
                              value={enteredEmail}
                            />
                            {emailInputHasError && (
                            <p className='error-text'>Please enter a valid email.</p>
                            )}
                            <label className='input-text'>Password</label>  
                            <input
                              type='password'
                              placeholder='Password' 
                              onChange={passChangedHandler}
                              onBlur={passBlurHandler}
                              value={enteredPass}
                              />
                            {passInputHasError && (
                            <p className='error-text'>Password must not be empty.</p>
                            )} 
                            <a href="#" className='recover-pass' onClick={recoverPassword}>Recover password</a>
                            <br></br>
                            <button disabled={!formIsValid} className="btn" onClick={() => { makeFetch(); sendHome();}}>LOG IN</button>
                            <br></br>
                            <label>You don't have an account? <a href="#" onClick={sendSignUp}>SIGN UP HERE</a></label>
                        </section>
                    </div>
                    <div className='col-2'>
                        <img src={image} alt=''></img>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default LogIn
