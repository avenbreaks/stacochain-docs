"use client";
import Docsly from "@docsly/react";
import "@docsly/react/styles.css";
import { usePathname } from "next/navigation";
 
export default function DocslyClient() {
  const pathname = usePathname();
  return <Docsly publicId="pk_IwiuSw0n44U2CWhUand2FXDNYSE4NpvOrl4YcJhUooAkTP3P" pathname={pathname} />;
}