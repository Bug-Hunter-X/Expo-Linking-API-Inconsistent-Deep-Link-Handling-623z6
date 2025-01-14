// bugSolution.js
import * as Linking from 'expo-linking';
import { useEffect, useState } from 'react';

export default function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrl = (url) => {
      setInitialUrl(url);
    };

    Linking.addEventListener('url', handleUrl);

    // Get initial URL if app opened with a link
    Linking.getInitialURL().then(url => {
      if (url) {
        setInitialUrl(url);
      }
    });
    
    return () => Linking.removeEventListener('url', handleUrl); 
  }, []);

  // ... rest of the app, handling initialUrl
  if (initialUrl) {
    //Process deep link
    console.log('Deep Link received:', initialUrl);
  }

  return (
    // ... your app UI
  );
}