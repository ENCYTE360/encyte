"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Card from "@components/ui/card";




; // Adjusted the import path to use relative imports

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Encyte: Optimize Your Health and Performance</h1>
      <p className="mt-2 text-lg text-gray-400">
        AI-driven health & fitness insights tailored to you. Track recovery, hydration, fueling and training
      </p>
      
      <div className="mt-6 flex gap-4">
        <button className="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md">Get Early Access</button>
        <button className="px-6 py-2 bg-gray-600 hover:bg-gray-800 text-white rounded-md">Sign In</button>
      </div>
      
      {/* Card Component Usage */}
      <Card className="mt-6">
        <p>Your Encyte Score: <span className="text-green-400 font-bold">85</span></p>
      </Card>
    </div>
  );
}