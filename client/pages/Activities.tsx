import React from "react";

import { ContentContainer } from "../components/Containers/ContentContainer";
import { PageHeading } from "../components/Type/PageHeading";
import { ContentLayout } from "../components/Containers/ContentLayout";
import { SecondaryButton } from "../components/Button/Secondary";
import { HealthCircleIcon } from "../components/Icons/HealthCircle";
import { ActivityList } from "../components/Activity";
import { Input } from "../components/Forms";
import { ActivityPageHelpers } from "../components/Activity";

export function Activities() {
  const [searchString, setSearchString] = React.useState<string>();
  return (
    <div>
      <PageHeading icon={<HealthCircleIcon />}>Your Activities</PageHeading>
      <ContentContainer>
        <ContentLayout
          mainContent={
            <div className="flex flex-col gap-4">
              <div>
                <ActivityPageHelpers />
              </div>
              <ActivityList searchString={searchString} />
            </div>
          }
          sideContent={
            <div className="flex flex-col gap-8">
              <SecondaryButton full to="/activities/new">
                New Activity
              </SecondaryButton>
              <div>
                <Input
                  type="text"
                  onChange={setSearchString}
                  value={searchString}
                  placeholder="Search String"
                  label="Search"
                />
              </div>
            </div>
          }
        />
      </ContentContainer>
    </div>
  );
}
