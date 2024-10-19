'use client'

import { useState } from 'react';


export const RD = () => {
    const [resumeDescription, setresumeDescription] = useState('');


    return (
        <>
            <textarea
                placeholder="Copy Job Description Here"
                onchange={(e) => setresumeDescription(e.target.value)}
            ></textarea>
            <button type='submit'>Submit</button>
        </>
    )
}
