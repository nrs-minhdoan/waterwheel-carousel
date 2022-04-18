import React, { useRef } from 'react';
import Slider from './Slider.jsx';

function App() {
  const ref = useRef(null);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#37a4e8',
        width: '100vw',
        height: '100vh'
      }}
    >
      <Slider ref={ref} />
      {/* <button onClick={() => ref.current.prev()} style={{ zIndex: 9999 }}>
        Prev
      </button>
      <button onClick={() => ref.current.next()} style={{ zIndex: 9999 }}>
        Next
      </button> */}
    </div>
  );
}

export default App;
