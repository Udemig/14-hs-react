import { FC } from "react";
import { featureList } from "@/utils/constants";

const Features: FC = () => {
  return (
    <div className="my-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {featureList.map((feature, key) => (
        <div key={key} className={`flex items-center gap-4 p-4 rounded-lg ${feature.color}`}>
          {feature.icon}

          <div>
            <h3 className="font-semibold">{feature.title}</h3>
            <p className="text-zinc-800">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
