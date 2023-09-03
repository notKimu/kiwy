const reset = "\u001b[0m";

/**NORMAL COLORS */
export function blackBackground(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return (
    "\u001b[40m" +
    formattedData.join(" ").replace(/(\s)/g, function ($0) {
      return $0 == " " ? " " : reset + $0 + "\u001b[40m";
    }) +
    reset
  );
}

export function blueBackground(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return (
    "\u001b[44m" +
    formattedData.join(" ").replace(/(\s)/g, function ($0) {
      return $0 == " " ? " " : reset + $0 + "\u001b[44m";
    }) +
    reset
  );
}

export function cyanBackground(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return (
    "\u001b[46m" +
    formattedData.join(" ").replace(/(\s)/g, function ($0) {
      return $0 == " " ? " " : reset + $0 + "\u001b[46m";
    }) +
    reset
  );
}

export function greenBackground(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return (
    "\u001b[42m" +
    formattedData.join(" ").replace(/(\s)/g, function ($0) {
      return $0 == " " ? " " : reset + $0 + "\u001b[42m";
    }) +
    reset
  );
}

export function magentaBackground(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return (
    "\u001b[45m" +
    formattedData.join(" ").replace(/(\s)/g, function ($0) {
      return $0 == " " ? " " : reset + $0 + "\u001b[45m";
    }) +
    reset
  );
}

export function redBackground(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return (
    "\u001b[41m" +
    formattedData.join(" ").replace(/(\s)/g, function ($0) {
      return $0 == " " ? " " : reset + $0 + "\u001b[41m";
    }) +
    reset
  );
}

export function whiteBackground(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return (
    "\u001b[47m" +
    formattedData.join(" ").replace(/(\s)/g, function ($0) {
      return $0 == " " ? " " : reset + $0 + "\u001b[47m";
    }) +
    reset
  );
}

export function yellowBackground(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return (
    "\u001b[43m" +
    formattedData.join(" ").replace(/(\s)/g, function ($0) {
      return $0 == " " ? " " : reset + $0 + "\u001b[43m";
    }) +
    reset
  );
}

/**BRIGHT COLORS */
export function brightBlackBackground(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return (
    "\u001b[40;1m" +
    formattedData.join(" ").replace(/(\s)/g, function ($0) {
      return $0 == " " ? " " : reset + $0 + "\u001b[40;1m";
    }) +
    reset
  );
}

export function brightBlueBackground(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return (
    "\u001b[44;1m" +
    formattedData.join(" ").replace(/(\s)/g, function ($0) {
      return $0 == " " ? " " : reset + $0 + "\u001b[44;1m";
    }) +
    reset
  );
}

export function brightCyanBackground(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return (
    "\u001b[46;1m" +
    formattedData.join(" ").replace(/(\s)/g, function ($0) {
      return $0 == " " ? " " : reset + $0 + "\u001b[46;1m";
    }) +
    reset
  );
}

export function brightGreenBackground(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return (
    "\u001b[42;1m" +
    formattedData.join(" ").replace(/(\s)/g, function ($0) {
      return $0 == " " ? " " : reset + $0 + "\u001b[42;1m";
    }) +
    reset
  );
}

export function brightMagentaBackground(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return (
    "\u001b[45;1m" +
    formattedData.join(" ").replace(/(\s)/g, function ($0) {
      return $0 == " " ? " " : reset + $0 + "\u001b[45;1m";
    }) +
    reset
  );
}

export function brightRedBackground(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return (
    "\u001b[41;1m" +
    formattedData.join(" ").replace(/(\s)/g, function ($0) {
      return $0 == " " ? " " : reset + $0 + "\u001b[41;1m";
    }) +
    reset
  );
}

export function brightWhiteBackground(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return (
    "\u001b[47;1m" +
    formattedData.join(" ").replace(/(\s)/g, function ($0) {
      return $0 == " " ? " " : reset + $0 + "\u001b[47;1m";
    }) +
    reset
  );
}

export function brightYellowBackground(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return (
    "\u001b[43;1m" +
    formattedData.join(" ").replace(/(\s)/g, function ($0) {
      return $0 == " " ? " " : reset + $0 + "\u001b[43;1m";
    }) +
    reset
  );
}
