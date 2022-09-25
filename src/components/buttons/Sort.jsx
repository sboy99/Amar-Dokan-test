import React, { useEffect } from "react";
import { Button } from "../../utils";
import { SortOrders } from "../../data";
import { Listbox } from "@headlessui/react";
import { Panel, Tip } from "../../utils";
import { ProductMenu } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { layout } from "../../app/store";
import { setGridView } from "../../features";
import {
  Squares2X2Icon,
  Bars3CenterLeftIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import { sortBy } from "../../features";

const Sort = () => {
  const dispatch = useDispatch();
  const { gridView } = useSelector(layout);

  return (
    <div className="z-0 inline-flex w-full flex-wrap items-center justify-between gap-y-2 px-4 py-2">
      <div className="flex gap-x-2">
        {/* filter button for medium devices */}
        <div className="z-50 flex-shrink-0 lg:hidden">
          <Tip tip="Filters">
            <Panel
              className="w-fit"
              Icon={AdjustmentsHorizontalIcon}
              allignPanel="left-0 origin-top-left"
            >
              <ProductMenu />
            </Panel>
          </Tip>
        </div>
        {/* sort by */}
        <div className="flex items-center gap-x-2">
          <p className=" tracking-tight text-slate-900">Sort by</p>
          <SortBy list={SortOrders} />
        </div>
      </div>

      {/* icons */}
      <div className="flex items-center gap-x-2 ">
        <Button
          hover="Grid View"
          active={gridView}
          className="rounded-full p-2 hover:bg-gray-100"
          onClick={() => dispatch(setGridView(true))}
        >
          <Squares2X2Icon className="h-6 w-6 " />
        </Button>

        <Button
          hover="List View"
          className="rounded-full p-2 hover:bg-gray-100"
          active={!gridView}
          onClick={() => dispatch(setGridView(false))}
        >
          <Bars3CenterLeftIcon className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

function SortBy({ list = [] }) {
  const [selected, setSelected] = React.useState(list[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortBy(selected?.type));
    //eslint-disable-next-line
  }, [selected]);

  return (
    <Listbox
      value={selected}
      as="div"
      onChange={setSelected}
      className="relative z-40 cursor-pointer"
    >
      <Listbox.Button
        className={`rounded bg-sky-50 py-1 px-2 text-start font-medium text-sky-500 outline-none`}
      >
        {selected?.name}
      </Listbox.Button>
      <Listbox.Options
        as="ul"
        className="absolute left-0 mt-1 origin-top-left divide-y divide-slate-900/5  overflow-hidden rounded-lg border border-gray-900/5 bg-white shadow outline-none "
      >
        {list.map((elem) => (
          <Listbox.Option key={elem?.id} as="li" value={elem}>
            {({ active, selected }) => (
              <div
                className={`whitespace-nowrap py-2 px-4 ${
                  active && `bg-slate-100`
                } rounded ${selected && `font-semibold`} text-slate-800`}
              >
                {elem?.name}
              </div>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}

export default Sort;
