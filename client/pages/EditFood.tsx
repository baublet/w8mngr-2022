import React from "react";
import { useParams } from "react-router-dom";

import { BackToButton } from "../components/Button/BackTo";
import { EditFoodForm } from "../components/Foods";
import { FoodCircleIcon } from "../components/Icons/FoodCircle";
import { PageHeading } from "../components/Type/PageHeading";

export function EditFood() {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return null;
  }
  return (
    <div className="flex flex-col gap-2 w-full">
      <PageHeading
        icon={<FoodCircleIcon />}
        quickLinks={
          <>
            <BackToButton to="/foods">Back to Foods</BackToButton>
          </>
        }
      >
        Edit Food
      </PageHeading>
      <EditFoodForm id={id} />
    </div>
  );
}
