import React from 'react';

const ButtonLists = () => {
  const buttonTitles = [
    'All',
    'Music',
    'Guided Meditation',
    'Javascript',
    'CID',
    'Data Structures',
    'Live',
    'Recently Uploaded',
    'Git'
  ];

  return (
    <div>
      {buttonTitles.map((title, index) => (
        <button
          key={index}
          className='px-5 py-2 m-2 rounded-lg bg-gray-200 hover:bg-black hover:text-white'
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default ButtonLists;
