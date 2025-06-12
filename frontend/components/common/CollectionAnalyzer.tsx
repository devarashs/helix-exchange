import CollectionChart from "./CollectionChart";
import CollectionActivity from "./CollectionActivity";
import { ICollection } from "./CollectionSection";
import { IItem } from "./ItemSection";

export default function CollectionAnalyzer({
  data,
}: {
  data: {
    collection: ICollection;
    items: IItem[];
  };
}) {
  return (
    <div className="flex flex-col gap-5">
      <CollectionActivity
        data={{
          collectionImage: data.collection.coverImage,
        }}
      />
      <CollectionChart />
    </div>
  );
}
