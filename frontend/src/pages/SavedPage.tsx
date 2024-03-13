import React from 'react';

interface SavedPageProps {
  path: string; 
}

const SavedPage: React.FC<SavedPageProps> = ({ path }) => {
  return <div>Saved Page</div>;
};

export default SavedPage;
