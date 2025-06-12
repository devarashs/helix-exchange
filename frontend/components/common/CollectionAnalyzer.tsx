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
      <div className="border-l rounded-l p-4">
        <CollectionActivity
          data={{
            collectionImage: data.collection.coverImage,
          }}
        />
      </div>
      <hr />
      <div className="border-l rounded-l p-4">
        <CollectionChart />
      </div>
    </div>
  );
}
