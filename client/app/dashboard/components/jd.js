'use client'

import { useState } from 'react';


export const JD = () => {
    const [jobDescription, setJobDescription] = useState('');


    return (
        <>
            <textarea
                placeholder="Copy Job Description Here"
                onchange={(e) => setJobDescription(e.target.value)}
            ></textarea>
            <button type='submit'>Submit</button>
        </>
    )
}
