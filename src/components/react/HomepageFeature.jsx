import { humanize } from "@/lib/utils/textConverter";
import * as Icon from "react-feather";
import { markdownify } from "@/lib/utils/textConverter";

const HomepageFeature = ({ feature_list }) => {
  return (
    <div className="key-feature-grid mt-10 grid grid-cols-2 gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 max-sm:grid-cols-1">
      {feature_list.map((item, i) => {
        const FeatherIcon = Icon[humanize(item.icon)];
        return (
          <div
            key={i}
            className="flex flex-col justify-between rounded-lg bg-surface p-4 shadow-lg hover:shadow-xl hover:shadow-secondary/50 transition-all hover:scale-105"
          >
            <div>
              <div className="flex flex-row items-center">
                <span className="icon">
                <FeatherIcon />
                </span>
                <h3 className="ml-2 break-normal text-sm md:text-lg">{item.title}</h3>
              </div>
              <p dangerouslySetInnerHTML={{__html: markdownify(item.content)}}></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomepageFeature;
