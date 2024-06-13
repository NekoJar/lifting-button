"use client";
import { stagger, useAnimate } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

interface NavLinksProps {
  href: string;
  label: string;
}

export const LiftingButton = ({ href, label }: NavLinksProps) => {
  return (
    <Link href={href} className="overflow-hidden relative z-50">
      {label}
    </Link>
  );
};
