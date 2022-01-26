import React, { useEffect, useRef, useState } from "react";
import { FlatList, Animated } from "react-native";
import styled from "styled-components/native";
import { data } from "../data";
import { ContactDataType } from "../shared/types";
import AvataImage, { AVATAR_IMAGE_SIZE } from "./widgets/AvataImage";
import ContactDetails, {
  CONTACT_DETAIL_HEIGHT,
} from "./widgets/ContactDetails";

const Background = styled.View`
  flex: 1;
`;
const AvatarListContainer = styled.View`
  height: ${AVATAR_IMAGE_SIZE}px;
`;
const contacts: React.FC = () => {
  const [contactsData, setContactsData] = useState<ContactDataType[]>([]);
  const [activeContactIndex, setActiveContactIndex] = useState<number>(0);
  // sets which of the lists is scrolling at a given time. This separates controller mode from content mode.
  const [scrollingList, setScrolling] = useState<string>("");

  const imagesListRef = useRef<FlatList>(null);
  const detailsListRef = useRef<FlatList>(null);

  const getData = async () => {
    const myData = await data;
    //console.log(myData)
    setContactsData(myData);
  };

  useEffect(() => {
    if (contactsData.length === 0) {
      getData();
    }
  }, [contactsData]);

  const handleAvatarScroll = (event: {
    nativeEvent: { contentOffset: { x: number } };
  }) => {
    if (scrollingList === "Avatars") {
      const scrollX = event.nativeEvent.contentOffset.x;
      //  console.log(
      //     (event.nativeEvent.contentOffset.x / AVATAR_IMAGE_SIZE) *
      //       CONTACT_DETAIL_HEIGHT
      //   );
      setActiveContactIndex(Math.floor(scrollX / AVATAR_IMAGE_SIZE));
      detailsListRef.current?.scrollToOffset({
        animated: true,
        offset: (scrollX / AVATAR_IMAGE_SIZE) * CONTACT_DETAIL_HEIGHT,
      });
    }
  };
  const handleDetailsScroll = (event: {
    nativeEvent: { contentOffset: { y: number } };
  }) => {
    if (scrollingList === "Details") {
      const scrollY = event.nativeEvent.contentOffset.y;
      // console.log(event.nativeEvent.contentOffset.y / CONTACT_DETAIL_HEIGHT);
      setActiveContactIndex(Math.floor(scrollY / CONTACT_DETAIL_HEIGHT));
      imagesListRef.current?.scrollToOffset({
        animated: true,
        offset: (scrollY / CONTACT_DETAIL_HEIGHT) * AVATAR_IMAGE_SIZE,
      });
    }
  };

  const handleAvatarPress = (index: number) => {
    setScrolling("")
    setActiveContactIndex(index);
    imagesListRef.current?.scrollToOffset({
      animated: true,
      offset: index * AVATAR_IMAGE_SIZE,
    });
    detailsListRef.current?.scrollToOffset({
      animated: true,
      offset: index * CONTACT_DETAIL_HEIGHT,
    });
  };

  return (
    <Background>
      <AvatarListContainer>
        <FlatList
          ref={imagesListRef}
          data={contactsData}
          onScrollBeginDrag={() => setScrolling("Avatars")}
          onScroll={handleAvatarScroll}
          scrollEventThrottle={16}
          testID="AvatarScrollView"
          snapToInterval={AVATAR_IMAGE_SIZE}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index + item.first_name}
          renderItem={(data) => (
            <AvataImage
              listMax={contactsData.length}
              index={data.index}
              image={data.item.image}
              activeIndex={activeContactIndex}
              handleAvatarPress={handleAvatarPress}
            />
          )}
        />
      </AvatarListContainer>
      <FlatList
        ref={detailsListRef}
        data={contactsData}
        testID="DetailsScrollView"
        onScrollBeginDrag={() => setScrolling("Details")}
        snapToInterval={CONTACT_DETAIL_HEIGHT}
        onScroll={handleDetailsScroll}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index + item.first_name}
        renderItem={(data) => <ContactDetails {...data.item} />}
      />
    </Background>
  );
};

export default contacts;
