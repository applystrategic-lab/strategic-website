"use client";

import GoldPlane from "./GoldPlane";

export default function AirplaneOrbit() {
  return (
    <div
      className="
        absolute
        inset-0
        pointer-events-none
      "
    >
      <div
        className="airplane-flight"
      >
        <GoldPlane />
      </div>
    </div>
  );
}