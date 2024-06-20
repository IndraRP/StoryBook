import { AlertProps } from './allert.types';
import { BsCheck, BsExclamationCircle, BsExclamationTriangle, BsQuestion } from "react-icons/bs";
import { Button } from "../Button/button";


export const Alert = ({ title, label, variant, classname, children}: AlertProps ) => {
  const icon = variant === "primary" ? <BsQuestion /> : variant === "success" ? <BsCheck /> : variant === "danger" ? <BsExclamationTriangle /> : variant === "warning" ? <BsExclamationCircle /> : ""



  return (
    <article
      className={[
        "rounded-xl p-4 text-black w-max max-w-[580px] min-h-[100px] border flex gap-2",
        `bg-${variant}`,
        classname,
      ].join(" ")}
    >



      <section className="flex items-center space-x-2">

{children && children}

        <div className="flex items-start space-x-2">
          <div className={["p-2 rounded-full", `storybook-alert-${variant}`].join(" ")}>
            {icon}
          </div>
          
          <header>
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="text-base font-medium">{label}</p>
          </header>
        </div>
        <Button label="Label" variant={variant} />
      </section>
    </article>
  );
};
