import React from "react";
import { Tab } from "@headlessui/react";
import { BenefitTabs } from "../../data";

const Benefits = () => {
  function MBenefitTab() {
    return (
      <Tab.Group
        as={`div`}
        className="mx-auto rounded border border-white/10 bg-white/10 p-4 backdrop-blur-lg"
      >
        {/* list */}
        <Tab.List className="flex w-full items-center gap-x-4 overflow-x-auto whitespace-nowrap pb-4">
          {BenefitTabs.map((tab) => (
            <Tab
              key={tab.id}
              className={({ selected }) =>
                `${
                  selected
                    ? ` bg-white text-blue-600`
                    : ` text-white/80 hover:bg-white/10 hover:text-white`
                } shrink-0 rounded-full px-4 py-2 font-poppins text-lg font-medium outline-none`
              }
            >
              {tab.tab.name}
            </Tab>
          ))}
        </Tab.List>
        {/* panel */}
        <Tab.Panels className="mx-auto mt-2 max-w-lg rounded-md border border-slate-900/10 bg-white shadow-lg lg:max-w-lg">
          {BenefitTabs.map((panel, index) => (
            <Tab.Panel
              key={panel.id + index}
              className={`relative z-0 overflow-hidden p-4 ${panel.content.textColor}`}
            >
              {
                <panel.content.Icon className="absolute right-0 bottom-0 -z-10 h-32 w-32 translate-x-1/4 translate-y-1/4 -rotate-45 font-bold opacity-20 " />
              }
              <div className="flex flex-col gap-1 text-xl font-bold capitalize">
                {
                  <panel.content.Icon
                    className={`h-10 w-10 rounded-md ${panel.content.iconBg} p-2 !text-white`}
                  />
                }
                <h1 className="inline-block">{panel.content.heading}</h1>
              </div>
              <p className="mt-1 pr-2 text-sm text-slate-500/80">
                {panel.content.desc}
              </p>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    );
  }

  function LBenefitTab() {
    return (
      <Tab.Group
        as={`div`}
        className="mt-8 flex flex-wrap-reverse items-center justify-center gap-y-4 -space-x-2 md:flex-nowrap"
      >
        <Tab.Panels
          className={`relative z-10 min-h-screen-50 max-w-sm overflow-hidden rounded-2xl bg-white shadow-md`}
        >
          {BenefitTabs.map((panel) => (
            <Tab.Panel key={panel.id} className="flex flex-col gap-2 p-6">
              {
                <panel.content.Icon
                  className={`${panel.content.textColor} absolute right-0 bottom-0 h-32 w-32 translate-x-1/4 translate-y-1/4 -rotate-45 opacity-30`}
                />
              }
              <h1 className={`${panel.content.textColor}`}>
                <p>
                  {
                    <panel.content.Icon
                      className={`h-16 w-16 ${panel.content.iconBg} rounded-md p-2 !text-white`}
                    />
                  }
                </p>
                <p className="mt-2 font-lexend text-2xl font-bold capitalize">
                  {panel.content.heading}
                </p>
              </h1>
              <p className="text-slate-900/50">{panel.content.desc}</p>
            </Tab.Panel>
          ))}
        </Tab.Panels>

        <Tab.List className={`flex flex-col`}>
          {BenefitTabs.map((tab) => (
            <Tab
              key={tab.id}
              className={({ selected }) =>
                `${
                  selected
                    ? `snap-start border border-white/10 bg-white/10 backdrop-blur`
                    : `hover:bg-white/5`
                } max-w-xl rounded-xl px-6 py-4 text-start outline-none`
              }
            >
              <h1 className="font-lexend text-xl font-medium tracking-wide text-white/90">
                {tab.tab.name}
              </h1>
              <p className="tracking-tight text-white/70 line-clamp-2">
                {tab.content.desc}
              </p>
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    );
  }

  return (
    <article className="container mx-auto w-full snap-start py-10 ">
      {/* name */}
      <div className="px-4 text-xl font-semibold text-lime-300 md:hidden md:text-xl lg:px-0">
        Benefits
      </div>
      {/* headline */}
      <h1 className="px-4 font-poppins text-4xl font-extrabold tracking-tighter text-white md:px-0 md:text-center md:text-6xl">
        <p>Benefits of</p>
        <p>Choosing Our Service</p>
      </h1>
      {/* dialog tabs lg device */}
      <div className="mt-4 snap-start">
        <LBenefitTab />
      </div>
    </article>
  );
};

export default Benefits;
