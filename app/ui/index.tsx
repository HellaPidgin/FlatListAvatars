import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Animated } from 'react-native';
import styled from 'styled-components/native';
import { data } from "../data"
import { ContactDataType } from '../shared/types';
import AvataImage, { AVATAR_IMAGE_SIZE } from './widgets/AvataImage';

const Background = styled.View`
  flex:1
`
const AvatarListContainer = styled.View`
  height: ${AVATAR_IMAGE_SIZE}
`
const contacts: React.FC = () => {
  const [contactsData, setContactsData] = useState<ContactDataType[]>([])
  const imagesListRef = useRef<FlatList>(null)
  const scrollX = useRef(new Animated.Value(0));

  const getData = async () => {
    const myData = await data;
    console.log(myData)
    setContactsData(myData)
  }

  const getItemLayout = (data: any, index: number) => ({
    length: 50,
    offset: 50 * index,
    index,
  })

  useEffect(() => {
    if (contactsData.length === 0) {
      getData();
    }
    if (contactsData.length > 0) {
      imagesListRef.current?.scrollToIndex({
        index: 1,
        animated: true,
        viewOffset: 50,
        viewPosition: 1
      })
    }
  }, [contactsData])

  return (
    <Background>
      <AvatarListContainer>
        <FlatList
          ref={imagesListRef}
          data={contactsData}
          scrollEventThrottle={16}
          snapToInterval={AVATAR_IMAGE_SIZE}
          horizontal
          showsHorizontalScrollIndicator={false}
          getItemLayout={getItemLayout}
          keyExtractor={(item, index) => index + item.first_name}
          renderItem={(data) => <AvataImage listMax={contactsData.length} index={data.index} image={data.item.image} />}
        />
      </AvatarListContainer>
    </Background>
  );
}

export default contacts;