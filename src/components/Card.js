import { lorelei } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import React, { useMemo } from "react";

const Card = ({ details }) => {
  const { street, suite, city, zipcode } = details.address;

  const info = [
    { label: "Email: ", value: details.email },
    { label: "Phone: ", value: details.phone },
    { label: "Company: ", value: details.company.name },
    { label: "Website: ", value: details.website },
    {
      label: "Address: ",
      value: street + ", " + suite + ", " + city + ", " + zipcode,
    },
  ];

  const avatar = useMemo(() => {
    return createAvatar(lorelei, {
      seed: details.username,
      size: 200,
    }).toDataUri();
  }, [details.username]);

  return (
    <div className="card p-[10px] my-5 shadow-[0_2px_2px_0_rgba(0,0,0,0.14),0_3px_1px_-2px_rgba(0,0,0,0.12),0_1px_5px_0_rgba(0,0,0,0.2)]">
      <div className="row flex flex-wrap">
        <div className="left_s flex-none w-auto max-w-full">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="right_s basis-0 flex-grow max-w-full px-[15px]">
          <h2 className="mb-[15px] leading-[1.2] text-[32px] font-medium">
            {details.name}
          </h2>
          {info.length > 0 &&
            info.map((i) => {
              return (
                <p className="mb-[5px] text-[16px]">
                  <strong>{i.label}</strong>

                  {i.value}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Card;
