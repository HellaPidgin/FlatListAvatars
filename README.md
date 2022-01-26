" FlatListAvatars Project" 
## Get Started
You can run this expo project on the web or on a device (IOS or Android). If you're already signed into Expo, run the project [here](https://exp.host/@merciyah/FlatListAvatars)
1. Make use you have Expo Installed. You can do so [here](https://docs.expo.dev/get-started/installation/)
2. Clone the code from this repo
3. Enter directory `cd FlatListAvatars` and run `yarn && expo start`.
4. Done.

## To Test
- Run `yarn test` from root directory
## Data retrieval
- I'm using a TS file instead of a Json file because TS allows me import images locally.

## Data Structures
- I've included Navigation and Provider to leave room for feature extension. I know the life expectany of the project doesn't really support it.

## Snake & Carmel Case
- Snake case is used in all caps for constants
- Camel case is used for everything else.

## ScrollView Coupling
- FlatList could also round up to the next index for a different scrolling effect.
- Another wat to animate `FlatList` would be with React-Native `Animated` and `scrollTo worklets`