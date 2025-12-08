import type { FC } from "react";
import type { Car } from "../../types";
import { motion } from "motion/react";
import { driveOptions } from "../../constants";

interface Props {
  car: Car;
}

const Info: FC<Props> = ({ car }) => {
  // ekrana basılacak elemanlar
  const arr = [
    {
      icon: "/steering-wheel.svg",
      text: car?.trany.includes("Automatic") ? "Auto" : "Manual",
    },
    {
      icon: "/tire.svg",
      text: driveOptions[car.drive] || "Bilinmiyor",
    },
    {
      icon: "/calendar.svg",
      text: car?.year || "Bilinmiyor",
    },
  ];

  // animasyon ayarları
  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },

    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="flex-between">
      {arr.map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          variants={variants}
          transition={{ delay: index * 0.1 }}
          className="flex justify-center items-center flex-col gap-1"
        >
          <img src={item.icon} width={25} height={25} />
          <p className="text-center">{item.text}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Info;
