import React, { useState, useCallback } from 'react';
import { useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. 

export function Assignment2() {
    const [count, setCount] = useState(0);

    const ReRendered = useRef(0);

    const handleReRender = () => {
        // Update state to force re-render
        setCount(count + 1);
    };

    ReRendered.current = ReRendered.current + 1;

    return (
        <div>
            <p>This component has rendered {ReRendered.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};