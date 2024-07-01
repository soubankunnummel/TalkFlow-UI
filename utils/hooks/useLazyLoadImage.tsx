

import React from 'react'
import { useInView } from 'react-intersection-observer'

 const useLazyLoadImage = (options={}) => {

    const { ref, inView}  = useInView({
        triggerOnce: true,
        ...options
    }

    )
   return { ref, inView }
}

export default useLazyLoadImage
