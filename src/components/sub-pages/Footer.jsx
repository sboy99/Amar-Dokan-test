import React from "react";
import { Brand } from "../../utils";
import { footerLinks } from "../../data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="z-0 min-h-16 border-y-4 border-white/60 bg-white/30 p-4 md:p-8">
      <div className="container mx-auto mb-4 flex flex-col gap-6">
        <Brand />
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
          {footerLinks.map((link) => (
            <FooterLinks
              key={link?.id}
              title={link?.title}
              links={link?.links}
            />
          ))}
        </div>
      </div>
      <div className="h-16 border-t border-slate-900/10">
        <div className="container mx-auto py-3">
          <h1>
            <span className="px-2 font-semibold text-slate-600 ">
              Copyright @ 2022 Amar Dokan pvt ltd.
            </span>
            <span className="block border-l border-slate-900/20 px-2 text-sm font-medium text-slate-500 md:inline-block">
              Designed by:{" "}
              <a
                className="text-lg text-sky-500"
                href="https://github.com/sboy99"
              >
                Sagar Bera
              </a>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Footer;

const FooterLinks = ({ title, links }) => {
  return (
    <div className="p-2 ">
      <h1 className="w-full border-b border-sky-500 py-2 text-lg font-semibold text-slate-800">
        {title}
      </h1>
      <div className="mt-2 flex w-full flex-col gap-1">
        {links.map((link) => (
          <Link
            className="text-sm text-slate-600 hover:text-sky-500"
            key={link?.id}
            to={link?.to}
          >
            {link?.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
