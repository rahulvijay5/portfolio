import { DockToUse } from "@/components/Dock";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <div className="bottom-6 sticky mx-auto w-full">
        <DockToUse />
      </div>
    </div>
  );
};

export default layout;
