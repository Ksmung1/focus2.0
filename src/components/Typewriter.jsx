import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

const TypingEffect = () => {
  const [showSecondText, setShowSecondText] = useState(false);

  useEffect(() => {
    // Set a timer to switch to the second paragraph after the first completes
    const timer = setTimeout(() => {
      setShowSecondText(true);
    }, 3000); // Adjust time based on typewriter speed (7 seconds as an example)

    return () => clearTimeout(timer); // Cleanup timer when component unmounts
  }, []);

  return (
    <div className="type-effect">
      <p className="courier-prime" style={{ color: 'white' }}>
        {showSecondText ? (
          <Typewriter
            options={{
              strings: [
                `At FOCUS, we help you PLAN, LEARN and ACCOMPLISH More in less time.`
              ],
              autoStart: true,
              loop: false,
              delay: 20,
              cursor: '|'
            }}
          />
        ) : (
          <Typewriter
            options={{
              strings: [
                `Systematize your exam preparations, Learn new tips and tricks and Boost your productivity.
                `
              ],
              autoStart: true,
              loop: false,
              delay: 15,
              cursor: '|'
            }}
          />
        )}
      </p>
    </div>
  );
};

export default TypingEffect;
