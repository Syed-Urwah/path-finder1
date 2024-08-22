"use client"
import React, { useEffect } from 'react'

export default function page() {

    useEffect(() => {
        // Create a script element
        const script: any = document.createElement('script');
        
        // Set the script attributes
        script.type = 'text/javascript';
        script.src = 'https://public-assets.typeform.com/public/oauthbtn/btn.min.js';
        script.name = 'tf-login-button';
        script.setAttribute('data-scope', 'forms:write');
        script.setAttribute('data-redirect_uri', 'http://localhost:3000/callback');
        // script.setAttribute('data-state', '{state}');
        script.setAttribute('data-client_id', 'BBpWgmNpVfLvY3MwPgE1U8u1yArzEJyFwaHzhrX6PnXE');
    
        // Append the script to the body or any other specific element
        document.body.appendChild(script);
    
        // Cleanup the script when the component is unmounted
        return () => {
          document.body.removeChild(script);
        };
      }, []);

  return (
    <>
     
    <div className='tf-login-button'>login</div>
    
    </>
  )
}
