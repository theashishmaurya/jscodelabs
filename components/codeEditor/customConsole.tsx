"use client";

import React, { useState, useEffect } from "react";
import { Console, Hook, Unhook } from "console-feed";
import { useSandpack, useSandpackConsole } from "@codesandbox/sandpack-react";

const LogsContainer = () => {
  const { logs, reset } = useSandpackConsole({ resetOnPreviewRestart: true });
  // run once!
  //   useEffect(() => {
  //     const hookedConsole = Hook(
  //       window.console,
  //       (log) => setLogs((currLogs: any) => [...currLogs, log]),
  //       false
  //     );

  //     return () => {
  //       Unhook(hookedConsole);
  //     };
  //   }, []);

  console.log(logs);

  return (
    <div style={{ backgroundColor: "#242424", width: "100%", height: "50vh" }}>
      <Console logs={logs as any} variant="dark" />
    </div>
  );
};

export { LogsContainer };
