import { useEffect, useState } from "react";

// Utility function to calculate time since a given date
function timeSince(date:Date):string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return `${interval} y `;
  }

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return `${interval} m `;
  }

  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return `${interval} d `;
  }

  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return `${interval} h `;
  }

  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return `${interval} min `;
  }

  return `${Math.floor(seconds)} sec `;
}

function TimeAgo({ date}:any) {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const createdDate = new Date(date);
    setTimeAgo(timeSince(createdDate));

    // Update the time ago every minute to keep it accurate
    const interval = setInterval(() => {
      setTimeAgo(timeSince(createdDate));
    }, 60000);

    return () => clearInterval(interval);
  }, [date]);

  return <span>{timeAgo}</span>;
}

export default TimeAgo;
