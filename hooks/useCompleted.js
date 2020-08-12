import React, {useState} from 'react';

export const useCompleted = () => {
  const [completed, setCompleted] = useState(false)

  const handleComplete = () => {
    setCompleted(!completed)
    // Do STH with
  }
  // SOME COMPLEX LOGIX

  return [completed, handleComplete]
}
