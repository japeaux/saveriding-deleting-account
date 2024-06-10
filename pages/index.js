import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '@nextui-org/react'
import { useState } from 'react';
import axios from 'axios';

async function getData() {
  var aux =   {"user":{"email":"lucascovatti@hotmail.com","password":"lucas123"}}

  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'get',
            mode: 'no-cors',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            // body:aux,
        });

        console.log("res", res)
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }
 
  return res
}

export default function Home() {
  const [inputs, setInputs] = useState({
    email: '',
  });


  async function apiURL () {

    // const userCredentials = {
    //     user: {
    //         email: "lucascovatti@hotmail.com",
    //         password: "lucas123",
    //     },
    // };

    // const response = await fetch('https://dev-api.savebiking.com/api/v1/login', {

    //   method: 'post',
    //   headers: {
    //       'Accept': 'application/json, text/plain, */*',
    //       'Content-Type': 'application/json'
    //   },
    //   body: userCredentials,
    // })
    // console.log(response)
    // const responseData = await response.json()
    // console.log(responseData, "AIOIAJIOJOIA")



     const userCredentials = JSON.stringify({
        user: {
          email: "lucascovatti@hotmail.com",
          password: "lucas123",
        },
     })
      // const response = fetch("https://dev-api.savebiking.com/api/v1/login", {
      //     method: "POST",
      //     mode: 'cors',
      //     headers: {  
      //         'Accept': 'application/json, text/plain, */*',
      //        'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(userCredentials)
      // })
      // .then(res => {
      //   console.log(res)
      // })
 
   // https://api.savebiking.com/api/v1/login

    // fetch('https://api.savebiking.com/api/v1/login', {
    //         method: 'POST',
    //         mode:'no-cors',
    //         headers: {
    //           'Access-Control-Allow-Origin': '*',
    //           'Accept': 'application/json, text/plain, */*',
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify( userCredentials )
    //       }).then(function(res){
    //               console.log("reswwww", res)
    //               //eturn res.json(); 
    //             })
      


    var aux =   {"user":{"email":"lucascovatti@hotmail.com","password":"lucas123"}}
    var data = new FormData();
    data.append("headers",  "' 'Content-Type': 'application/json'" )
       data.append( "json",  '"email":"lucascovatti@hotmail.com","password":"lucas123"' );
       console.log("eqweqwee ",data)
        fetch("https://dev-api.savebiking.com/api/v1/login",
        {
            method: "POST",
            body: data
        })
        .then(function(res){
          console.log("res", res)
          return res.json(); 
        })
        .then(function(data){ console.log(data)  })
    

 

  }


  const [enteredPassword, setEnteredPassword] = useState("");


  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setEnteredPassword(e.target.value);
  };

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  async function onLogin() {
    try {
      const userCredentials = JSON.stringify({
        user: {
            email: inputs.email,
            password: enteredPassword,
        },
    });

    //     axios({
    //   method: 'POST',
    //   url: 'https://dev-api.savebiking.com/api/v1/login',
    //   data: userCredentials,
    // })
    //   .then((response) => {
    //     handleServerResponse(
    //       true,
    //       'Thank you, your message has been submitted.',
    //     );
    //   })
    //   .catch((error) => {
    //     handleServerResponse(false, error.response.data.error);
    //   });
    var aux =   {"user":{"email":"lucascovatti@hotmail.com","password":"lucas123"}}

    const auxresp = fetch('https://dev-api.savebiking.com/api/v1/login', {
      method: "POST",
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf8",
      },
      
      body: aux
    }).then((res) => {
      if (res.ok) {
        console.log("the login response", res);
        return res.json();
      } else {
        alert("Invalid Username or Password");
        //window.stop();
      }
    }).then(finalData=>finalData )// <---------- add this
      .catch(err=> err) 


        // const response = await fetch('https://dev-api.savebiking.com/api/v1/login', {
        //     method: 'post',
        //     mode: 'no-cors',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body:aux,
        // });
        // if (response.status == 200) {
        //     const jwt = response.headers.get('authorization');
        //     console.log(jwt)
        //       handleServerResponse(
        //         true,
        //         'Thank you, your message has been submitted.',
        //       );
               
        // } else {
        //    handleServerResponse(false, 'Error trying to delete you account, please check your password.');
        // }
    } catch (e) {
        
    }
  }
  const  handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    console.log(e, inputs.email, enteredPassword)
   // onLogin()
    apiURL()
    // axios({
    //   method: 'DELETE',
    //   url: 'https://dev-api.savebiking.com/api/v1/delete_users/me',
    //   data: inputs,
    // })
    //   .then((response) => {
    //     handleServerResponse(
    //       true,
    //       'Thank you, your message has been submitted.',
    //     );
    //   })
    //   .catch((error) => {
    //     handleServerResponse(false, error.response.data.error);
    //   });
  };
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  function onSubmit() {
    alert(email)
    console.log("riririiriiririix")
 
    // const response = await fetch('/api/submit', {
    //   method: 'POST',
    //   body: formData,
    // })
 
    // // Handle response if necessary
    // const data = await response.json()
    // // ...
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Deleting your account</title>
        <meta name="description" content="Generated by SaveRiding dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          qweqeqwe to <a href="https://saveriding.com">SaveRiding</a> deleting account
        </h1>
        

        <p className={styles.description}>
          To delete you account please confirm your email and password
        </p>

        <form onSubmit={handleOnSubmit}>
        <p className={styles.description}>
          Eqweqwemail
        </p>

        <input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />

          {/* <input type="email" name="email" /> */}
        <p className={styles.description}>
          Password
        </p>
          {/* <input type="password" name="password"   required   value={inputs.password}  /> */}
          
          <input type="password" name="password" required    value={enteredPassword}  onChange={handlePassword}/>
        
        <p className={styles.description}>
          Are you sure you want to delete your account?
        </p>

        <button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Delete my account'
              : 'Deleted'
            : 'Deletting...'}
        </button>


          {/* <button type="submit">Delete my account</button> */}

        
        </form>


        {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
