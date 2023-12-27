"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("1113368c-cc3d-436a-8ae6-e20040fd7f7a");
  }, []);

  return null;
};
