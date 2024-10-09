import React from 'react';

interface LoadingWrapperProps {
  isLoading: boolean;
  style?: React.CSSProperties;
  children: React.ReactNode;
  hideContentWhileLoading?: boolean;
  fullHeight?: boolean;
  className?: string;
  id?: string;
}

export const LoadingWrapper: React.FC<LoadingWrapperProps> = ({
  children,
  isLoading,
  hideContentWhileLoading = false,
  style = {},
  fullHeight = false,
  className,
  id,
}) => {
  return (
    <div
      id={id}
      className={`relative ${fullHeight ? 'h-full w-full flex justify-center' : 'h-inherit'} ${
        isLoading && 'h-full'
      } ${className}`}
      style={style}
    >
      {hideContentWhileLoading && isLoading ? null : children}
      {isLoading ? (
        <div className="absolute top-0 h-full w-full flex justify-center items-center bg-mask">
         <span className="loader" />
        </div>
      ) : null}
    </div>
  );
};

