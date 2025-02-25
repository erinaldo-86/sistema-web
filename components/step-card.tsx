import React from "react";

interface StepCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

const StepCard: React.FC<StepCardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg shadow-md">
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary text-primary-foreground mb-2">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground text-center">{description}</p>
    </div>
  );
};

export default StepCard;
