import * as React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import App from "../ui";
import { CONTACT_DETAIL_HEIGHT } from "../ui/widgets/ContactDetails";
import { data } from "../data";
import { AVATAR_IMAGE_SIZE } from "../ui/widgets/AvataImage";

describe("Testing App Scrolling Functionality", () => {
  test("Scrollable Details Exists", async () => {
    const component = <App />;

    const { findByTestId } = render(component);

    const detailsItem = await findByTestId("Detail1");

    expect(detailsItem).toBeTruthy();
  });
  test("Scrollable Details Text Exists", async () => {
    const component = <App />;

    const { findByText } = render(component);

    const detailsText = await findByText("Clémence");

    expect(detailsText).toBeTruthy();
  });
  test("Scrollable Details Can be Scrolled", async () => {
    const component = <App />;

    const { findByTestId } = render(component);

    const detailScrollList = await findByTestId("DetailsScrollView");

    const eventData = {
      nativeEvent: {
        contentOffset: {
          y: CONTACT_DETAIL_HEIGHT,
        },
        contentSize: {
          // Dimensions of the scrollable content
          height: CONTACT_DETAIL_HEIGHT,
          width: 400,
        },
        layoutMeasurement: {
          // Dimensions of the device
          height: CONTACT_DETAIL_HEIGHT + AVATAR_IMAGE_SIZE,
          width: 500,
        },
      },
    };

    fireEvent.scroll(detailScrollList, eventData);

    const detailsItem2 = await findByTestId("Detail2");
    expect(detailsItem2).toBeTruthy();
  });

  test("Scrollable Details Ends at Data Size", async () => {
    const component = <App />;

    const { findByTestId } = render(component);

    const detailScrollList = await findByTestId("DetailsScrollView");
    const eventData = {
      nativeEvent: {
        contentOffset: {
          y: CONTACT_DETAIL_HEIGHT * data.length,
        },
        contentSize: {
          // Dimensions of the scrollable content
          height: CONTACT_DETAIL_HEIGHT,
          width: 400,
        },
        layoutMeasurement: {
          // Dimensions of the device
          height: CONTACT_DETAIL_HEIGHT + AVATAR_IMAGE_SIZE,
          width: 500,
        },
      },
    };

    fireEvent.scroll(detailScrollList, eventData);

    const detailsItem28 = await findByTestId("Detail28");
    expect(detailsItem28).toBeTruthy();
  });
  test("Avatar Images are Present", async () => {
    const component = <App />;

    const { findByTestId } = render(component);    

    const avatarItem = await findByTestId("avatar1");

    expect(avatarItem).toBeTruthy();
  });
  test("Avatar Images are Scrollable", async () => {
    const component = <App />;

    const { findByTestId } = render(component);

    const eventData = {
      nativeEvent: {
        contentOffset: {
          x: 100,
        },
        contentSize: {
          // Dimensions of the scrollable content
          height: AVATAR_IMAGE_SIZE,
          width: 400,
        },
        layoutMeasurement: {
          // Dimensions of the device
          height: CONTACT_DETAIL_HEIGHT + AVATAR_IMAGE_SIZE,
          width: 500,
        },
      },
    };

    const avatarScrollList = await findByTestId("AvatarScrollView");
    fireEvent.scroll(avatarScrollList, eventData);

    const avatarItem4 = await findByTestId("avatar4");
    expect(avatarItem4).toBeTruthy();
  });
});
