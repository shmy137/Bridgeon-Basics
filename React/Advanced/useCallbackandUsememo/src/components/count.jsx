import React, { memo } from "react";

function Count({ count, text }) {
  console.log(`rendering ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
}

export default memo(Count);

