import React from 'react';

const ArchiveItems = ({addArchive}) => {
  return(
    <div>
      <h1>Archive</h1>
        <form>
          {addArchive}
        </form>
    </div>
  )
        
  }

export default ArchiveItems;