import React from "react";

export default function DJBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* BASE */}
      <div className="absolute inset-0 bg-[#050b1a]" />

      {/* LIGHT 1 */}
      <div className="dj-light light-1"></div>

      {/* LIGHT 2 */}
      <div className="dj-light light-2"></div>

      {/* LIGHT 3 */}
      <div className="dj-light light-3"></div>

    </div>
  );
}
