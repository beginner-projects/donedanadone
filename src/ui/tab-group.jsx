import { Tab } from './tab';

export const TabGroup = ({
  path,
  parallelRoutesKey,
  items,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {items.map((item) => (
        <Tab
          key={path + item.slug}
          item={item}
          path={path}
          parallelRoutesKey={parallelRoutesKey}
        />
      ))}
    </div>
  );
};
