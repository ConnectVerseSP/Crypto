import React from 'react';
import Typewriter from 'typewriter-effect';
import './Home.module.css'; // Import the CSS module

const Home = ({string}) => {

    const typewriterStyles = {
        fontFamily: 'Arial, sans-serif',
        fontSize: '48px',
        fontWeight: 'bold',
        color: 'orange', // Change the text color to your preference
        // backgroundColor: 'rgb(52,58,64)', // Change the background color to your preference

        backgroundIimage: 'linear-gradient(to bottom right, #ff0000, #ff8080)',
        padding: '20px',
        // borderRadius: '12px',
        // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Add a subtle box shadow
        textAlign: 'center',
      };
  return (
    <div class="container"> {/* Use the styles.container to apply the CSS module */}
      <div class="typewriter-container"> {/* Apply the typewriter-container class */}
      <div style={typewriterStyles} >
        <Typewriter
          options={{
            strings: string,
            autoStart: true,
            loop: true,
          }}

          
        />
        </div>
      </div>
    </div>
  );
};

export default Home;
