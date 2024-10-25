export const formatDateTime = (dateString: string) => {
  const date = new Date(dateString);
  // Get the formatted date and time separately
  const formattedDate = date.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return `${formattedDate}, ${formattedTime}`;
};

// Formate date
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

// Get time left
export const calculateTimeLeft = (dueDate: string, isDateString: boolean) => {
  const now = new Date().getTime();
  const due = new Date(dueDate).getTime();
  const diff = due - now;

  if (diff < 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  let timeString = "";
  if (days > 0) {
    timeString += `${days}d `;
  }
  if (hours > 0 || days > 0) {
    timeString += `${hours}h `;
  }
  timeString += `${minutes}m`;

  return isDateString ? `${timeString} (${formatDate(dueDate)})` : timeString;
};

// Get time passed
export const calculateTimePassed = (createdDate: string) => {
  const now = new Date().getTime();
  const created = new Date(createdDate).getTime();
  const diff = now - created;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  let timeString = "";
  if (days > 0) {
    timeString += `${days}d `;
  }
  if (hours > 0 || days > 0) {
    timeString += `${hours}h `;
  }
  timeString += `${minutes}m`;

  return timeString;
};

// Get time due date
export const calculateTimeOverdue = (dueDate: string) => {
  const now = new Date().getTime();
  const due = new Date(dueDate).getTime();
  const diff = now - due;

  if (diff < 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  let timeString = "";
  if (days > 0) {
    timeString += `${days}d `;
  }
  if (hours > 0 || days > 0) {
    timeString += `${hours}h `;
  }
  timeString += `${minutes}m`;

  return timeString;
};

// Get date posted in form of string
export function timeAgo(inputTime: string): string {
  const currentTime = new Date().getTime();
  const pastTime = new Date(inputTime).getTime();

  const timeDifference = currentTime - pastTime;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);

  if (months >= 1) {
    return months === 1 ? "1 month ago" : `${months} months ago`;
  }
  if (days >= 1) {
    return days === 1 ? "1 day ago" : `${days} days ago`;
  }
  if (hours >= 1) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  }
  if (minutes >= 1) {
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  }
  return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
}

// Get due date from iso string
export const formatDueDate = (dueDate: string) => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const dueDateObj = new Date(dueDate);

  // Reset time portion for accurate date comparison
  const stripTime = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const strippedDueDate = stripTime(dueDateObj);
  const strippedToday = stripTime(today);
  const strippedTomorrow = stripTime(tomorrow);

  // Define color schemes
  const colorSchemes = {
    today: {
      text: "#EE7360",
      icon: "#EE7360",
    },
    tomorrow: {
      text: "#FFE58E",
      icon: "#FFE58E",
    },
    future: {
      text: "#FFFFFF",
      icon: "#FFFFFF",
    },
  };

  if (strippedDueDate.getTime() === strippedToday.getTime()) {
    return {
      text: "Today",
      colorScheme: colorSchemes.today,
    };
  }

  if (strippedDueDate.getTime() === strippedTomorrow.getTime()) {
    return {
      text: "Tomorrow",
      colorScheme: colorSchemes.tomorrow,
    };
  }

  // Format future dates
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formattedDate = `${days[dueDateObj.getDay()]}, ${dueDateObj.getDate()} ${months[dueDateObj.getMonth()]}`;

  return {
    text: formattedDate,
    colorScheme: colorSchemes.future,
  };
};
