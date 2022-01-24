import { View, Text, ImageSourcePropType, Dimensions } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { ContactDataType } from '../../shared/types';

export const AVATAR_IMAGE_SIZE: number = 70;
const width = Dimensions.get('window').width;
const AVATAR_SPACE_SIZE = (width - AVATAR_IMAGE_SIZE) / 2

const HorizontalView = styled.View`
    flex-direction: row;
    align-items: center;
`

const SpaceBeforeAvatar = styled.View`
    width: ${AVATAR_SPACE_SIZE}px;
`

const AvatarImageContainer = styled.TouchableOpacity`
  width: ${AVATAR_IMAGE_SIZE}px;
  height: ${AVATAR_IMAGE_SIZE}px;
  border-radius: ${AVATAR_IMAGE_SIZE / 2}px;
  justify-content: center;
  align-items: center;
  padding: 2px;

`

const AvatarImage = styled.Image`
    width: ${AVATAR_IMAGE_SIZE-10}px;
    height: ${AVATAR_IMAGE_SIZE-10}px;
`

interface PropTypes {
    image: ImageSourcePropType,
    index: number,
    listMax: number,
}

const AvataImage = (props: PropTypes) => {
    if (props.index === 0) {
        return (
            <HorizontalView>
                <SpaceBeforeAvatar />
                <AvatarImageContainer>
                    <AvatarImage source={props.image} resizeMode='contain' />
                </AvatarImageContainer>
            </HorizontalView>)
    }
    if (props.index === props.listMax - 1) {
        return (
            <HorizontalView>
                <AvatarImageContainer>
                    <AvatarImage source={props.image} resizeMode='contain' />
                </AvatarImageContainer><SpaceBeforeAvatar />
            </HorizontalView>)
    }
    return (
        <HorizontalView>
            <AvatarImageContainer>
                <AvatarImage source={props.image} resizeMode='contain' />
            </AvatarImageContainer>
        </HorizontalView>
    );
};

export default AvataImage;
