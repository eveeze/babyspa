import { twMerge } from "tailwind-merge";

const mergeClasses = (...classes) => {
  return twMerge(...classes);
};

export default mergeClasses;
