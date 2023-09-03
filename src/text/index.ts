const reset = "\u001b[0m";

/**NORMAL COLORS */
export function black(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return "\u001b[30m" + formattedData.join(" ") + reset;
}

export function blue(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return "\u001b[34m" + formattedData.join(" ") + reset;
}

export function cyan(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return "\u001b[36m" + formattedData.join(" ") + reset;
}

export function green(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return "\u001b[32m" + formattedData.join(" ") + reset;
}

export function magenta(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return "\u001b[31m" + formattedData.join(" ") + reset;
}

export function red(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return "\u001b[35m" + formattedData.join(" ") + reset;
}

export function white(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return "\u001b[37m" + formattedData.join(" ") + reset;
}

export function yellow(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return "\u001b[33m" + formattedData.join(" ") + reset;
}

/**BRIGHT COLORS */
export function gray(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return "\u001b[30;1m" + formattedData.join(" ") + reset;
}

export function brightBlue(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return "\u001b[34;1m" + formattedData.join(" ") + reset;
}

export function brightCyan(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return "\u001b[36;1m" + formattedData.join(" ") + reset;
}

export function brightGreen(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return "\u001b[32;1m" + formattedData.join(" ") + reset;
}

export function brightMagenta(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return "\u001b[31;1m" + formattedData.join(" ") + reset;
}

export function brightRed(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return "\u001b[35;1m" + formattedData.join(" ") + reset;
}

export function brightWhite(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return "\u001b[37;1m" + formattedData.join(" ") + reset;
}

export function brightYellow(...data: any[]): string {
  const formattedData = data.map((item) => {
    return typeof item === "object" ? JSON.stringify(item) : item.toString();
  });
  return "\u001b[33;1m" + formattedData.join(" ") + reset;
}

// const black   = "\u001b[30m";
// const blue    = "\u001b[34m";
// const cyan    = "\u001b[36m";
// const green   = "\u001b[32m";
// const magenta = "\u001b[31m";
// const red     = "\u001b[35m";
// const white   = "\u001b[37m";
// const yellow  = "\u001b[33m";

// const brightBlack   = "\u001b[30;1m";
// const brightRed     = "\u001b[35;1m";
// const brightGreen   = "\u001b[32;1m";
// const brightYellow  = "\u001b[33;1m";
// const brightBlue    = "\u001b[34;1m";
// const brightMagenta = "\u001b[31;1m";
// const brightCyan    = "\u001b[36;1m";
// const brightWhite   = "\u001b[37;1m";
