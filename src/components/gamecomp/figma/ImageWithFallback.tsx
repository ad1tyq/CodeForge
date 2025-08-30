"use client"

import React, { useState } from 'react'
import Image from 'next/image';

const ERROR_IMG_SRC = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src?: string;
  fallbackSrc?: string;
}

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, fallbackSrc = ERROR_IMG_SRC, ...rest } = props

  // Extract width and height from rest props and convert to numbers if needed
  const width = rest.width ? Number(rest.width) : 50;
  const height = rest.height ? Number(rest.height) : 50;

  // Remove width and height from rest to avoid conflicts
  const { width: _, height: __, ...filteredRest } = rest;

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <Image 
          width={width} 
          height={height} 
          src={fallbackSrc} 
          alt="Error loading image" 
          {...filteredRest} 
          data-original-url={src} 
        />
      </div>
    </div>
  ) : (
    <Image 
      width={width} 
      height={height} 
      src={src || ''} 
      alt={alt || ''} 
      className={className} 
      style={style} 
      {...filteredRest} 
      onError={handleError} 
    />
  )
}