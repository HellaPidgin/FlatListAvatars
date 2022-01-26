import { View, Text, ImageSourcePropType, Dimensions } from "react-native";
import React from "react";

// Custom Imports for this Component
import styled from "styled-components/native";
import { ContactDataType } from "../../shared/types";
import { colors } from "../../shared/colorScheme";
const width = Dimensions.get("window").width;

// constants are declared in Snake_Case
export const AVATAR_IMAGE_SIZE: number = 70;
const AVATAR_SPACE_SIZE = (width - AVATAR_IMAGE_SIZE) / 2;

// Using Styled-Components for more component accessibility.
const HorizontalView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SpaceBeforeAvatar = styled.View`
  width: ${AVATAR_SPACE_SIZE}px;
`;

const AvatarImageContainer = styled.TouchableOpacity`
  width: ${AVATAR_IMAGE_SIZE}px;
  height: ${AVATAR_IMAGE_SIZE}px;
  border-radius: ${AVATAR_IMAGE_SIZE / 2}px;
  justify-content: center;
  align-items: center;
  padding: 2px;
`;
const ActiveAvatarImageContainer = styled.TouchableOpacity`
  width: ${AVATAR_IMAGE_SIZE}px;
  height: ${AVATAR_IMAGE_SIZE}px;
  border-radius: ${AVATAR_IMAGE_SIZE / 2}px;
  border-width: 5px;
  border-color: ${colors.GreenSheen};
  justify-content: center;
  align-items: center;
  padding: 2px;
`;

const AvatarImage = styled.Image`
  width: ${AVATAR_IMAGE_SIZE - 10}px;
  height: ${AVATAR_IMAGE_SIZE - 10}px;
`;

// End of styled components.

interface PropTypes {
  image: ImageSourcePropType;
  activeIndex: number;
  handleAvatarPress: (index: number) => void;
  index: number;
  listMax: number;
}

const AvataImage = (props: PropTypes) => {
  const isActiveContact = props.index === props.activeIndex;
  if (props.index === 0) {
    return (
      <HorizontalView>
        <SpaceBeforeAvatar />
        {isActiveContact ? (
          <ActiveAvatarImageContainer
            onPress={() => props.handleAvatarPress(props.index)}
          >
            <AvatarImage
              source={props.image}
              testID={"avatar" + props.index.toString()}
              resizeMode="contain"
            />
          </ActiveAvatarImageContainer>
        ) : (
          <AvatarImageContainer
            onPress={() => props.handleAvatarPress(props.index)}
          >
            <AvatarImage
              source={props.image}
              testID={"avatar" + props.index.toString()}
              resizeMode="contain"
            />
          </AvatarImageContainer>
        )}
      </HorizontalView>
    );
  }
  if (props.index === props.listMax - 1) {
    return (
      <HorizontalView>
        {isActiveContact ? (
          <ActiveAvatarImageContainer
            onPress={() => props.handleAvatarPress(props.index)}
          >
            <AvatarImage
              source={props.image}
              testID={"avatar" + props.index.toString()}
              resizeMode="contain"
            />
          </ActiveAvatarImageContainer>
        ) : (
          <AvatarImageContainer
            onPress={() => props.handleAvatarPress(props.index)}
          >
            <AvatarImage
              source={props.image}
              testID={"avatar" + props.index.toString()}
              resizeMode="contain"
            />
          </AvatarImageContainer>
        )}
        <SpaceBeforeAvatar />
      </HorizontalView>
    );
  }
  return (
    <HorizontalView>
      {isActiveContact ? (
        <ActiveAvatarImageContainer
          onPress={() => props.handleAvatarPress(props.index)}
        >
          <AvatarImage
            source={props.image}
            testID={"avatar" + props.index.toString()}
            resizeMode="contain"
          />
        </ActiveAvatarImageContainer>
      ) : (
        <AvatarImageContainer
          onPress={() => props.handleAvatarPress(props.index)}
        >
          <AvatarImage
            source={props.image}
            testID={"avatar" + props.index.toString()}
            resizeMode="contain"
          />
        </AvatarImageContainer>
      )}
    </HorizontalView>
  );
};

export default AvataImage;
